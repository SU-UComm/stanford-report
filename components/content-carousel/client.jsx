import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";

(function () {
  const componentName = "content-carousel";
  const contentCarousel = document.querySelector(
    `[data-hydration-component="${componentName}"]`
  );

  if (!contentCarousel) return;

  hydrateComponent({ Component, componentName });
})();
