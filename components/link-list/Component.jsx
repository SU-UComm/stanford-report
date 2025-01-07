import React, { useState, useEffect } from "react";

// import specific templates for the component
import { SidebarHeading } from "../../packages/headings/Heading";
import ChevronRight from "../../packages/SVG-library/ChevronRight";
import fbFetcher from "./scripts/fbFetcher";
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
  const [isClient, setIsClient] = useState(false);
  // const [relatedStoryData, setRelatedStoryData] = useState(null);
  const [linkItems, setLinkItems] = useState([]);
  const links = [];
  const audienceCookie = getCookie("preferences_personalisation");
  // get FB data
  const getFB = async (pageData, behaviouralData = null) => {
    const data = await fbFetcher(
      search,
      pageData,
      audienceCookie,
      behaviouralData
    );

    return data;
  };

  // effects
  useEffect(() => {
    if (isClient && typeof window.pageController !== "undefined") {
      // if (!relatedStoryData) {
      const pageData = window.pageController;

      let behaviouralData = null;
      if (pageData.topicsQuery) {
        behaviouralData = pageData.topicsQuery();
      }

      const asyncFetch = async () => {
        const fbData = await getFB(pageData, behaviouralData);

        // setRelatedStoryData(fbData);

        fbData.forEach((link) => {
          links.push(<LinkListItem title={link.title} url={link.indexUrl} />);
        });

        setLinkItems(links);
      };

      asyncFetch();
      // }
    } else {
      setIsClient(true);
    }
  }, [isClient]);

  return (
    <div
      id="link-list"
      data-role="link-list-wrapper"
      className={`${
        linkItems.length > 0 ? "" : "su-link-list-no-stories"
      } su-fixed su-opacity-0 su--bottom-[100 su-left-0 su-left-1/2 su-right-1/2 su-translate-x-[-50%] su-max-w-[482px] su-p-20 su-bg-foggy-light lg:dark:su-bg-black-true dark:su-bg-black su-linklist-mob-width su-rounded-tl-[8px] su-rounded-tr-[8px] su-transition su-z-[49] su-px-30 su-linklist-mob-width lg:su-z-[1] lg:su-bg-white lg:su-relative lg:su-bottom-0 lg:su-opacity-100 lg:su-p-0 lg:su-w-full`}
    >
      <div className="su-flex">
        {isClient && linkItems.length > 0 ? (
          <SidebarHeading title="Stories for you" icon="bullseyePointer" />
        ) : (
          ""
        )}

        <button
          className="su-text-digital-red dark:su-text-white su-rotate-[-90deg] lg:su-hidden"
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
        className="su-max-h-1000 su-h-0 su-overflow-hidden su-transition lg:su-h-auto"
        id="link-drawer"
        data-role="link-drawer"
      >
        {linkItems[0] && (
          <article className="su-border-b su-border-b-black-20 dark:su-border-b-black-70 su-pb-15 su-mt-[23.65px] lg:su-pb-36">
            {linkItems[0]}
          </article>
        )}

        {linkItems[1] && (
          <article className="su-border-b dark:su-border-b-black-70 su-border-b-black-20 su-py-15 lg:su-py-36">
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
