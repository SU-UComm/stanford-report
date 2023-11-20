// Imports
import * as esbuild from "esbuild";
import { globSync } from "glob";
import path from "path";
import { rimraf } from "rimraf";

// Define defaults for ESBuild
const esbuildDefaults = (componentPath) => ({
  bundle: true,
  minify: true,
  sourcemap: true,
  outdir: path.join(componentPath, 'dist'),
});

async function cleanDist(componentPath) {
  await rimraf(path.join(componentPath, 'dist'));
}

async function buildComponent(componentPath) {
  // Define our entry points (js or jsx) for the server and client
  const serverEntryPoints = globSync(
    path.join(componentPath, "server.+(js|jsx)")
  );
  const clientEntryPoints = globSync(
    path.join(componentPath, "client.+(jsx|js)")
  );

  // Check that we have at least one client entry point
  if (clientEntryPoints.length > 0) {
    // Build our client bundle
    await esbuild.build({
      ...esbuildDefaults(componentPath),
      entryPoints: clientEntryPoints,
      format: "iife",
      target: "es2020",
      platform: "browser",
    });
  }

  // Build our server bundle (we must always have a server entry point)
  await esbuild.build({
    ...esbuildDefaults(componentPath),
    entryPoints: serverEntryPoints,
    format: "cjs",
    target: "node16",
    platform: "node",
  });
}

// Run an iife function as main
(async () => {
  // Look for all of the component service components in the components folder (trailing slash to get only directories)
  const components = globSync(path.join(".", "components", "*/"));

  // For each component we want to build it
  for (let i = 0; i < components.length; i++) {
    // Get the current component path
    const componentPath = components[i];

    // Clean the previously built files
    await cleanDist(componentPath);

    // Run the build for the component
    await buildComponent(componentPath);
  }
})();
