import path from "path";
import GlobalsPlugin from "esbuild-plugin-globals";

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
  plugins: [
    GlobalsPlugin({
      react: "React",
      "react-dom": "ReactDOM",
    }),
  ],
});
