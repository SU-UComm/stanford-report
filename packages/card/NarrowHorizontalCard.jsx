import React from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import formatNewsDate from "../utils/formatNewsDate";

/**
 * Narrow horizontal card package
 * Used for press center, announcements, leadership messages and in the news
 *
 * @param {string} title
 * The components title
 *
 * @param {string} description
 * The components description
 *
 * @param {string} liveUrl
 * The components url
 *
 * @param {string} type
 * The components type
 *
 * @returns {JSX.Element}
 */
export default function NarrowHorizontalCard({
  data: { title, description, liveUrl, date },
}) {
  return (
    <article
      className="su-grid su-grid-gap su-grid-cols-6 lg:su-grid-cols-10"
      data-testid="narrow-horizontal-card"
    >
      <div className="su-flex su-flex-col su-gap-12 su-col-start-1 su-col-span-full lg:su-col-span-6 lg:su-col-start-3">
        <h2 className="su-font-serif su-basefont-23 su-my-0">
          <a
            className="hocus:su-text-digital-red hocus:su-underline su-transition su-text-black dark:su-text-white dark:hocus:su-text-dark-mode-red"
            href={liveUrl}
          >
            {title}
          </a>
        </h2>

        {description && (
          <div
            data-testid="narrow-horizontal-card-description"
            className="su-my-0 su-text-16 su-leading-[2.4rem] lg:su-text-18 lg:su-leading-[2.7rem]"
          >
            <XssSafeContent
              className={["su-mb-0 su-w-full [&>*:last-child]:su-mb-0"].join(
                " "
              )}
              content={description}
            />
          </div>
        )}

        {date && (
          <p className="su-text-black-70 dark:su-text-black-60 su-text-16 lg:su-text-18 su-leading-[130%] su-font-semibold su-my-0">
            {formatNewsDate(date)}
          </p>
        )}
      </div>
    </article>
  );
}
