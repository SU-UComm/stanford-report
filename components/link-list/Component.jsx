import React, { useState, useEffect } from "react";

// import specific templates for the component
import { SidebarHeading } from "../../packages/headings/Heading";
import ChevronRight from "../../packages/SVG-library/ChevronRight";
import relatedStory from "./scripts/relatedStory";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */
export default function LinkList({ search }) {
  const isClient = typeof window !== "undefined";
  const pageData =
    isClient && typeof window.pageController !== "undefined"
      ? window.pageController
      : null;

  // state
  const [relatedStoryData, setRelatedStoryData] = useState(null);

  const getFB = async () => {
    const data = await relatedStory(search, pageData);

    setRelatedStory(data);
  };

  useEffect(() => {
    getFB();
  });

  return (
    <div
      data-role="link-list-wrapper"
      className="su-fixed su-opacity-[0] su-bottom-[-100px] su-left-0 su-left-[50%] su-right-[50%] su-translate-x-[-50%] su-max-w-[482px] su-w-full su-p-[20px] su-bg-[white] su-rounded-tl-[8px] su-rounded-tr-[8px] su-transition su-z-[9999] lg:su-relative lg:su-bottom-0 lg:su-opacity-[1]"
    >
      <div className="su-flex">
        <SidebarHeading title="Stories for you" icon="bullseyePointer" />

        <button
          className="su-text-digital-red su-rotate-[-90deg] lg:su-hidden"
          data-role="link-drawer-toggle"
          data-active="false"
          aria-controls="link-drawer"
          aria-label="link-drawer"
          type="button"
        >
          <ChevronRight />
        </button>
      </div>

      <div
        className="su-max-h-[1000px] su-h-0 su-overflow-hidden su-transition lg:su-h-auto"
        id="link-drawer"
        data-role="link-drawer"
      >
        <article className="su-border-solid su-border-b-[1px] su-border-b-black-20 su-pb-[15px] su-mt-[23.65px]">
          <a href="#" className="su-no-underline">
            <h3 className="su-text-[16px] su-font-bold su-m-0 lg:su-text-[24px] lg:su-leading-[28.8px]">
              Are you ready for the "longevity economy?"
            </h3>
          </a>
        </article>

        <article className="su-border-solid su-border-b-[1px] su-border-b-black-20 su-py-[15px]">
          <a href="#" className="su-no-underline">
            <h3 className="su-text-[16px] su-font-bold su-m-0 lg:su-text-[24px] lg:su-leading-[28.8px]">
              Board Special Committee provides update
            </h3>
          </a>
        </article>

        <article className="su-pt-[15px]">
          <a href="#" className="su-no-underline">
            <h3 className="su-text-[16px] su-font-bold su-m-0 lg:su-text-[24px] lg:su-leading-[28.8px]">
              Report of the president: Academic Council Professoriate
              appointments
            </h3>
          </a>
        </article>
      </div>
    </div>
  );
}
