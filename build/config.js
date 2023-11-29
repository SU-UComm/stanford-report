import path from "path";

// Define defaults for ESBuild
export const esbuildDefaults = (componentPath, minify) => ({
  bundle: true,
  minify,
  treeShaking: true,
  sourcemap: "external",
  outdir: path.join(componentPath, "dist"),
});

export const esbuildServerOptions = (componentPath, entryPoints, minify) => ({
  ...esbuildDefaults(componentPath, minify),
  entryPoints,
  format: "cjs",
  target: "node16",
  platform: "node",
});

export const esbuildClientOptions = (componentPath, entryPoints, minify) => ({
  ...esbuildDefaults(componentPath, minify),
  entryPoints,
  format: "iife",
  target: "es2020",
  platform: "browser",
});
