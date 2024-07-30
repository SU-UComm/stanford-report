import React from "react";

/**
 * Nav Button for Sidebar Navigation
 * @param {string} ariaControls Define the element the button controls
 * @param {string} ariaLabel Customize the label for screen readers
 * @param {string} ariaExpanded Toggle the aria-expanded attribute
 * @param {string} onClick Click handler
 * @param {string} className Class string for the button's display
 * @param {string} buttonText Text displayed on the button
 * @param {string} icon Icon displayed on the button, optional
 *
 * @returns {NavButton}
 * @constructor
 */

export default function NavButton({
  ariaControls,
  ariaLabel,
  ariaExpanded,
  onClick,
  className,
  buttonText,
  icon,
}) {
  return (
    <button
      aria-controls={ariaControls}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      type="button"
      onClick={onClick}
      className={className}
    >
      <span className="su-flex-auto">{buttonText}</span>
      {icon || ""}
    </button>
  );
}
