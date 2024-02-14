import React from "react";
import { decode } from "html-entities";

function Subnav({ navigation }) {
  return (
    <ul>
      {navigation.map((item) => {
        const title = decode(item.asset_name);
        return (
          <li className="su-mb-0 su-w-full" key={item.asset_assetid}>
            <a
              className="su-text-black dark:su-text-white dark:hover:su-text-dark-mode-red su-text-[20px] md:su-text-[26px] su-leading-[31px] focus:su-text-digital-red hover:su-text-digital-red su-font-bold su-no-underline su-transition"
              href={item.asset_url}
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
 * Subtopics Subnav component
 *
 * @param {string} data The full HTML element to be printed
 * @returns {JSX.Element}
 * @constructor
 */

export default function SubtopicSubnav({ data }) {
  const { title, parent, children, isTopLevel } = data;
  return (
    <>
      {!isTopLevel && <a href={parent.url}>{parent.title}</a>}
      {title && <h1>{title}</h1>}
      {children && children.length > 0 && <Subnav navigation={children} />}
    </>
  );
}
