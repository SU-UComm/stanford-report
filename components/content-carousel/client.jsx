import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";

(function () {
  const contentCarousel = document.querySelector(
    `[data-hydration-component="content-carousel"]`
  );

  if (!contentCarousel) return;

  hydrateComponent({ Component, componentName: "content-carousel" });
})();
