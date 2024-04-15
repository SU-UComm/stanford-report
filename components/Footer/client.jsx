import hydrateComponent from "../../packages/utils/hydrate-component";
import Component from "./Component";

(function () {
  const target = "footer-component";
  const element = document.querySelector(
    `[data-hydration-component="${target}"]`
  );

  if (!element) return;
  hydrateComponent({ Component, componentName: target });
})();
