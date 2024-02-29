import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";

(function () {
  const componentName = "subtopic-subnav-component";
  const element = document.querySelector(
    `[data-hydration-component="${componentName}"]`
  );
  if (!element) return;

  // Get our current props
  // const props = JSON.parse(element.getAttribute("data-hydration-props"));

  // const root = createRoot(target);
  // root.render(<Component data={props} />);
  // Hydrate the component
  hydrateComponent({ Component, componentName });
})();
