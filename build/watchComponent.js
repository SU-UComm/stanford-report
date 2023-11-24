import * as esbuild from "esbuild";
import { getEntryPoints } from "./getEntryPoints.js";
import { esbuildClientOptions, esbuildServerOptions } from "./config.js";
import { listFormatter } from "./listFormatter.js";
import { reloadLogPlugin } from "./reloadLogPlugin.js";
import { buildCSS } from "./tailwindBuild.js";

/**
 * Function that builds a component server and client files and watches for changes in these or their dependent files
 * @param {string} componentPath - The path to the component folder
 */
export async function watchComponent(componentPath) {
    // Get the entry points
    const { serverEntryPoints, clientEntryPoints, tailwindEntryPoints } =
        getEntryPoints(componentPath);

    // Check that we have a client entry point
    if (clientEntryPoints.length > 0) {
        // Define our context
        const clientOptions = esbuildClientOptions(
            componentPath,
            clientEntryPoints
        );

        const clientCtx = await esbuild.context({
            ...clientOptions,
            plugins: [
                ...(clientOptions.plugins || []),
                reloadLogPlugin(componentPath, "client"),
            ],
        });

        // Start Watching
        await clientCtx.watch();
        console.log(
            `watching for changes to ${listFormatter.format(clientEntryPoints)}`
        );
    }

    console.log(
        `watching for changes to ${listFormatter.format(tailwindEntryPoints)}`
    );
    // Build the tailwind bundle for the component
    await buildCSS(tailwindEntryPoints, clientEntryPoints, componentPath, true);

    const serverOptions = esbuildServerOptions(
        componentPath,
        serverEntryPoints
    );
    const serverCtx = await esbuild.context({
        ...serverOptions,
        plugins: [
            ...(serverOptions?.plugins || []),
            reloadLogPlugin(componentPath, "server"),
        ],
    });

    await serverCtx.watch();
    console.log(
        `watching for changes to ${listFormatter.format(serverEntryPoints)}`
    );
}
