import React from "react";
import { decode } from "html-entities";

/**
 * Footer External Personalised links
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function ExternalNav({ navigation, audience }) {
  return (
    <div className="su-pb-[60px] lg:su-pb-[95px]">
      {navigation && navigation.length > 0 && (
        <ul className="su-list-none su-flex su-flex-wrap su-pl-0 su-gap-y-[6px] su-gap-x-[20px] lg:su-gap-x-[27px] pre-footer-bottom-third">
          {navigation.map((item) => {
            const title = decode(item.asset_name);
            return (
              <li key={item.asset_assetid}>
                <a
                  className="su-flex hover:su-underline su-leading-[26px] su-items-center su-text-black dark:su-text-white dark:hover:su-text-dark-mode-red su-text-[14px] md:su-text-[16px] focus:su-text-digital-red hover:su-text-digital-red su-font-normal su-no-underline su-transition"
                  href={item.asset_attribute_redirect_url}
                >
                  <span className="su-mr-2">{title}</span>
                  <svg
                    className="su-stroke-digital-red dark:su-stroke-dark-mode-red"
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                  >
                    <path
                      d="M8.95664 7.07109L15.5563 7.07109M15.5563 7.07109L15.5563 13.6708M15.5563 7.07109L7.07102 15.5564"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
