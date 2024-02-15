// import React from "react";
// import { createRoot } from "react-dom/client";
import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";

(function () {
  const componentName = "topic-subtopic-listing";
  const target = document.querySelector(
    `[data-hydration-component="${componentName}"]`
  );

  if (!target) return;
  hydrateComponent({ Component, componentName });
})();
