import { exec } from "child_process";
import util from "util";
import fs from "fs";
import * as espree from "espree";
import memoize from "memoizee";
import path from "path";
import { globSync } from "glob";

const execPromise = util.promisify(exec);

export function resolveImport(relativePath, filePath) {
  return (
    globSync(`${path.resolve(filePath, "..", relativePath)}.+(js|jsx)`).at(0) ||
    ""
  );
}

function processNode(node, entryPoint) {
  let contentPaths = [];
  // Check if this is an import declaration and it is local
  if (
    (node?.type === "ImportDeclaration" ||
      node?.type === "ExportDefaultDeclaration" ||
      node?.type === "ExportNamedDeclaration") &&
    node?.source?.value &&
    fs.existsSync(resolveImport(node?.source?.value, entryPoint))
  ) {
    // eslint-disable-next-line no-use-before-define
    contentPaths = getContentFiles([
      resolveImport(node?.source?.value, entryPoint),
    ]);
  }

  return contentPaths;
}

function getContentFiles(entryPoints) {
  // Define our contents list
  let content = entryPoints;

  entryPoints.forEach((entryPoint) => {
    // Read in the file contents
    const entryPointContents = fs.readFileSync(entryPoint, "utf-8");

    // parse the contents
    const ast = espree.parse(entryPointContents, {
      sourceType: "module",
      ecmaVersion: 2022,
      ecmaFeatures: {
        jsx: true,
      },
    });

    // Look for all the import statements, and filter so we only have the local ones
    ast.body.forEach((node) => {
      content = [...content, ...processNode(node, entryPoint)];
    });
  });

  // return the content array
  return [...new Set(content)];
}
export const memoizedGetContentFiles = memoize(getContentFiles);

export async function buildCSS(
  tailwindEntryPoints,
  entryPoints,
  componentPath,
  watch = false
) {
  const watchFlag = watch ? "--watch" : "";
  // Check if we got any tailwind entry points
  if (tailwindEntryPoints.length > 0) {
    // Define our output file
    const output = path.join(componentPath, "dist", "main.css");

    // Get the content paths for tailwind for this component
    const contentFiles = memoizedGetContentFiles(
      entryPoints.map((entryPoint) => path.resolve(entryPoint))
    );

    // Spawn a new process and build the tailwind css with the config for this particular component
    await execPromise(
      `npx tailwind -i ${tailwindEntryPoints.join(
        " "
      )} -o ${output} --content ${contentFiles} ${watchFlag}`
    );

    // TODO: This needs to be updated to use PostCSS to work properly but this will do for now

    // Read in the main.css file
    let cssContents = fs.readFileSync(output, "utf-8");

    // read the component name from the manifest
    const { name: componentName } = JSON.parse(
      fs.readFileSync(path.join(componentPath, "manifest.json"), "utf-8")
    );

    // Wrap the contents in our component data attribute
    cssContents = `[data-hydration-component="${componentName}"] {
  ${cssContents}
      }`;

    fs.writeFileSync(output, cssContents, "utf-8");
  }

  return Promise.resolve();
}
