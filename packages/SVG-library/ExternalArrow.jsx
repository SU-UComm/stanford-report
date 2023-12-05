import React from "react";

/**
 * Renders out the ExternalArrow SVG icon
 *
 * @return {JSX.Element}
 */
export default function ExternalArrow() {
  return (
    <svg
      data-testid="svg-externalarrow"
      aria-hidden="true"
      className="su-stroke-digital-red su-fill-transparent dark:su-stroke-dark-mode-red"
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="24"
      viewBox="0 0 23 24"
      fill="none"
    >
      <path
        d="M8.95664 7.57744L15.5563 7.57744M15.5563 7.57744L15.5563 14.1771M15.5563 7.57744L7.07102 16.0627"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
