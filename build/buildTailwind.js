/* eslint-disable no-restricted-syntax */
import fs from "fs";
import { glob } from "glob";
import { exec } from "child_process";
import util from "util";

export async function buildTailwind() {
  const execPromise = util.promisify(exec);
  // the global css input
  const globalInput = "./global/css/_global.css";
  // final tailwind output
  const buildPath = "./global/build";
  const globalOutput = `${buildPath}/global-export.css`;
  // final component output
  const componentOutput = `${buildPath}/component-export.css`;

  await execPromise(`npx tailwind -i ${globalInput} -o ${globalOutput}`);

  // now find all main main.css component files and lib client css files
  const mainCSS = await glob("./components/*/*.css");
  const libCSS = await glob("./components/*/dist/client.css");

  // Combine
  let combinedContent = "";
  [...mainCSS, ...libCSS].forEach((file) => {
    combinedContent += `${fs.readFileSync(file, "utf8")}\n`;
  });

  fs.writeFile(componentOutput, combinedContent, function (err) {
    if (err) throw err;
  });
  await execPromise(`npx tailwind -i ${componentOutput} -o ${componentOutput}`);
  console.log("component Output written");
}
