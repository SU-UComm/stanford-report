import React from "react";
import { decode } from "html-entities";

/**
 * Footer - MajorLinks
 * @returns {JSX.Element}
 */
function MajorLinks({ items }) {
  return (
    items &&
    items.length > 0 &&
    items.map((item) => {
      const title = decode(item.asset_name);
      return (
        <div className="pre-footer-links su-relative" key={item.asset_assetid}>
          <div className="pre-footer-links-inner su-relative before:su-bg-gradient-footer before:su-w-2 before:su-absolute before:su-top-0 before:su-left-0 before:su-h-full">
            <h2 className="su-text-black su-font-sans dark:su-text-white su-mb-11 su-rs-pl-2 su-rs-pr-1">
              <a
                className="su-text-black dark:su-text-white hover:su-underline hover:su-text-digital-red dark:hover:su-text-dark-mode-red su-transition su-text-16 md:su-text-18 su-font-semibold"
                href={item.asset_url}
              >
                {title}
              </a>
            </h2>
            {item.children && <MajorLinksSubs subs={item.children} />}
          </div>
        </div>
      );
    })
  );
}

function MajorLinksSubs({ subs }) {
  return (
    <ul className="su-flex su-flex-col su-flex-wrap su-gap-px su-list-none su-rs-pl-2 su-rs-pr-1">
      {subs.map((item) => {
        const title = decode(item.asset_name);
        return (
          <li
            className="su-mb-0 su-leading-display lg:su-leading-[118.75%]"
            key={item.asset_assetid}
          >
            <a
              href={item.asset_url}
              className="su-text-black dark:su-text-white su-font-normal dark:hover:su-text-dark-mode-red su-text-14 md:su-text-16 hocus:su-text-digital-red su-no-underline hover:su-underline su-transition"
            >
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Footer Major links and subs
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function MajorNav({ navigation }) {
  return (
    <div className="pre-footer-links-wrapper su-px-0 su-flex su-flex-col lg:su-flex-row su-mt-32 lg:su-mt-61">
      <div className="su-w-full su-grid su-mb-45 md:su-mb-60 lg:su-mb-58 su-gap-y-45 su-grid-cols-1 md:su-grid-cols-2 lg:su-grid-cols-4 su-justify-evenly">
        <MajorLinks items={navigation} />
      </div>
    </div>
  );
}
