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
    <div className="su-pb-60 lg:su-pb-95">
      {navigation && navigation.length > 0 && (
        <ul className="su-list-none su-flex su-flex-wrap su-pl-0 su-gap-y-6 su-gap-x-20 lg:su-gap-x-27 pre-footer-bottom-third">
          {navigation.map((item) => {
            const title = decode(item.asset_name);
            return (
              <li key={item.asset_assetid}>
                <a
                  className="su-group su-flex hocus:su-underline su-leading-[26px] su-items-center su-text-black dark:su-text-white dark:hocus:su-text-dark-mode-red su-text-14 md:su-text-16 hocus:su-text-digital-red su-font-normal su-no-underline su-transition"
                  href={item.asset_attribute_redirect_url}
                >
                  <span className="su-mr-2">{title}</span>
                  <svg
                    className="su-stroke-digital-red dark:su-stroke-dark-mode-red group-hocus:su-translate-x-01em group-hocus:su--translate-y-01em su-transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    aria-hidden="true"
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
