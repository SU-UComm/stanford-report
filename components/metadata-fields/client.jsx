import React from "react";
// import { createRoot } from "react-dom/client";
import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";

(function () {
  const componentName = "metadata-fields";
  const metadata = document.querySelector(
    `[data-hydration-component="${componentName}"]`
  );

  if (!metadata) return;

  hydrateComponent({ Component, componentName });
  //   const domSelector = document.getElementById("metadata-field");

  //   if (!domSelector) return;

  //   domSelector.dataset.component = "metadata-fields";

  //   const metaData =
  //     domSelector && domSelector.dataset.cmpProps
  //       ? JSON.parse(domSelector.dataset.cmpProps)
  //       : null;

  //   if (metaData) {
  //     const root = createRoot(domSelector);
  //     root.render(<Component data={metaData} />);
  //   }
})();
