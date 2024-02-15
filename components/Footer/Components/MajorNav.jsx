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
        <div className="pre-footer-links su-mb-[58px]" key={item.asset_assetid}>
          <div className="pre-footer-links-inner before:su-bg-gradient-b pre-footer-vert-gradient">
            <h2 className="su-text-black dark:su-text-white su-mb-[11px] md:su-mb-[11px]">
              <a
                className="su-text-black dark:su-text-white hover:su-underline hover:su-text-digital-red dark:hover:su-text-dark-mode-red su-transition su-text-[16px] md:su-text-[18px] su-font-semibold"
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
    <ul className="su-flex su-flex-col su-flex-wrap su-gap-[1px]">
      {subs.map((item) => {
        const title = decode(item.asset_name);
        return (
          <li className="su-mb-0 su-leading-[120%]" key={item.asset_assetid}>
            <a
              href={item.asset_url}
              className="su-text-black dark:su-text-white su-font-normal dark:hover:su-text-dark-mode-red su-text-[14px] md:su-text-[16px] focus:su-text-digital-red hover:su-text-digital-red su-no-underline hover:su-underline su-transition"
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
    <div className="pre-footer-links-wrapper su-pl-[0px] su-pr-[0px] su-flex su-flex-col lg:su-flex-row su-mt-[32px] lg:su-mt-[61px]">
      <div className="su-w-full su-grid su-grid-cols-1 md:su-grid-cols-2 lg:su-grid-cols-4 su-justify-evenly">
        <MajorLinks items={navigation} />
      </div>
    </div>
  );
}
