import { exec } from "child_process";
import fs from "fs";
import * as espree from "espree";
import memoize from "memoizee";
import path from "path";
import { globSync } from "glob";

export function resolveImport(relativePath, filePath) {
    return (
        globSync(`${path.resolve(filePath, "..", relativePath)}.+(js|jsx)`).at(
            0
        ) || ""
    );
}

function processNode(node, entryPoint) {
    let contentPaths = [];
    // Check if this is an import declaration and it is local
    if (
        node?.type === "ImportDeclaration" &&
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
        // Get the content paths for tailwind for this component
        const contentFiles = memoizedGetContentFiles(
            entryPoints.map((entryPoint) => path.resolve(entryPoint))
        );

        // Spawn a new process and build the tailwind css with the config for this particular component
        await exec(
            `npx tailwind -i ${tailwindEntryPoints.join(" ")} -o ${path.join(
                componentPath,
                "dist",
                "main.css"
            )} --content ${contentFiles} ${watchFlag}`
        );
    }
}
