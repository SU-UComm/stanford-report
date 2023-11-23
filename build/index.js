#!/usr/bin/env node
import { globSync } from "glob";
import args from "args";
import path from "path";
import { cleanDist } from "./cleanDist.js";
import { buildComponent } from "./buildComponent.js";
import { watchComponent } from "./watchComponent.js";

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

// Run an iife function as main
(async () => {
  // Look for all of the component service components in the components folder (trailing slash to get only directories)
  const components = globSync(path.join(".", "components", "*/"));

  // Define our array of build promises
  const allBuildPromises = [];

  // For each component we want to build it
  for (let i = 0; i < components.length; i++) {
    // Get the current component path
    const componentPath = components[i];

    // Get the component folder name
    const componentFolder = componentPath.split("/").at(-1);

    // Log that we are building
    console.log(`Building for ${componentFolder}: \n`);

    // Define an array of our components promises
    const componentBuildPromises = [];

    // Clean the previously built files
    const cleanDistPromise = cleanDist(componentPath);

    let buildPromise = null;

    // If we aren't watching just do a build
    if (!watch) {
      // Run the build for the component
      buildPromise = buildComponent(componentPath, minify);
    } else {
      buildPromise = watchComponent(componentPath, minify);
    }

    // Push our promises to the component array
    componentBuildPromises.push(cleanDistPromise, buildPromise);
    // Push the promises to the all build promises array
    allBuildPromises.push(cleanDistPromise, buildPromise);

    // Wait for all the promises to resolve before we log that the component has finished building
    Promise.all(componentBuildPromises).then((results) => {
      console.log(`Build for ${componentFolder} complete \n`);
    });
  }

  // When all promises have resolved then log that we have succeeded with the build
  Promise.all(allBuildPromises).then(() => {
    console.log("✅ build has completed successfully");
  });
})();
