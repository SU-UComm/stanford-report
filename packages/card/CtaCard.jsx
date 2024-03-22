import React from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";

/**
 * The CTA Card component
 *
 * @param {string} Title The title of the card
 * @param {string} Eyebrow Superheading above the title
 * @param {string} Description Body text of the card
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
  return (
    <article className="su-rounded-[8px] su-rs-pt-6 su-rs-px-5 su-rs-pb-4">
      {eyebrow && (
        <span className="su-type-1 su-text-black-60 su-font-semibold">
          {eyebrow}
        </span>
      )}
      <h2 className="su-type-5 su-font-sans su-rs-mt-1">
        <a
          href={internalUrl || externalUrl}
          target={isNewWindow ? "_blank" : ""}
          rel="noreferrer"
          className="su-stretched-link"
        >
          {title}
        </a>
      </h2>
      <div>
        {description && (
          <XssSafeContent
            data-test="cta-card-content"
            className="su-type-1 su-grow su-rs-mt-4"
            content={description}
          />
        )}
      </div>
    </article>
  );
}
