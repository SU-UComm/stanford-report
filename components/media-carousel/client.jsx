import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";

(function () {
  const mediaCarousel = document.querySelector(
    `[data-hydration-component="media-carousel"]`
  );

  if (!mediaCarousel) return;

  hydrateComponent({ Component, componentName: "media-carousel" });
})();
