import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    root: "./global",
    publicDir: "'./global/build",
    server: {
      port: 5173,
      watch: {
        usePolling: true,
        interval: 100,
      },
    },
    css: {
      postcss: null, // Disable PostCSS processing
    },
  };
});
