import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";

(function () {
  const componentName = "in-the-news";
  const inTheNews = document.querySelector(
    `[data-hydration-component="${componentName}"]`
  );

  if (!inTheNews) return;

  hydrateComponent({ Component, componentName });
})();
