import React, { useState, useEffect } from "react";

// import specific templates for the component
import { SidebarHeading } from "../../packages/headings/Heading";
import ChevronRight from "../../packages/SVG-library/ChevronRight";
import relatedStory from "./scripts/relatedStory";
import getCookie from "../../packages/utils/cookieGet";
import LinkListItem from "./components/LinkListItem";

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
  const audienceCookie = getCookie("preferences_personalisation");
  const links = [];

  // state
  const [relatedStoryData, setRelatedStoryData] = useState(null);
  const [personalisation, setPersonalisation] = useState(null);
  const [linkItems, setLinkItems] = useState([]);

  // get FB data
  const getFB = async () => {
    const data = await relatedStory(search, pageData, audienceCookie);

    setRelatedStoryData(data);
  };

  // generate the links
  if (relatedStoryData) {
    relatedStoryData.forEach((link) => {
      links.push(<LinkListItem title={link.title} url={link.indexUrl} />);
    });
  }

  // effects
  useEffect(() => {
    if (audienceCookie) setPersonalisation(audienceCookie);

    if (relatedStoryData && !linkItems.length) setLinkItems(links);

    if (!relatedStoryData) {
      getFB();
    }
  }, [personalisation, relatedStoryData]);

  return (
    <div
      data-role="link-list-wrapper"
      className="su-fixed su-opacity-[0] su-bottom-[-100px] su-left-0 su-left-[50%] su-right-[50%] su-translate-x-[-50%] su-max-w-[482px] su-w-full su-p-20 su-bg-[white] su-rounded-tl-[8px] su-rounded-tr-[8px] su-transition su-z-[9999] lg:su-z-[1] lg:su-relative lg:su-bottom-0 lg:su-opacity-[1] lg:su-p-0"
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
        {linkItems[0] && (
          <article className="su-border-solid su-border-b-[1px] su-border-b-black-20 su-pb-15 su-mt-[23.65px] lg:su-pb-36">
            {linkItems[0]}
          </article>
        )}

        {linkItems[1] && (
          <article className="su-border-solid su-border-b-[1px] su-border-b-black-20 su-py-15 lg:su-py-36">
            {linkItems[1]}
          </article>
        )}

        {linkItems[2] && (
          <article className="su-pt-15 lg:su-pt-36">{linkItems[2]}</article>
        )}
      </div>
    </div>
  );
}
