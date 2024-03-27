// Define our esbuild reload plugin to log when a rebuild has run
import { buildCSS } from "./tailwindBuild.js";

export const tailwindWatchPlugin = (
  tailwindEntryPoints,
  entryPoints,
  componentPath
) => ({
  name: "build-tailwind",
  setup(build) {
    build.onStart(() => {
      // buildCSS(tailwindEntryPoints, entryPoints, componentPath);
      // console.log("rebuild global");
    });
  },
});
