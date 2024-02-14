import hydrateComponent from "../../packages/utils/hydrate-component";
import Component from "./Component";

(function () {
  const componentName = "subtopics-subnav";
  const target = document.querySelector(
    `[data-hydration-component="${componentName}"]`
  );

  if (!target) return;

  hydrateComponent({ Component, componentName });
})();
