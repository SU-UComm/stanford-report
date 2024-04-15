import hydrateComponent from "../../packages/utils/hydrate-component";
import Component from "./Component";

(async function () {
  const target = "subtopic-subnav-component";
  const element = document.querySelector(
    `[data-hydration-component="${target}"]`
  );
  if (!element) return;

  // Hydrate the component
  hydrateComponent({ Component, componentName: target });
})();
