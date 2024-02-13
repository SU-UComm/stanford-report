import React from "react";

/**
 * Renders out the ExternalArrow SVG icon
 *
 * @return {JSX.Element}
 */
const ARROW_SIZE = "small";
export default function ExternalArrow({ size = ARROW_SIZE }) {
  const sizeMap = new Map();

  sizeMap.set(
    "small",
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

  sizeMap.set(
    "large",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
    >
      <path
        d="M17.9134 14.1422L31.1127 14.1422M31.1127 14.1422L31.1127 27.3415M31.1127 14.1422L14.1422 31.1127"
        stroke="#B1040E"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (size && sizeMap.get(size)) return sizeMap.get(size);

  return sizeMap.get("small");
}
