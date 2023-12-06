import React from "react";
import { Avatar } from "./Avatar";

/**
 * Listing displayed in a sidebar, has a heading, listing and link
 *
 * @param {JSX.element} children
 * The children making  up the listing
 *
 * @param {string} cite
 * The title text
 *
 * @param {string} avatar
 * The icon to display before the title text
 *
 * @return {JSX.element}
 */
export function PullQuote({ children, avatar, name, title, tag = "div" }) {
  const hasChildren = children !== undefined;
  const Tag = tag;

  return hasChildren ? (
    <Tag
      className={[
        "su-component-pullquote su-relative lg:su-pl-[52px] su-mt-0 su-flex su-flex-wrap su-gap-[27px] su-justify-center",
      ].join(" ")}
    >
      <Avatar image={avatar} avatarSize="large" />
      <blockquote className="su-w-full dark:su-text-white dark:before:su-text-white su-pl-[39px] lg:su-pl-0 su-text-[28px] su-leading-[36.469px] lg:su-text-[36px] lg:su-leading-[46.888px] su-text-black su-font-semibold su-mt-0 su-pr-0 su-py-0">
        <div className="su-relative after:su-content-['”'] before:su-text-[73px] before:su-leading-[109.5px] lg:before:su-leading-[139.5px] lg:before:su-text-[93px] before:su-font-semibold before:su-mt-[-20px] lg:before:su-mt-[-30px] before:su-content-['“'] before:su-text-black before:su-absolute before:su-left-0 lg:before:su-left-auto lg:before:su-right-full before:su-mr-[13px]">
          {children}
        </div>
        {name && (
          <cite>
            <span>{name}</span>
            {title && <span>{title}</span>}
          </cite>
        )}
      </blockquote>
    </Tag>
  ) : (
    ""
  );
}
