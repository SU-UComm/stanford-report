import React from "react";
import { cnb } from "cnbuilder";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import ChevronRight from "../SVG-library/ChevronRight";
import ExternalArrowUnstyled from "../SVG-library/ExternalArrowUnstyled";

/**
 * The CTA Card component
 * This card is used in the CTA Cards Block component
 *
 * @param {string} title The title of the card
 * @param {string} eyebrow Superheading above the title
 * @param {string} description Body text of the card
 * @param {string} internalUrl Internal link to Matrix asset
 * @param {string} externalUrl Manually entered external link
 * @param {boolean} isNewWindow Whether the link should open in a new window
 * @return {JSX.element}
 */

export default function CtaCard({
  title,
  eyebrow,
  description,
  internalUrl,
  externalUrl,
  isNewWindow,
}) {
  // Check extenalUrl field to see if it is actually external
  // Do not use external arrow and rel attributes if link has news.stanford.edu
  const isRealExternalLink =
    !!externalUrl && !externalUrl?.includes("news.stanford.edu");

  return (
    <article
      className={cnb(
        "su-group su-relative su-w-full su-flex su-flex-col su-break-words su-bg-white su-rounded-[8px] su-rs-pt-5 su-rs-px-4 su-rs-pb-4 su-max-w-900 su-mx-auto su-transition-shadow",
        internalUrl || externalUrl
          ? "hover:su-shadow-md focus-within:su-shadow-md"
          : ""
      )}
    >
      {eyebrow && (
        <span
          aria-hidden
          className="su-type-1 su-text-black-60 su-font-semibold su-rs-mb-1"
        >
          {eyebrow}
        </span>
      )}
      <h2 className="su-type-5 md:su-type-4 2xl:su-type-3 su-mb-0 su-font-sans su-text-black">
        {internalUrl || externalUrl ? (
          // eslint-disable-next-line react/jsx-no-target-blank
          <a
            href={internalUrl || externalUrl}
            target={isNewWindow ? "_blank" : undefined}
            rel={isRealExternalLink ? "noopener nofollow" : undefined}
            className="group-hocus-within:su-underline su-stretched-link su-text-black group-hocus-within:su-text-digital-red"
          >
            {eyebrow && <span className="su-sr-only">{`${eyebrow}:`}</span>}
            {title}
          </a>
        ) : (
          <>
            {eyebrow && <span className="su-sr-only">{`${eyebrow}:`}</span>}
            {title}
          </>
        )}
      </h2>
      {!!description && (
        <div className="su-grow">
          <XssSafeContent
            data-test="cta-card-content"
            className="su-text-black su-big-paragraph su-rs-mt-4 *:su-leading-snug *:last:su-mb-0"
            content={description}
          />
        </div>
      )}
      {(internalUrl || externalUrl) && (
        <div className="su-flex su-rs-mt-1 group-hocus-within:su-translate-x-03em su-transition-transform su-items-center su-justify-center su-size-50 md:su-size-70 su-rounded-full su-bg-gradient-to-r su-from-digital-red-light su-to-cardinal-red-dark su-ml-auto">
          {isRealExternalLink ? (
            <ExternalArrowUnstyled
              title="link is external"
              strokeWidth={3}
              className="su-inline-block su-w-20 md:su-w-30 su-text-white *:su-stroke-3"
            />
          ) : (
            <ChevronRight
              aria-hidden
              width={undefined}
              height={undefined}
              className="su-fill-transparent su-stroke-current su-inline-block su-w-22 md:su-w-36 su-text-white *:su-stroke-3"
            />
          )}
        </div>
      )}
    </article>
  );
}
