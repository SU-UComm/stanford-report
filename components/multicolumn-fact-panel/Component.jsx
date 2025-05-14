import React from "react";
import { cnb } from "cnbuilder";
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
 * @param {boolean} alwaysDark
 * Toggle to always display the dark mode styles.
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
  alwaysDark = false,
}) {
  const hasHeader = !!(eyebrow || title);

  return (
    <Container
      width="cc"
      paddingY={paddingY}
      className={cnb(
        "su-break-words",
        alwaysDark && "su-bg-black-true dark:su-bg-black-true"
      )}
    >
      {eyebrow && (
        /**
         * This is a SODA recommended pattern for accessibility.
         * When there is an eyebrow, we aria-hidden it from screen readers,
         * then add the eyebrow text as a visually hidden span for screen readers inside the heading below.
         * This way we don't get an orphaned span that appears before the heading in the card.
         */
        <span
          aria-hidden={title ? "true" : undefined}
          className={cnb(
            "su-inline-block su-font-semibold su-type-1 su-leading-display su-rs-mb-1",
            alwaysDark
              ? "su-text-black-40 dark:su-text-black-40"
              : "su-text-black-60"
          )}
        >
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          className={cnb(
            "su-type-4 su-rs-mb-5 su-max-w-700",
            alwaysDark
              ? "su-text-white dark:su-text-white"
              : "dark:su-text-white"
          )}
        >
          {eyebrow && <span className="su-sr-only">{`${eyebrow}:`}</span>}
          {title}
        </h2>
      )}
      {!!facts?.length && (
        <div
          className={cnb(
            "su-flex su-flex-col su-items-stretch lg:su-flex-row su-gap-34 md:su-gap-61 lg:su-gap-0 su-divide-y-2 lg:su-divide-y-0 lg:su-divide-x-2 dark:su-divide-black-60",
            hasHeader && "lg:su-mt-162 2xl:su-mt-171",
            alwaysDark
              ? "su-divide-black-60 dark:su-divide-black-60"
              : "su-divide-black-30"
          )}
        >
          {facts.map((fact, index) => (
            <div
              key={fact.icon}
              className="su-flex su-flex-col su-items-center su-flex-1 su-mx-auto su-max-w-[33rem] md:su-max-w-500 lg:su-max-w-800 su-px-30 md:su-px-38 2xl:su-px-[6.6rem] su-rs-py-3"
            >
              <FAIcon
                icon={fact.icon}
                set={fact.iconSet}
                // Add a width to prevent getting a flash of huge icon before the CSS fully loads
                width={70}
                className={cnb(
                  "su-rs-mb-1 su-text-[5rem] xl:su-text-[6rem] su-text-black-50",
                  index > 0 && "su-mt-34 md:su-mt-61 lg:su-mt-0"
                )}
              />
              <XssSafeContent
                content={fact.content}
                className={cnb(
                  "su-text-black su-text-24 md:su-text-[3.3rem] lg:su-text-[2.8rem] xl:su-text-[3.3rem] su-font-serif *:su-leading-display last:*:su-mb-0 su-text-center",
                  alwaysDark
                    ? "su-text-white dark:su-text-white"
                    : "dark:su-text-white"
                )}
              />
            </div>
          ))}
        </div>
      )}
    </Container>
  );
}
