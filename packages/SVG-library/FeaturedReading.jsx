import React, { useId } from "react";

/**
 * Renders out the book icon for featured reading
 *
 * @return {JSX.Element}
 */
const DEFAULT_VARIANT = "light";
export default function FeaturedReading({ variant = DEFAULT_VARIANT }) {
  const id = useId() + DEFAULT_VARIANT;

  const variantsMap = new Map();
  variantsMap.set(
    "light",
    <svg
      data-testid="svg-featuredreading-light"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="24"
      viewBox="0 0 29 24"
      fill="none"
    >
      <path
        d="M13.3392 2.22359V18.7221L4.21239 16.967V2.34206C4.21239 1.47325 4.99344 0.81068 5.84908 0.955481L13.3392 2.22359ZM3.93595 18.5949L14.0413 20.6177L24.1467 18.5949C24.8048 18.4632 25.2744 17.8884 25.2744 17.2171V2.08317L26.402 1.85939C27.2709 1.68387 28.0826 2.34645 28.0826 3.23281V19.3277C28.0826 19.999 27.6087 20.5738 26.9549 20.7055L14.0413 23.2855L1.12769 20.7011C0.473894 20.5738 0 19.9946 0 19.3277V3.23281C0 2.34645 0.811763 1.68387 1.68057 1.85939L2.80826 2.08317V17.2215C2.80826 17.8928 3.28216 18.4676 3.93595 18.5993V18.5949ZM14.7434 18.7221V2.22359L22.2335 0.955481C23.0892 0.81068 23.8702 1.47325 23.8702 2.34206V16.967L14.7434 18.7221Z"
        fill={`url(#${id})`}
      />
      <defs>
        <linearGradient
          id={id}
          x1="28.0826"
          y1="0.935547"
          x2="13.6523"
          y2="11.6856"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E50808" />
          <stop offset="1" stopColor="#820000" />
        </linearGradient>
      </defs>
    </svg>
  );
  variantsMap.set(
    "dark",
    <svg
      data-testid="svg-featuredreading-dark"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="24"
      viewBox="0 0 29 24"
      fill="none"
    >
      <path
        d="M13.3392 2.11323V18.6118L4.21239 16.8566V2.23171C4.21239 1.3629 4.99344 0.700328 5.84908 0.845129L13.3392 2.11323ZM3.93595 18.4845L14.0413 20.5073L24.1467 18.4845C24.8048 18.3529 25.2744 17.7781 25.2744 17.1067V1.97282L26.402 1.74904C27.2709 1.57352 28.0826 2.2361 28.0826 3.12245V19.2173C28.0826 19.8887 27.6087 20.4635 26.9549 20.5951L14.0413 23.1752L1.12769 20.5907C0.473894 20.4635 0 19.8843 0 19.2173V3.12245C0 2.2361 0.811763 1.57352 1.68057 1.74904L2.80826 1.97282V17.1111C2.80826 17.7825 3.28216 18.3573 3.93595 18.4889V18.4845ZM14.7434 18.6118V2.11323L22.2335 0.845129C23.0892 0.700328 23.8702 1.3629 23.8702 2.23171V16.8566L14.7434 18.6118Z"
        fill={`url(#${id})`}
      />
      <defs>
        <linearGradient
          id={id}
          x1="28.0826"
          y1="0.825195"
          x2="13.6523"
          y2="11.5752"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8F993E" />
          <stop offset="1" stopColor="#279989" />
        </linearGradient>
      </defs>
    </svg>
  );

  if (variantsMap.get(variant) !== null) {
    return variantsMap.get(variant);
  }
  return variantsMap.get(DEFAULT_VARIANT);
}
