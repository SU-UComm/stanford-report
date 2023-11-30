import * as esbuild from "esbuild";
import { esbuildClientOptions, esbuildServerOptions } from "./config.js";
import { buildCSS } from "./tailwindBuild.js";
import { getEntryPoints } from "./getEntryPoints.js";

/**
 * Function that builds the server and client entry points for a component folder
 * @param {string} componentPath - The path to the component folder
 */
export async function buildComponent(componentPath, minify) {
  // Get the entry points
  const { serverEntryPoints, clientEntryPoints, tailwindEntryPoints } =
    getEntryPoints(componentPath);

  // Check that we have at least one client entry point
  if (clientEntryPoints.length > 0) {
    console.log(`⚡️⚡️ building client side bundle`);
    // Build our client bundle
    await esbuild.build(
      esbuildClientOptions(componentPath, clientEntryPoints, minify)
    );
  }

  console.log(`⚡️⚡️ building tailwind css bundle`);
  // Build the tailwind bundle for the component
  await buildCSS(tailwindEntryPoints, clientEntryPoints, componentPath);

  console.log(`⚡️⚡️ building server bundle`);
  // Build our server bundle (we must always have a server entry point)
  await esbuild.build(
    esbuildServerOptions(componentPath, serverEntryPoints, minify)
  );
}
