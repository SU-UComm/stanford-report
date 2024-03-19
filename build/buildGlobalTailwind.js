/* eslint-disable no-restricted-syntax */
import fs from "fs";
import { glob } from "glob";
import { exec } from "child_process";
import util from "util";

const execPromise = util.promisify(exec);

// the global css input
const globalInput = "./global/css/_global.css";
// final tailwind output
const globalOutput = "./global/build/global.css";
// final component output
const componentOutput = "./global/build/component.css";

await execPromise(`npx tailwind -i ${globalInput} -o ${globalOutput}`);

// now find all main main.css component files
const mainCSS = await glob("./components/*/main.css");
// Combine
let combinedContent = "";
mainCSS.forEach((file) => {
  combinedContent += `${fs.readFileSync(file, "utf8")}\n`;
});

fs.writeFile(componentOutput, combinedContent, function (err) {
  if (err) throw err;
  console.log("componentOutput written");
});
await execPromise(`npx tailwind -i ${componentOutput} -o ${componentOutput}`);
