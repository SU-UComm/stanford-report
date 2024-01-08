import React from "react";
import { Close } from "../SVG-library/SVG";

/**
 * Renders out the close button, as seen here: https://www.figma.com/file/RRiUMEekas8yO8LF3TzAOX/Designs----Video?node-id=3%3A107&mode=dev
 * Note; CSS for this is in /global/css/_global.css as this component in the modal sits outside of the component scope
 *
 * @param {string} clickHandler
 * The main title
 *
 * @return {JSX.element}
 */
export function CloseButton({ clickHandler }) {
  return (
    <button
      type="button"
      onClick={clickHandler}
      className="su-component-close su-text-center"
    >
      <Close />
      <span>Close</span>
    </button>
  );
}
