import path from "path";
import GlobalsPlugin from "esbuild-plugin-globals";

// Define defaults for ESBuild
export const esbuildDefaults = (componentPath, minify) => ({
  bundle: true,
  minify,
  treeShaking: true,
  external: ['react', 'react-dom', 'react-dom-server'],
  outdir: path.join(componentPath),
});

export const esbuildServerOptions = (componentPath, entryPoints, minify) => ({
  ...esbuildDefaults(componentPath, minify),
  entryPoints,
  format: "cjs",
  target: "node20",
  platform: "node",
  sourcemap: false,
  outExtension: {
    ".js": ".cjs",
  },
});

export const esbuildClientOptions = (componentPath, entryPoints, minify) => ({
  ...esbuildDefaults(componentPath, minify),
  entryPoints,
  format: "iife",
  target: "es2020",
  platform: "browser",
  sourcemap: "external",
  plugins: [
    GlobalsPlugin({
      react: "React",
      "react-dom": "ReactDOM",
    }),
  ],
});
