import path from "path";
import { globSync } from "glob";

/**
 * Function that gets the server and client entry points
 * @param {string} componentPath - The path to the component folder
 * @returns {{ serverEntryPoints: string[], clientEntryPoints: string[], tailwindEntryPoints: string[] }}
 */
export function getEntryPoints(componentPath) {
  // Define our entry points (js or jsx) for the server and client
  const serverEntryPoints = globSync(
    path.join(componentPath, "server.+(js|jsx)")
  );
  const clientEntryPoints = globSync(
    path.join(componentPath, "client.+(jsx|js)")
  );
  const tailwindEntryPoints = globSync(path.join(componentPath, "main.css"));

  return {
    serverEntryPoints,
    clientEntryPoints,
    tailwindEntryPoints,
  };
}
