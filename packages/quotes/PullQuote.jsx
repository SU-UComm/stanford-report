import React from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { Avatar } from "./Avatar";

/**
 * Listing displayed in a sidebar, has a heading, listing and link
 *
 * @param {JSX.element} quote
 * The child elements/text making up the quote
 *
 * @param {string} avatar
 * The image URL of the avatar image (optional)
 *
 * @param {string} name
 * The name of the person who made the quote
 *
 * @param {string} title
 * The title/job of the person who made the quote
 *
 * @param {string} avatarSize
 * The size of the avatar in the pullquote
 *
 * @param {string} tag
 * The quote of tag to use - defaults to div, but could be article
 *
 * @return {JSX.element}
 */
export function PullQuote({
  quote,
  avatar,
  imageAlt = "",
  name,
  title,
  avatarSize = "large",
  tag = "div",
}) {
  const Tag = tag;

  return quote ? (
    <Tag
      className={[
        "su-component-pullquote su-mx-auto su-relative su-mt-0 su-flex su-flex-wrap su-gap-27 su-justify-center su-pr-0 su-py-0",
      ].join(" ")}
    >
      <Avatar image={avatar} avatarSize={avatarSize} alt={imageAlt} />
      <blockquote
        className={[
          "su-w-full su-pl-39 dark:su-text-white dark:before:su-text-white su-font-serif su-text-black",
          avatarSize === "large" ? "lg:su-pl-[5.2rem]" : "lg:su-pl-0",
        ].join(" ")}
      >
        <XssSafeContent
          content={`${quote}”`}
          elementType="div"
          className={[
            "su-font-semibold su-font-serif-0 su-text-[2.4rem] md:su-text-[3.6rem] su-leading md:su-leading-[130.245%]",
            "[&>*:last-child]:su-mb-0 [&>*:last-child]:after:su-content-['”']",
            "su-relative before:su-text-[73px] before:su-leading-[109.5px] lg:before:su-leading-[139.5px] lg:before:su-text-[93px] before:su-font-semibold before:su--mt-25 lg:before:su--mt-38 before:su-content-['“'] before:su-text-serif before:su-text-black dark:su-text-white before:su-absolute before:su-right-full lg:before:su-right-full before:su-mr-6 lg:before:su-mr-13 dark:before:su-text-white",
            "su-leading-[33.6px] md:su-leading-[46.89px]",
          ].join(" ")}
        />
        {name && (
          <cite className="su-mt-15 md:su-mt-26 lg:su-mt-29 su-font-sans su-text-21 su-leading-[25.2px] su-flex su-flex-col">
            <span className="su-font-bold su-block su-leading-[25.2px]">
              {name}
            </span>
            {title && (
              <span className="su-block su-leading-[25.2px]">{title}</span>
            )}
          </cite>
        )}
      </blockquote>
    </Tag>
  ) : (
    ""
  );
}
