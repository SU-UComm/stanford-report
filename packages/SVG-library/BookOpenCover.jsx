import React from "react";

/**
 * Renders out the FontAwesome icon book-open-cover in the solid family
 * https://fontawesome.com/icons/book-open-cover?f=classic&s=solid
 *
 * @return {JSX.Element}
 */

export default function BookOpenCover(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 15"
      fill="currentColor"
      {...props}
    >
      <path d="M8.55 1.16275V11.7377L2.7 10.6127V1.23869C2.7 0.68181 3.20062 0.257123 3.74906 0.349935L8.55 1.16275ZM2.52281 11.6562L9 12.9527L15.4772 11.6562C15.8991 11.5718 16.2 11.2034 16.2 10.7731V1.07275L16.9228 0.92931C17.4797 0.81681 18 1.2415 18 1.80962V12.1259C18 12.5562 17.6962 12.9246 17.2772 13.009L9 14.6627L0.722812 13.0062C0.30375 12.9246 0 12.5534 0 12.1259V1.80962C0 1.2415 0.520312 0.81681 1.07719 0.92931L1.8 1.07275V10.7759C1.8 11.2062 2.10375 11.5746 2.52281 11.659V11.6562ZM9.45 11.7377V1.16275L14.2509 0.349935C14.7994 0.257123 15.3 0.68181 15.3 1.23869V10.6127L9.45 11.7377Z" />
    </svg>
  );
}
