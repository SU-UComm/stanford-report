import { rimraf } from "rimraf";
import path from "path";

/**
 * Function that cleans the dist folder from a component path
 * @param {string} componentPath - the path to the component folder
 */
export async function cleanDist(componentPath) {
    console.log(`🗑️ removing dist folder...`);
    await rimraf(path.join(componentPath, "dist"));
}
