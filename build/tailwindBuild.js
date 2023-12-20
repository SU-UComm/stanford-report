import { exec } from "child_process";
import util from "util";
import fs from "fs";
import * as espree from "espree";
import memoize from "memoizee";
import path from "path";
import { globSync } from "glob";
import postCSS from "postcss";
import postCSSWrap from "postcss-wrap";

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
    const { stdout: tailwindOut } = await execPromise(
      `npx tailwind -i ${tailwindEntryPoints.join(
        " "
      )} --content ${contentFiles}`
    );

    // read the component name from the manifest
    const { name: componentName } = JSON.parse(
      fs.readFileSync(path.join(componentPath, "manifest.json"), "utf-8")
    );

    // Scope the css from tailwind to the current component
    const scopedContents = await postCSS([
      postCSSWrap({
        selector: `[data-hydration-component="${componentName}"]`,
      }),
    ])
      .process(tailwindOut, { from: output })
      .then((result) => {
        return result.css;
      })
      .catch((error) => {
        throw new Error(
          `Error scoping tailwind css from ${componentName}: ${error}`
        );
      });

    // Write the file
    fs.writeFileSync(output, scopedContents, "utf-8");
  }
}
