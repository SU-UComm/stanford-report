import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";

(function () {
  const combinedGrid = document.querySelector(
    `[data-hydration-component="combined-content-grid"]`
  );

  if (!combinedGrid) return;

  hydrateComponent({ Component, componentName: "combined-content-grid" });
})();
