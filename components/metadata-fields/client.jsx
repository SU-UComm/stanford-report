import React from "react";
// import { createRoot } from "react-dom/client";
import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";

(function () {
  const componentName = "metadata-fields";
  const metadata = document.querySelector(
    `[data-hydration-component="${componentName}"]`
  );

  console.log(metadata);

  if (!metadata) return;

  hydrateComponent({ Component, componentName });
})();
