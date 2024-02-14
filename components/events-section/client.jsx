import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";

(function () {
  const componentName = "events-section";
  const eventsSection = document.querySelector(
    `[data-hydration-component="${componentName}"]`
  );

  if (!eventsSection) return;

  hydrateComponent({ Component, componentName });
})();
