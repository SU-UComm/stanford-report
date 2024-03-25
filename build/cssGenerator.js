/* eslint-disable no-restricted-syntax */
import fs from "fs";
import path from "path";
import { glob, globSync } from "glob";
import postcss from "postcss";
import postcssImport from "postcss-import";
import tailwindcss from "tailwindcss";

// Function to process CSS using postcss
const processCSS = async (css) => {
  const result = await postcss([postcssImport(), tailwindcss()]).process(css, {
    from: undefined,
  });
  return result.css;
};

export async function cssGenerator() {
  // the global css input
  const globalInput = ["./global/css/_global.css"];
  // final tailwind output
  const buildPath = "./global/build";
  const globalOutput = `${buildPath}/global.css`;

  // now find all main main.css component files and lib client css files
  const mainCSS = await glob("./components/*/*.css");
  const libCSS = await glob("./components/*/dist/client.css");

  // Combine
  let combinedContent = "";
  [...globalInput, ...mainCSS, ...libCSS].forEach((file) => {
    combinedContent += `${fs.readFileSync(file, "utf8")}\n`;
  });
  const processedCSS = await processCSS(combinedContent);
  fs.writeFileSync(globalOutput, processedCSS, function (err) {
    if (err) throw err;
  });

  const components = globSync(path.join(".", "components", "*/"));
  for (let i = 0; i < components.length; i++) {
    // Get the current component path
    const distPath = `${components[i]}/dist/`;

    const pathExists = fs.existsSync(distPath);

    if (!pathExists) {
      // console.log(`Destination directory does not exist for ${components[i]}`);
    } else {
      fs.copyFile(globalOutput, `${distPath}global.css`, (err) => {
        if (err) {
          // console.log("Operation Failed: ", err);
        }
        // console.log(`Action completed for ${components[i]}`);
      });
    }
  }
}
