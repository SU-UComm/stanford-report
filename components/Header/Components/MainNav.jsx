import React from "react";
import { decode } from "html-entities";
/**
 * Main navigation (desktop etc.)
 *
 * @returns {JSX.Element}
 * @constructor
 */

const generateItems = (items, currentPage) => {
  const sharedClasses =
    "su-block su-pt-[13px] su-pb-[9px] su-border-b-4 su-no-underline su-text-black dark:su-text-white dark:hover:su-text-dark-mode-red dark:hover:su-border-dark-mode-red su-transition su-ease-in-out hover:su-border-digital-red hover:su-text-digital-red su-text-16 lg:su-text-18 su-leading-[21.5px]";
  const pageClasses = `${sharedClasses} su-border-transparent`;
  const activePageClasses = `${sharedClasses} su-border-digital-red dark:su-border-dark-mode-red`;

  return items.map((item, index) => {
    const title = decode(item.asset_name);
    return (
      <li className="su-mb-0" key={item.asset_assetid}>
        <a
          href={item.asset_url}
          className={
            Number(currentPage) === Number(item.asset_assetid)
              ? activePageClasses
              : pageClasses
          }
        >
          {title}
        </a>
      </li>
    );
  });
};

export default function MainNav({ major, currentPage }) {
  return (
    <nav
      aria-label="Secondary"
      className="report-header__nav su-hidden md:su-block su-w-full before:su-h-[2px] before:su-block before:su-w-full before:su-bg-black-10 before:su-mx-auto before:su-w-full dark:before:su-bg-black lg:before:su-max-w-[858px]"
    >
      <ul className="su-list-none su-pl-0 su-ml-0 su-flex su-justify-center su-gap-[60px] su-mb-0">
        {generateItems(major, currentPage)}
      </ul>
    </nav>
  );
}
