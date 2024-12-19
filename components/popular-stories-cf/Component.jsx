import React, { useEffect, useState } from "react";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";
import { SidebarHeading } from "../../packages/headings/Heading";

function StoryLink({ url, title }) {
  return (
    <li>
      <a
        href={url}
        className="su-no-underline su-font-normal dark:su-text-[white] hocus:su-underline hocus:su-text-digital-red hocus:dark:su-text-dark-mode-red"
      >
        {title}
      </a>
    </li>
  );
}

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function PopularStories({ data }) {
  const links = [];

  data.forEach((link, i) => {
    const url = link.listMetadata.assetHref;
    const title = link.listMetadata.t;

    links.push(<StoryLink url={url} title={title} />);
  });

  return (
    <div id="popular-stories" className="su-flex su-gap-[1.8rem] su-flex-col">
      <span className="[&>*]:su-font-bold">
        <SidebarHeading title="Popular stories" icon="trendingup" />
      </span>

      <div>
        <ol className="su-text-[2.0rem] su-font-normal su-leading-[2.4rem] su-flex su-flex-col su-gap-[1.5rem]">
          {...links}
        </ol>
      </div>
    </div>
  );
}
