import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";

(function () {
  const inTheNews = document.querySelector(
    `[data-hydration-component="in-the-news"]`
  );

  if (!inTheNews) return;

  hydrateComponent({ Component, componentName: "in-the-news" });
})();
