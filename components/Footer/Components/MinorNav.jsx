import React from "react";
import { decode } from "html-entities";

/**
 * Footer Minor links
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function MinorNav({ navigation }) {
  return (
    navigation &&
    navigation.length > 0 && (
      <div className="pre-footer-bottom-first su-mb-[37px] md:su-mb-30 lg:su-mb-27">
        <ul className="su-list-none su-flex su-pl-0 su-gap-y-11 su-gap-x-20 lg:su-gap-x-27">
          {navigation.map((item) => {
            const title = decode(item.asset_name);
            return (
              <li className="su-leading-[17px]" key={item.asset_assetid}>
                <a
                  href={item.asset_url}
                  className="su-text-black dark:su-text-white su-font-normal dark:hover:su-text-dark-mode-red su-text-14 md:su-text-16 focus:su-text-digital-red hover:su-text-digital-red su-no-underline hover:su-underline su-transition"
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
}
