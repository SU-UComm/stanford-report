#!/usr/bin/env node
// Imports
import * as esbuild from "esbuild";
import { globSync } from "glob";
import path from "path";
import { rimraf } from "rimraf";
import args from "args";
import chalk from "chalk";

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
  sourcemap: 'external',
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
 * @returns {{ serverEntryPoints: string[], clientEntryPoints: string[] }}
 */
function getEntryPoints(componentPath) {
  // Define our entry points (js or jsx) for the server and client
  const serverEntryPoints = globSync(
    path.join(componentPath, "server.+(js|jsx)")
  );
  const clientEntryPoints = globSync(
    path.join(componentPath, "client.+(jsx|js)")
  );

  return {
    serverEntryPoints,
    clientEntryPoints,
  };
}

/**
 * Function that builds the server and client entry points for a component folder
 * @param {string} componentPath - The path to the component folder
 */
async function buildComponent(componentPath) {
  // Get the entry points
  const { serverEntryPoints, clientEntryPoints } =
    getEntryPoints(componentPath);

  // Check that we have at least one client entry point
  if (clientEntryPoints.length > 0) {
    console.log(`⚡️⚡️ building client side bundle`);
    // Build our client bundle
    await esbuild.build(esbuildClientOptions(componentPath, clientEntryPoints));
  }

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
  const { serverEntryPoints, clientEntryPoints } =
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
