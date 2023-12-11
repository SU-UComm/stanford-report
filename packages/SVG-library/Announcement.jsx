import React from "react";

/**
 * Renders out the icon for articles
 *
 * @return {JSX.Element}
 */
const DEFAULT_VARIANT = "light";
export default function Announcement({ variant = DEFAULT_VARIANT }) {
  const variantsMap = new Map();
  variantsMap.set(
    "light",
    <svg
        data-testid="svg-announcement-light"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="22"
        viewBox="0 0 27 22"
        fill="none"
      >
        <path
          d="M25.5 0.29126C26.3297 0.29126 27 0.962493 27 1.79332V19.818C27 20.6489 26.3297 21.3201 25.5 21.3201C24.6703 21.3201 24 20.6489 24 19.818V1.79332C24 0.962493 24.6703 0.29126 25.5 0.29126ZM3 7.72177L22.5 1.79332V19.818L16.3547 17.9499C15.8531 19.8885 14.0953 21.3201 12 21.3201C9.51562 21.3201 7.5 19.3017 7.5 16.8139C7.5 16.2976 7.58906 15.7953 7.74844 15.3353L3 13.8896C2.95781 14.6829 2.30156 15.3119 1.5 15.3119C0.670312 15.3119 0 14.6406 0 13.8098V7.80156C0 6.97074 0.670312 6.2995 1.5 6.2995C2.30156 6.2995 2.95781 6.92849 3 7.72177ZM14.2031 17.2927L9.90937 15.9878C9.81094 16.2413 9.75469 16.5229 9.75469 16.8139C9.75469 18.0578 10.7625 19.067 12.0047 19.067C13.0828 19.067 13.9828 18.3066 14.2031 17.2927Z"
          fill="url(#paint0_linear_2375_3495)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2375_3495"
            x1="0"
            y1="0.29126"
            x2="27"
            y2="0.29126"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#E50808" />
            <stop offset="1" stopColor="#820000" />
          </linearGradient>
        </defs>
      </svg>
  );
  variantsMap.set(
    "dark",
    <svg
        data-testid="svg-announcement-dark"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="22"
        viewBox="0 0 27 22"
        fill="none"
      >
        <path
          d="M25.5 0.291016C26.3297 0.291016 27 0.962249 27 1.79308V19.8178C27 20.6486 26.3297 21.3199 25.5 21.3199C24.6703 21.3199 24 20.6486 24 19.8178V1.79308C24 0.962249 24.6703 0.291016 25.5 0.291016ZM3 7.72152L22.5 1.79308V19.8178L16.3547 17.9496C15.8531 19.8882 14.0953 21.3199 12 21.3199C9.51562 21.3199 7.5 19.3015 7.5 16.8137C7.5 16.2973 7.58906 15.7951 7.74844 15.3351L3 13.8894C2.95781 14.6826 2.30156 15.3116 1.5 15.3116C0.670312 15.3116 0 14.6404 0 13.8096V7.80132C0 6.97049 0.670312 6.29926 1.5 6.29926C2.30156 6.29926 2.95781 6.92825 3 7.72152ZM14.2031 17.2925L9.90937 15.9875C9.81094 16.241 9.75469 16.5227 9.75469 16.8137C9.75469 18.0576 10.7625 19.0668 12.0047 19.0668C13.0828 19.0668 13.9828 18.3064 14.2031 17.2925Z"
          fill="url(#paint0_linear_2375_3120)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2375_3120"
            x1="0"
            y1="0.291016"
            x2="27"
            y2="0.291016"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#279989" />
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
