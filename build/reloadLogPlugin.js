// Define our esbuild reload plugin to log when a rebuild has run
import chalk from "chalk";

export const reloadLogPlugin = (componentPath, buildTarget) => ({
    name: "reload-log",
    setup(build) {
        const count = 0;
        build.onEnd(() => {
            if (count === 0) {
                console.log(
                    `⚡️⚡️ ${chalk.green(
                        `Build complete for ${componentPath} ${buildTarget}`
                    )} ⚡️⚡️`
                );
            } else {
                console.log(
                    `⚡️⚡️ ${chalk.green(
                        `Rebuild complete for ${componentPath} ${buildTarget}`
                    )} ⚡️⚡️`
                );
            }
        });
    },
});
