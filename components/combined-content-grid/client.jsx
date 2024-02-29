import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";

(function () {
  const componentName = "combined-content-grid";
  const combinedGrid = document.querySelector(
    `[data-hydration-component="${componentName}"]`
  );

  if (!combinedGrid) return;

  hydrateComponent({ Component, componentName });
})();
