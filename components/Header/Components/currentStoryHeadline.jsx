import React from "react";
import { decode } from "html-entities";
/**
 * Current Story Title and Next story link
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function CurrentStoryHeadline({ title = null, story = null }) {
  return (
    (title || story) && (
      // <div className="report-header__story su-z-40 su-hidden md:su-flex su-flex-grow su-items-center">
      //  md:su-gap-[13px] lg:su-gap-[36px]
      <div className="report-header__story su-z-40 su-hidden md:su-flex su-flex-grow su-items-end">
        {title && (
          // <h1 className="su-m-0 su-text-14 lg:su-text-16 lg:su-mb-[2.25px] lg:su-pb-[8.75px] su-font-bold su-flex-grow su-opacity-0 su-max-h-70 lg:su-max-h-[7.9rem] su-text-ellipsis su-overflow-hidden">
          // md:su-pb-[14px] md:su-mb-[6.05px] lg:su-mb-[2.25px] lg:su-pb-[8.75px] md:su-pb-[6.05px]
          <h1 className="su-m-0 su-text-14 lg:su-text-16 md:su-leading-[16.72px] su-my-auto su-font-bold su-flex-grow su-opacity-0 su-max-h-70 lg:su-pb-2 md:su-pb-1 lg:su-max-h-[7.9rem] su-text-ellipsis su-overflow-hidden">
            {decode(title)}
          </h1>
        )}

        {story && (
          // <div className="report-header__next su-text-12 lg:su-text-14 su-font-bold su-border-l-2 su-border-black-10 dark:su-border-black su-pl-13 lg:su-pl-27 su-ml-13 lg:su-ml-38 su-min-w-160 xl:su-min-w-[35.9rem] su-max-w-160 lg:su-max-w-[35.9rem] su-opacity-0">
          <div className="report-header__next su-text-12 lg:su-text-14 su-font-bold su-border-l-2 su-border-black-10 dark:su-border-black su-pl-13 lg:su-pl-27 su-ml-13 lg:su-ml-38 su-min-w-160 md:su-mb-3 xl:su-min-w-[35.9rem] su-max-w-160 lg:su-max-w-[35.9rem] lg:su-mb-4 su-opacity-0">
            <h2 className="su-m-0 su-text-digital-red dark:su-text-dark-mode-red su-font-sans su-text-12 lg:su-text-14">
              Read next:
            </h2>
            <p className="su-m-0 su-text-inherit">
              <a
                href={story.displayUrl}
                className="su-m-0 su-text-inherit su-no-underline hocus:su-underline hocus:su-text-digital-red dark:hocus:su-text-dark-mode-red su-font-normal"
              >
                {story.title}
              </a>
            </p>
          </div>
        )}
      </div>
    )
  );
}
