import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";

(function () {
  const componentName = "button";
  const button = document.querySelector(
    `[data-hydration-component="${componentName}"]`
  );

  if (!button) return;

  hydrateComponent({ Component, componentName });
})();
