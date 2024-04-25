import React from "react";

/**
 * Renders out the icon for right arrows
 *
 * @return {JSX.Element}
 */
export default function ArrowRight() {
  return (
    <svg
      aria-hidden="true"
      data-testid="svg-arrow-right"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 5L21 12M21 12L14 19M21 12L3 12"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
