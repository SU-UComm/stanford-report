import * as esbuild from "esbuild";
import GlobalsPlugin from "esbuild-plugin-globals";
import fs from "fs";
import { glob } from "glob";

const entryPoints = await glob("./components/*/client.+(jsx|js)");
const buildPath = "./global/build";
const globalInputJs = "./global/js/_global.js";
const globalOutputJs = `${buildPath}/global.js`;

async function generateMainEntryFile(globalInput) {
  const entry = entryPoints;
  const mainEntryFilePath = globalInput;
  // Generate the content of the main entry file
  const mainEntryContent = entry
    .map((entryPoint) => `import '../../${entryPoint}';`)
    .join("\n");
  // Write the content to the main entry file
  fs.writeFileSync(mainEntryFilePath, mainEntryContent);
}

export async function jsBundler() {
  try {
    await generateMainEntryFile(globalInputJs);

    // Perform the bundling
    const result = await esbuild.build({
      entryPoints: [globalInputJs],
      bundle: true,
      outfile: globalOutputJs,
      minify: true,
      treeShaking: true,
      sourcemap: "external",
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

    // Log success message
    console.log(`Bundled successfully.`);
  } catch (error) {
    // Log any errors
    console.error("Build failed:", error);
  }
}
