import React from "react";

/**
 * Renders out the book SVG icon
 *
 * @return {JSX.Element}
 */
const DEFAULT_VARIANT = "solid";
export default function Book({ variant = DEFAULT_VARIANT }) {
  const variantsMap = new Map();
  variantsMap.set(
    "solid",
    <svg
      aria-hidden="true"
      data-testid="svg-book-solid"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10 5.21049V16.0438M10 5.21049C9.02675 4.56389 7.70541 4.1665 6.25 4.1665C4.79459 4.1665 3.47325 4.56389 2.5 5.21049V16.0438C3.47325 15.3972 4.79459 14.9998 6.25 14.9998C7.70541 14.9998 9.02675 15.3972 10 16.0438M10 5.21049C10.9732 4.56389 12.2946 4.1665 13.75 4.1665C15.2054 4.1665 16.5268 4.56389 17.5 5.21049V16.0438C16.5268 15.3972 15.2054 14.9998 13.75 14.9998C12.2946 14.9998 10.9732 15.3972 10 16.0438"
        stroke="#6D6C69"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  variantsMap.set(
    "outline",
    <svg
      aria-hidden="true"
      data-testid="svg-book-outline"
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
    >
      <path
        d="M10.8916 5.27152V16.1049M10.8916 5.27152C9.91836 4.62493 8.59701 4.22754 7.1416 4.22754C5.68619 4.22754 4.36485 4.62493 3.3916 5.27152V16.1049C4.36485 15.4583 5.68619 15.0609 7.1416 15.0609C8.59701 15.0609 9.91836 15.4583 10.8916 16.1049M10.8916 5.27152C11.8648 4.62493 13.1862 4.22754 14.6416 4.22754C16.097 4.22754 17.4184 4.62493 18.3916 5.27152V16.1049C17.4184 15.4583 16.097 15.0609 14.6416 15.0609C13.1862 15.0609 11.8648 15.4583 10.8916 16.1049"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (variantsMap.get(variant) !== null) {
    return variantsMap.get(variant);
  }
  return variantsMap.get(DEFAULT_VARIANT);
}
