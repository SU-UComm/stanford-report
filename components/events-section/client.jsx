import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";

(function () {
  const eventsSection = document.querySelector(
    `[data-hydration-component="events-section"]`
  );

  if (!eventsSection) return;

  hydrateComponent({ Component, componentName: "events-section" });
})();
