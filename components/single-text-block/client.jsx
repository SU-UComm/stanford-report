import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";

(function () {
  const componentName = "single-text-block";
  const singleTextBlock = document.querySelector(
    `[data-hydration-component="${componentName}"]`
  );

  if (!singleTextBlock) return;

  hydrateComponent({ Component, componentName });
})();
