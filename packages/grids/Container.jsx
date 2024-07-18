/* eslint-disable security/detect-object-injection */
import React from "react";
import { cnb } from "cnbuilder";

/**
 * Container package
 *
 * @param {string} children The child elements that sit inside the container
 * @param {string} width The width of the container
 * @param {string} paddingX Horizontal padding for the container
 * @param {string} paddingY Vertical padding for the container
 * @returns {JSX.Element}
 * @constructor
 */

// CSS for these is defined in global.css to allow for override on basic story
const widthClasses = {
  narrow: "su-container-narrow",
  large: "su-container-large",
  wide: "su-container-wide",
  full: "su-container-full",
  /**
   * Centered container class from Decanter
   * https://github.com/SU-SWS/decanter/blob/main/src/plugins/components/layout/centered-container.js
   */
  cc: "su-cc",
};

/**
 * Padding options based on the Decanter responsive spacing system.
 * Base is the smallest step and 10 is the largest.
 * https://github.com/SU-SWS/decanter/blob/main/src/plugins/components/responsive-spacing/responsive-spacing.js
 */
const paddingYClasses = {
  none: "",
  base: "su-rs-py-0",
  1: "su-rs-py-1",
  2: "su-rs-py-2",
  3: "su-rs-py-3",
  4: "su-rs-py-4",
  5: "su-rs-py-5",
  6: "su-rs-py-6",
  7: "su-rs-py-7",
  8: "su-rs-py-8",
  9: "su-rs-py-9",
  10: "su-rs-py-10",
};

export function Container({
  children,
  width = "large",
  paddingX = true,
  paddingY = "none",
}) {
  const hasChildren = children !== undefined;

  return hasChildren ? (
    <div
      className={cnb(
        "su-mx-auto su-component-container",
        widthClasses[width],
        paddingX ? "su-container-px" : "",
        paddingYClasses[paddingY]
      )}
    >
      {children}
    </div>
  ) : (
    ""
  );
}
