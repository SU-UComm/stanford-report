import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";

(function () {
  const base = document.querySelector(
    `[data-hydration-component="base-component"]`
  );

  if (!base) return;

  hydrateComponent({ Component, componentName: "base-component" });
})();
