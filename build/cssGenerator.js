/* eslint-disable no-restricted-syntax */
import fs from "fs";
import path from "path";
import { glob, globSync } from "glob";
import { exec } from "child_process";
import util from "util";

export async function cssGenerator() {
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

  const components = globSync(path.join(".", "components", "*/"));
  console.log(components.length);
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
