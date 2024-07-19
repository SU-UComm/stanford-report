import React from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { Container } from "../../packages/grids/Container";
import { FAIcon } from "../../packages/icons/FAIcon";

/**
 * Multicolumn Fact Panel component
 *
 * @param {string} title
 * The title of the text block.
 *
 * @param {string} eyebrow
 * The eyebrow/superheading.
 *
 * @param {string} paddingY
 * Responsive vertical padding of the container
 *
 * @param {array} facts
 * A array of 1 to 3 facts each with a FontAwesome icon and a text description.
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function MulticolumnFactPanel({
  title,
  eyebrow,
  paddingY = "6",
  facts,
}) {
  return (
    <Container width="cc" paddingY={paddingY}>
      {eyebrow && (
        /**
         * This is a SODA recommended pattern for accessibility.
         * When there is an eyebrow, we aria-hidden it from screen readers,
         * then add the eyebrow text as a visually hidden span for screen readers inside the heading below.
         * This way we don't get an orphaned span that appears before the heading in the card.
         */
        <span
          aria-hidden
          className="su-inline-block su-text-black-60 dark:su-text-black-40 su-font-semibold su-type-1 su-leading-display su-rs-mb-1"
        >
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="su-type-4 su-rs-mb-8 dark:su-text-white su-max-w-700">
          {eyebrow && <span className="su-sr-only">{`${eyebrow}:`}</span>}
          {title}
        </h2>
      )}
      <div className="su-flex su-flex-col su-items-stretch lg:su-flex-row su-divide-y-2 lg:su-divide-y-0 lg:su-divide-x-2 su-divide-black-30">
        {facts.map((fact) => (
          <div
            key={fact.icon}
            className="su-flex su-flex-col su-items-center su-flex-1 su-mx-auto su-max-w-[33rem] md:su-max-w-500 lg:su-max-w-none su-px-30 md:su-px-38 2xl:su-px-[6.6rem] su-rs-py-3"
          >
            <FAIcon
              icon={fact.icon}
              set={fact.iconSet}
              className="su-rs-mb-1 su-rs-mt-4 lg:su-mt-0 su-text-[5rem] xl:su-text-[6rem]"
            />
            <XssSafeContent
              content={fact.content}
              className="su-text-24 md:su-text-[3.3rem] lg:su-text-[2.8rem] xl:su-text-[3.3rem] su-font-serif *:su-leading-display last:*:su-mb-0 su-text-center su-rs-mb-4 lg-su-mb-0"
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
