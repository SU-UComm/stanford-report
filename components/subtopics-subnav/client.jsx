import React from "react";
import { createRoot } from "react-dom/client";

import Component from "./Component";

(function () {
  const componentName = "subtopics-subnav";
  const target = document.querySelector(
    `[data-hydration-component="${componentName}"]`
  );
  const props = JSON.parse(target.dataset.hydrationProps);

  if (!target) return;

  const root = createRoot(target);
  root.render(<Component data={props} />);
})();
