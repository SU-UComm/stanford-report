import fs from "fs";
import { globSync } from "glob";
import path from "path";
import chokidar from "chokidar";
import { cssGenerator } from "./cssGenerator.js";
import { jsBundler } from "./jsBundler.js";

// the global css input
const buildPath = "./global/build";
const globalOutputCss = `${buildPath}/global.css`;
const globalOutputJs = `${buildPath}/global.js`;

const distFiles = async () => {
  await jsBundler();
  await cssGenerator();

  // const components = globSync(path.join(".", "components", "*/"));
  // for (let i = 0; i < components.length; i++) {
  //   // Get the current component path
  //   const distPath = `${components[i]}/dist/`;

  //   const pathExists = fs.existsSync(distPath);

  //   if (!pathExists) {
  //     // console.log(`Destination directory does not exist for ${components[i]}`);
  //   } else {
  //     fs.copyFile(globalOutputCss, `${distPath}global.css`, (err) => {
  //       if (err) {
  //         console.log(`Operation Failed for for ${components[i]}:  ${err}`);
  //       }
  //     });
  //     fs.copyFile(globalOutputJs, `${distPath}global.js`, (err) => {
  //       if (err) {
  //         console.log(`Operation Failed for for ${components[i]}:  ${err}`);
  //       }
  //     });
  //   }
  // }
};

(async () => {
  await jsBundler();
  await cssGenerator();

  const pathsToWatch = [
    "./components/*/*.(jsx|js|cjs|css|scss|html)",
    "./packages/**/*.(jsx|js|cjs|css|scss|html)",
  ];
  chokidar.watch(pathsToWatch).on("change", async (event, pth) => {
    console.log(event, "changed");
    await distFiles();
  });
})();
