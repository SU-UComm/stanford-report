import React from "react";

/**
 *
 */
const DEFAULT_VARIANT = "light";

export default function TrendingUp({ variant = DEFAULT_VARIANT }) {
  const variantsMap = new Map();

  variantsMap.set(
    "light",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="15"
      viewBox="0 0 24 15"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 3.15C14.1716 3.15 13.5 2.50081 13.5 1.7C13.5 0.899187 14.1716 0.25 15 0.25H22.5C23.3284 0.25 24 0.899187 24 1.7V8.95C24 9.75081 23.3284 10.4 22.5 10.4C21.6716 10.4 21 9.75081 21 8.95V5.20061L14.5607 11.4253C13.9749 11.9916 13.0251 11.9916 12.4393 11.4253L9 8.10061L2.56066 14.3253C1.97487 14.8916 1.02513 14.8916 0.43934 14.3253C-0.146447 13.759 -0.146447 12.841 0.43934 12.2747L7.93934 5.0247C8.52513 4.45844 9.47487 4.45844 10.0607 5.0247L13.5 8.34939L18.8787 3.15H15Z"
        fill="url(#paint0_linear_3094_2581)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3094_2581"
          x1="0"
          y1="0.25"
          x2="24"
          y2="0.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B1040E" />
          <stop offset="1" stopColor="#620059" />
        </linearGradient>
      </defs>
    </svg>
  );

  variantsMap.set(
    "dark",
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="15"
      viewBox="0 0 24 15"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 3.15C14.1716 3.15 13.5 2.50081 13.5 1.7C13.5 0.899187 14.1716 0.25 15 0.25H22.5C23.3284 0.25 24 0.899187 24 1.7V8.95C24 9.75081 23.3284 10.4 22.5 10.4C21.6716 10.4 21 9.75081 21 8.95V5.20061L14.5607 11.4253C13.9749 11.9916 13.0251 11.9916 12.4393 11.4253L9 8.10061L2.56066 14.3253C1.97487 14.8916 1.02513 14.8916 0.43934 14.3253C-0.146447 13.759 -0.146447 12.841 0.43934 12.2747L7.93934 5.0247C8.52513 4.45844 9.47487 4.45844 10.0607 5.0247L13.5 8.34939L18.8787 3.15H15Z"
        fill="url(#paint0_linear_3094_798)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3094_798"
          x1="0"
          y1="0.25"
          x2="24"
          y2="0.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#017E7C" />
          <stop offset="1" stopColor="#8F993E" />
        </linearGradient>
      </defs>
    </svg>
  );

  if (variantsMap.get(variant) !== null) {
    return variantsMap.get(variant);
  }

  return variantsMap.get(DEFAULT_VARIANT);
}
