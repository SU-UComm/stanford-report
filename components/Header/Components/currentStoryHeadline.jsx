import React from "react";
/**
 * Current Story Title and Next story link
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function CurrentStoryHeadline({ title }) {
  return (
    <div className="report-header__story su-z-40 su-hidden md:su-flex su-flex-grow su-items-center">
      <h1 className="su-m-0 su-text-[14px] lg:su-text-[16px] su-font-bold su-flex-grow su-opacity-0 su-max-h-[70px] lg:su-max-h-[79px] su-text-ellipsis su-overflow-hidden">
        {title}
      </h1>
      <div className="report-header__next su-text-[12px] lg:su-text-[14px] su-font-bold su-border-l-2 su-border-black-10 su-pl-[13px] lg:su-pl-[27px] su-ml-[13px] lg:su-ml-[36px] su-min-w-[160px] xl:su-min-w-[359px] su-max-w-[160px] lg:su-max-w-[359px] su-opacity-0">
        <h2 className="su-m-0 su-text-digital-red dark:su-text-dark-mode-red su-text-[12px] lg:su-text-[14px]">
          Read next:
        </h2>
        <p className="su-m-0 su-text-inherit">
          <a
            href="#"
            className="su-m-0 su-text-inherit su-no-underline hover:su-text-digital-red dark:hover:su-text-dark-mode-red"
          >
            The title of this recommended article might be long, lets hope not
          </a>
        </p>
      </div>
    </div>
  );
}
