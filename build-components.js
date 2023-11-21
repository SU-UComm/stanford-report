#!/usr/bin/env node
// Imports
import * as esbuild from "esbuild";
import { globSync } from "glob";
import path from "path";
import { rimraf } from "rimraf";
import args from "args";
import chalk from "chalk";
import { exec } from "child_process";
import fs from 'fs';
import * as espree from "espree";
import memoize from "memoizee";

// Define a formatter to format lists
const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});

// Setup our args
args
  .option("watch", "run the build in watch mode", false)
  .option(
    "minify",
    "minify the output",
    process.env.NODE_ENV === "production" || false
  );

// Get our args
const { watch, minify } = args.parse(process.argv);

// Define our esbuild reload plugin to log when a rebuild has run
const reloadPlugin = (componentPath, buildTarget) => ({
  name: "reload-log",
  setup(build) {
    let count = 0;
    build.onEnd(() => {
      if (count === 0) {
        console.log(
          `⚡️⚡️ ${chalk.green(
            `Build complete for ${componentPath} ${buildTarget}`
          )} ⚡️⚡️`
        );
      } else {
        console.log(
          `⚡️⚡️ ${chalk.green(
            `Rebuild complete for ${componentPath} ${buildTarget}`
          )} ⚡️⚡️`
        );
      }
    });
  },
});

// Define defaults for ESBuild
const esbuildDefaults = (componentPath) => ({
  bundle: true,
  minify,
  sourcemap: "external",
  outdir: path.join(componentPath, "dist"),
});

const esbuildServerOptions = (componentPath, entryPoints) => ({
  ...esbuildDefaults(componentPath),
  entryPoints,
  format: "cjs",
  target: "node16",
  platform: "node",
});

const esbuildClientOptions = (componentPath, entryPoints) => ({
  ...esbuildDefaults(componentPath),
  entryPoints,
  format: "iife",
  target: "es2020",
  platform: "browser",
});


function resolveImport(relativePath, filePath) {
  return globSync(`${path.resolve(filePath, '..', relativePath)}.+(js|jsx)`).at(0) || '';
}

const memoizedGetContentFiles = memoize(getContentFiles);

function getContentFiles(entryPoints) {
  // Define our contents list
  let content = entryPoints;

  entryPoints.forEach(entryPoint => {
    // Read in the file contents
    const entryPointContents = fs.readFileSync(entryPoint, "utf-8");

    // parse the contents
    const ast = espree.parse(entryPointContents, {
      sourceType: "module",
      ecmaVersion: 2022,
      ecmaFeatures: {
        jsx: true,
      },
    });

    // Look for all the import statements, and filter so we only have the local ones
    ast.body.forEach(node => {
      // Check if this is an import declaration and it is local
      if (
        node?.type === "ImportDeclaration" &&
        fs.existsSync(resolveImport(node?.source?.value, entryPoint))
      ) {
        content = [
          ...content,
          ...getContentFiles([resolveImport(node?.source?.value, entryPoint)]) || [],
        ];
      }
    });
  })

  // return the content array
  return [...new Set(content)];
}

async function buildCSS(tailwindEntryPoints, entryPoints, componentPath) {
  const watchFlag = watch ? '--watch' : '';
  // Check if we got any tailwind entry points
  if (tailwindEntryPoints.length > 0) {
    // Get the content paths for tailwind for this component
    const contentFiles = memoizedGetContentFiles(entryPoints.map((entryPoint) => path.resolve(entryPoint)));

    // Spawn a new process and build the tailwind css with the config for this particular component
    await exec(
      `npx tailwind -i ${tailwindEntryPoints.join(" ")} -o ${path.join(
        componentPath,
        "dist",
        "main.css"
      )} --content ${contentFiles} ${watchFlag}`
    );
  }
}

/**
 * Function that cleans the dist folder from a component path
 * @param {string} componentPath - the path to the component folder
 */
async function cleanDist(componentPath) {
  console.log(`🗑️ removing dist folder...`);
  await rimraf(path.join(componentPath, "dist"));
}

/**
 * Function that gets the server and client entry points
 * @param {string} componentPath - The path to the component folder
 * @returns {{ serverEntryPoints: string[], clientEntryPoints: string[], tailwindEntryPoints: string[] }}
 */
function getEntryPoints(componentPath) {
  // Define our entry points (js or jsx) for the server and client
  const serverEntryPoints = globSync(
    path.join(componentPath, "server.+(js|jsx)")
  );
  const clientEntryPoints = globSync(
    path.join(componentPath, "client.+(jsx|js)")
  );
  const tailwindEntryPoints = globSync(path.join(componentPath, "main.css"));

  return {
    serverEntryPoints,
    clientEntryPoints,
    tailwindEntryPoints,
  };
}

/**
 * Function that builds the server and client entry points for a component folder
 * @param {string} componentPath - The path to the component folder
 */
async function buildComponent(componentPath) {
  // Get the entry points
  const { serverEntryPoints, clientEntryPoints, tailwindEntryPoints } =
    getEntryPoints(componentPath);

  // Check that we have at least one client entry point
  if (clientEntryPoints.length > 0) {
    console.log(`⚡️⚡️ building client side bundle`);
    // Build our client bundle
    await esbuild.build(esbuildClientOptions(componentPath, clientEntryPoints));
  }

  console.log(`⚡️⚡️ building tailwind css bundle`);
  // Build the tailwind bundle for the component
  await buildCSS(tailwindEntryPoints, clientEntryPoints, componentPath);

  console.log(`⚡️⚡️ building server bundle`);
  // Build our server bundle (we must always have a server entry point)
  await esbuild.build(esbuildServerOptions(componentPath, serverEntryPoints));
}

/**
 * Function that builds a component server and client files and watches for changes in these or their dependent files
 * @param {string} componentPath - The path to the component folder
 */
async function watchComponent(componentPath) {
  // Get the entry points
  const { serverEntryPoints, clientEntryPoints, tailwindEntryPoints } =
    getEntryPoints(componentPath);

  // Check that we have a client entry point
  if (clientEntryPoints.length > 0) {
    // Define our context
    const clientOptions = esbuildClientOptions(
      componentPath,
      clientEntryPoints
    );
    let clientCtx = await esbuild.context({
      ...clientOptions,
      plugins: [
        ...(clientOptions.plugins || []),
        reloadPlugin(componentPath, "client"),
      ],
    });

    // Start Watching
    await clientCtx.watch();
    console.log(
      `watching for changes to ${formatter.format(clientEntryPoints)}`
    );
  }

  console.log(`watching for changes to the tailwind css files`);
  // Build the tailwind bundle for the component
  await buildCSS(tailwindEntryPoints, clientEntryPoints, componentPath);

  const serverOptions = esbuildServerOptions(componentPath, serverEntryPoints);
  let serverCtx = await esbuild.context({
    ...serverOptions,
    plugins: [
      ...(serverOptions?.plugins || []),
      reloadPlugin(componentPath, "server"),
    ],
  });

  await serverCtx.watch();
  console.log(`watching for changes to ${formatter.format(serverEntryPoints)}`);
}

// Run an iife function as main
(async () => {
  // Look for all of the component service components in the components folder (trailing slash to get only directories)
  const components = globSync(path.join(".", "components", "*/"));

  // For each component we want to build it
  for (let i = 0; i < components.length; i++) {
    // Get the current component path
    const componentPath = components[i];

    // Get the component folder name
    const componentFolder = componentPath.split("/").at(-1);

    // Log that we are building
    console.log(`Building for ${componentFolder}: \n`);

    // Clean the previously built files
    await cleanDist(componentPath);

    // If we aren't watching just do a build
    if (!watch) {
      // Run the build for the component
      await buildComponent(componentPath);
    } else {
      await watchComponent(componentPath);
    }

    console.log(`Build for ${componentFolder} complete \n`);
  }
})();
