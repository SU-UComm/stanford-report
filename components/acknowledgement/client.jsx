import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";

(function () {
  const componentName = "acknowledgement";
  const acknowledgement = document.querySelector(
    `[data-hydration-component="${componentName}"]`
  );

  if (!acknowledgement) return;

  hydrateComponent({ Component, componentName });
})();
