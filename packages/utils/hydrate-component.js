import React from "react";
import { hydrate } from "react-dom";

/**
 * Function to hydrate a component on the client
 * @param {{ Component: (any) => JSX.Element, componentName: string }} param0 - The component to hydrate and the name of the component
 */
import { jsx as _jsx } from "react/jsx-runtime";

export default function hydrateComponent(_ref) {
  const { Component, componentName } = _ref;
  // Check that we got the correct arguments
  if (!Component || !componentName) {
    throw new Error(
      "hydrateComponent requires a component and a component name"
    );
  }

  // Check that the component is a valid React component
  if (typeof Component !== "function") {
    throw new Error("hydrateComponent requires a valid React component");
  }

  // Check that the component name is a string
  if (typeof componentName !== "string") {
    throw new Error(
      "hydrateComponent requires a string for the component name"
    );
  }

  // Confirm that the component is on the page
  if (
    !document.querySelector(`[data-hydration-component="${componentName}"]`)
  ) {
    throw new Error(
      `hydrateComponent could not find a component with the name ${componentName}`
    );
  }

  // Hydrate the component
  document
    .querySelectorAll(`[data-hydration-component="${componentName}"]`)
    .forEach((element) => {
      // Check that the element has the props attribute
      if (!element.dataset.hydrationProps) {
        throw new Error(
          `hydrateComponent could not find the props for the component ${componentName}`
        );
      }

      // Check that the props are valid JSON
      try {
        JSON.parse(element.dataset.hydrationProps);
      } catch (error) {
        throw new Error(
          `hydrateComponent could not parse the props for the component ${componentName}`
        );
      }

      // Get the props from the data attribute
      const props = JSON.parse(element.dataset.hydrationProps);

      // Hydrate the component
      hydrate(
        /* #__PURE__ */ _jsx(Component, {
          ...props,
        }),
        element
      );

      // Remove the data attribute (so that the component is not hydrated multiple times)
      element.removeAttribute("data-hydration-component");
    });
}
