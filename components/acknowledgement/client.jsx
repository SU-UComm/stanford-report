import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";

(function () {
  const acknowledgement = document.querySelector(
    `[data-hydration-component="acknowledgement"]`
  );

  if (!acknowledgement) return;

  hydrateComponent({ Component, componentName: "acknowledgement" });
})();
