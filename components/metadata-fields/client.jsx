import React from "react";
import { createRoot } from "react-dom/client";
import Component from "./Component";

(function () {
  const domSelector = document.getElementById("metadata-field");

  if (!domSelector) return;

  domSelector.dataset.component = "metadata-fields";

  const metaData =
    domSelector && domSelector.dataset.cmpProps
      ? JSON.parse(domSelector.dataset.cmpProps)
      : null;

  if (metaData) {
    const root = createRoot(domSelector);
    root.render(<Component data={metaData} />);
  }
})();
