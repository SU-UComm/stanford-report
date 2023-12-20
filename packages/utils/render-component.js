import React from "react";
import { renderToString } from "react-dom/server";

/**
 * Function to render a component on the server
 * @param {{Component: (any) => JSX.Element, componentName: string, args: object}} param0 - The component to render, the name of the component, and the props to pass to the component
 * @returns {string} - The rendered component as a string
 */
import { jsx as _jsx } from "react/jsx-runtime";

export default async function renderComponent(_ref) {
  const { Component, componentName, args } = _ref;
  // Check that we got a component
  if (!Component) {
    throw new Error("renderComponent requires a component");
  }

  // Check that we got a component name
  if (!componentName) {
    throw new Error("renderComponent requires a component name");
  }

  // Check that the component is a valid React component
  if (
    !(/* #__PURE__ */ React.isValidElement(/* #__PURE__ */ _jsx(Component, {})))
  ) {
    throw new Error("renderComponent requires a valid React component");
  }

  // Check that the component name is a string
  if (typeof componentName !== "string") {
    throw new Error("renderComponent requires a string for the component name");
  }

  // Check that the args are an object
  if (typeof args !== "object") {
    throw new Error("renderComponent requires an object for the args");
  }
  return renderToString(
    /* #__PURE__ */ _jsx("div", {
      "data-component": componentName,
      "data-hydration-component": componentName,
      "data-hydration-props": JSON.stringify(args),
      children: /* #__PURE__ */ _jsx(Component, {
        ...args,
      }),
    })
  );
}
