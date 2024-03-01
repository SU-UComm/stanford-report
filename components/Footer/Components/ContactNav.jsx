import React from "react";
import { decode } from "html-entities";

/**
 * Footer Contact links
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function ContactNav({ navigation }) {
  return (
    navigation &&
    navigation.length > 0 && (
      <div className="lg:su-mb-27 su-mb-32 md:su-mb-30 lg:su-ml-auto">
        <ul className="su-list-none su-flex lg:su-justify-end su-pl-0 su-gap-y-11 su-gap-x-20 lg:su-gap-x-27">
          {navigation.map((item) => {
            const title = decode(item.asset_name);
            return (
              <li className="su-leading-[17px]" key={item.asset_assetid}>
                <a
                  className="su-font-semibold su-text-black dark:su-text-white dark:hover:su-text-dark-mode-red su-text-14 md:su-text-16 focus:su-text-digital-red hover:su-text-digital-red su-no-underline hover:su-underline su-transition"
                  href={item.asset_url}
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
