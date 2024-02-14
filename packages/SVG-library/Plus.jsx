import React from "react";

/**
 * Renders out the plus icon for the front side of the Interactive Photo Cards
 *
 * @return {JSX.Element}
 */
export default function Flip({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 7.5C26.3807 7.5 27.5 8.61929 27.5 10V22.5H40C41.3807 22.5 42.5 23.6193 42.5 25C42.5 26.3807 41.3807 27.5 40 27.5H27.5V40C27.5 41.3807 26.3807 42.5 25 42.5C23.6193 42.5 22.5 41.3807 22.5 40V27.5H10C8.61929 27.5 7.5 26.3807 7.5 25C7.5 23.6193 8.61929 22.5 10 22.5L22.5 22.5V10C22.5 8.61929 23.6193 7.5 25 7.5Z"
        fill="white"
      />
    </svg>
  );
}
