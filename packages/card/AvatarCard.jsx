Code Snippets
Frontend + Server Components


Session Story Sandbox
129723
Banner Includes
Data: 129975
Div: 130033
Deps: 130223
Design Parse ID
99667




Lorem Ipsum Snippet
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

See pg 2 for code snippets
Manifest Preview Snippet
"frontend": {
      "functionData": {
        "main": {
          "inputData": {
            "type": "file",
            "path": "preview.data.json"
          },
          "wrapper": {
            "path": "../../packages/__globalPreview/frontend.html"
          }
        }
      }
}

Hydration Snippet
<div
          data-component="leadership-messages-hannah"
          data-hydration-props='{"data":[],"headingData":{"title":"Messages from Leadership","ctaText":"View all","resolvedUrl":"https://sug-web.matrix.squiz.cloud/report/stories/give-and-go-program-finds-new-purpose-for-tons-of-unwanted-items"}}'
        ></div>

Above footer include snippet
%begin_globals_asset_metadata_storyLayout^eq:LeadershipMessage%
        <!--@@ Leadership Messages datasets - Client side render @@-->
        %globals_asset_contents_raw:129682%
        <!--@@ Leadership Messages datasets - Client side render @@-->
        <script runat="server">
            print(`<div data-component="leadership-messages-hannah" data-hydration-component="leadership-messages-hannah" data-hydration-props='${JSON.stringify(leadershipMessagesGridLayout)}'></div>`);
        </script>
        
    %end_%


Preview Hydration Snippet v2
<div
          data-component="leadership-messages-hannah"
          data-hydration-component="leadership-messages-hannah"
          data-hydration-props='{"headingData":{"title":"Read next","ctaText":"View all","resolvedUrl":""},"search":{"endpoint":"https://dxp-us-search.funnelback.squiz.cloud/s/search.html","collection":"sug~sp-stanford-report-search","profile":"stanford-report-push-search","currentPage":129882}}'
        ></div>

Check for data snippet
// Get our current props
  const props = JSON.parse(element.getAttribute("data-hydration-props"));

  // Check if we're rendering frontend, rather than backend (we won't have data)
  if (props.data === undefined) {
  }

Additional Imports snippet
import FetchAdapter from "../../packages/utils/fetchAdapter";
import translatePersonalisationProfile from "../../packages/utils/translatePersonalisationProfile";
import formatCardDataFunnelback from "../../packages/utils/formatCardDataFunnelback";
import getCookie from "../../packages/utils/cookieGet";

Audience Snippet
const audienceCookie = getCookie("preferences_personalisation");
    const audience = translatePersonalisationProfile(audienceCookie);
console.log(audience);

Funnelback Adapter Snippet
const adapter = new FetchAdapter();

    // Construct the FB URL
    let fbUrl = "";
    if (props.search) {
      fbUrl = `${props.search.endpoint?.replace(
        "search.html",
        "search.json"
      )}?profile=${props.search.profile}&query=%21null&collection=${
        props.search.collection
      }&meta_taxonomyAudienceText=${translatePersonalisationProfile(
        audience
      )}&num_ranks=6&meta_id_not=${props.search.currentPage}`;
    }

console.log(fbUrl);

Funnelback Fetch Data Snippet
// Check if we have a URL to fetch data from
    if (fbUrl !== "") {
      adapter.url = fbUrl;

      const resultsData = await adapter.fetch();
      const data = [];
      if (resultsData.response?.resultPacket?.results.length > 0) {
        resultsData.response.resultPacket.results.forEach((card) => {
          data.push(formatCardDataFunnelback(card));
        });
      }

      // Set our props with the fetched data
      props.data = data;
      element.setAttribute("data-hydration-props", JSON.stringify(props));
    }

Component Dependencies Snippet
<!--@@ Leadership Messages - Component @@-->
        %globals_asset_contents_raw:IDHERE%









packages/card/AvatarCard.jsx

import React from "react";
import { Avatar } from "../quotes/Avatar";

/**
 * Returns a card containing a pullquote with a CTA link
 *
 * @param {string} imageUrl
 * The image for the avatar
 *
 * @param {string} quote
 * The text for the quote
 *
 * @param {string} description
 * The text for the summary below the quote
 *
 * @param {string} liveUrl
 * The link for the card to go to
 *
 * @param {string} ctaText
 * The text within the call to action at the bottom of the card
 *
 * @returns {JSX.Element}
 */

export default function AvatarCard({
  data: { title, liveUrl, authorDisplayName, authorAvatar },
}) {
  return title ? (
    <article
      data-test="avatar-card"
      className="su-component-card su-relative su-w-full md:su-basis-1/3 su-flex su-flex-wrap su-gap-[10px] lg:su-content-start lg:su-max-w-[293px]"
    >
      <h3 className="su-text-[21px] lg:su-text-[24px] su-leading-[25.2px] lg:su-leading-[28.8px] su-flex-grow su-my-0 su-font-serif su-w-full">
        <a
          href={liveUrl}
          className="focus:su-outline-0 focus:su-ring su-transition su-text-black dark:su-text-white dark:hover:su-text-dark-mode-red su-font-bold su-no-underline hover:su-text-digital-red dark:su-text-white dark:hover:su-text-dark-mode-red"
        >
          {title}
        </a>
      </h3>
      {authorDisplayName && (
        <div
          className={`su-flex su-w-full su-min-h-[56px] su-self-end lg:su-self-start su-items-center su-gap-[10px] ${
            authorAvatar ? "su-ml-[-3px] su-mb-[-3px]" : ""
          } su-text-black dark:su-text-white su-text-[16px] su-leading-[19.106px]`}
        >
          {authorAvatar && (
            <Avatar
              image={authorAvatar}
              avatarSize="small"
              alt={`Photo of ${authorDisplayName}`}
            />
          )}
          <span>{authorDisplayName}</span>
        </div>
      )}
    </article>
  ) : (
    ""
  );
}
