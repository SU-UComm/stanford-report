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
  const buildPath = "./global/build/";
  const globalOutput = `${buildPath}global.css`;
  // final component output
  const componentOutput = `${buildPath}component.css`;

  await execPromise(`npx tailwind -i ${globalInput} -o ${globalOutput}`);

  // now find all main main.css component files
  const mainCSS = await glob("./components/**/dist/*.css");
  // Combine
  let combinedContent = "";
  mainCSS.forEach((file) => {
    combinedContent += `${fs.readFileSync(file, "utf8")}\n`;
  });

  fs.writeFile(componentOutput, combinedContent, function (err) {
    if (err) throw err;
  });
  // await execPromise(`npx tailwind -i ${componentOutput} -o ${componentOutput}`);
  console.log("componentOutput written");
}
