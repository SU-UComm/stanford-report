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
      <div className="pre-footer-bottom-first su-mb-[37px] md:su-mb-[30px] lg:su-mb-[27px]">
        <ul className="su-list-none su-flex su-pl-0 su-gap-y-[11px] su-gap-x-[20px] lg:su-gap-x-[27px]">
          {navigation.map((item) => {
            const title = decode(item.asset_name);
            return (
              <li className="su-leading-[17px]" key={item.asset_assetid}>
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
      </div>
    )
  );
}
