// import React from "react";
import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
// import { createRoot } from "react-dom/client";
import Component from "./Component";

(function () {
  const componentName = "feature-story-hero";
  const target = document.querySelector(
    `[data-hydration-component="${componentName}"]`
  );

  if (!target) return;
  hydrateComponent({ Component, componentName });
})();
