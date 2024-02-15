import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";

(function () {
  const element = document.querySelector(
    `[data-hydration-component="leadership-messages-jr"]`
  );
  if (!element) return;

  // Hydrate the component
  hydrateComponent({ Component, componentName: "leadership-messages-jr" });
})();
