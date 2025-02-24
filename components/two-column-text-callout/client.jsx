import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";

(function () {
  const componentName = "two-column-text-callout";
  const target = document.querySelector(
    `[data-hydration-component="${componentName}"]`
  );

  if (!target) return;

  hydrateComponent({ Component, componentName });
})();
