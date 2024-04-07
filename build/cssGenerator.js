/* eslint-disable no-restricted-syntax */
import fs from "fs";
import { globSync } from "glob";
import postcss from "postcss";
import postcssImport from "postcss-import";
import tailwindcss from "tailwindcss";

const buildPath = "./global/build";
const globalInputCss = "./global/css/_global.css";
const globalOutputCss = `${buildPath}/global.css`;

// Function to process CSS using postcss
const processCSS = async (css) => {
  const result = await postcss([postcssImport(), tailwindcss()]).process(css, {
    from: undefined,
  });
  return result.css;
};

export async function cssGenerator() {
  // now find all main main.css component files and lib client css files
  const mainCSS = globSync("./components/*/*.css");
  // const libCSS = await glob("./components/*/dist/client.css");
  // Combine
  let combinedContent = "";
  // [globalInputCss, ...mainCSS, ...libCSS].forEach((file) => {
  [globalInputCss, ...mainCSS].forEach((file) => {
    combinedContent += `${fs.readFileSync(file, "utf8")}\n`;
  });
  const processedCSS = await processCSS(combinedContent);
  fs.writeFileSync(globalOutputCss, processedCSS, function (err) {
    if (err) throw err;
  });
}
