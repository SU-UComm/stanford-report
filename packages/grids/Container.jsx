import React from "react";

/**
 * Container package
 *
 * @param {string} children The child elements that sit inside the container
 * @param {string} width The width of the container
 * @param {string} paddingX Include padding for the container
 * @returns {JSX.Element}
 * @constructor
 */
export function Container({ children, width = "large", paddingX = true }) {
  const hasChildren = children !== undefined;

  // CSS for these is defined in global.css to allow for override on basic story
  const widthClasses = new Map();
  widthClasses.set("narrow", "su-container-narrow");
  widthClasses.set("large", "su-container-large");
  widthClasses.set("wide", "su-container-wide");
  widthClasses.set("full", "su-container-full");

  return hasChildren ? (
    <div
      className={[
        "su-mx-auto su-component-container",
        widthClasses.get(width),
        paddingX ? "su-container-px" : "",
      ].join(" ")}
    >
      {children}
    </div>
  ) : (
    ""
  );
}
