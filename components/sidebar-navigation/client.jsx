import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";

(function () {
  const componentName = "sidebar-navigation";
  const base = document.querySelector(
    `[data-hydration-component="${componentName}"]`
  );

  if (!base) return;

  hydrateComponent({ Component, componentName });
})();
