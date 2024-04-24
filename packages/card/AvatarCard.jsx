import React from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { Avatar } from "../quotes/Avatar";

/**
 * Returns a card containing a pullquote with a CTA link
 *
 * @param {string} imageUrl
 * The image for the avatar
 *
 * @param {string} quote
 * The text for the quote
 *
 * @param {string} description
 * The text for the summary below the quote
 *
 * @param {string} liveUrl
 * The link for the card to go to
 *
 * @param {string} ctaText
 * The text within the call to action at the bottom of the card
 *
 * @returns {JSX.Element}
 */

export default function AvatarCard({
  data: { title, liveUrl, imageUrl, authorDisplayName, authorAvatar },
}) {
  imageUrl = imageUrl instanceof Array ? imageUrl[0] : imageUrl;

  const avatar = authorAvatar || imageUrl;

  return title ? (
    <article
      aria-label={title}
      data-test="avatar-card"
      className="su-component-card su-relative su-w-full md:su-basis-1/3 su-flex su-flex-wrap su-gap-10 lg:su-content-start lg:su-max-w-[293px]"
    >
      <h3 className="su-text-21 lg:su-text-24 su-leading-[25.2px] lg:su-leading-[28.8px] su-flex-grow su-my-0 su-font-serif su-w-full">
        <XssSafeContent
          className="focus:su-outline-0 focus:su-ring su-transition su-text-black dark:su-text-white dark:hover:su-text-dark-mode-red su-font-bold su-no-underline hover:su-text-digital-red dark:su-text-white dark:hover:su-text-dark-mode-red"
          content={title}
          href={liveUrl}
          elementType="a"
        />
      </h3>
      {authorDisplayName && (
        <div
          className={`su-flex su-w-full su-min-h-[56px] su-self-end lg:su-self-start su-items-center su-gap-10 ${
            authorAvatar ? "su-ml-[-3px] su-mb-[-3px]" : ""
          } su-text-black dark:su-text-white su-text-16 su-leading-[19.106px]`}
        >
          {avatar && (
            <Avatar
              image={avatar}
              avatarSize="small"
              alt={`Photo of ${authorDisplayName}`}
            />
          )}
          <span>{authorDisplayName}</span>
        </div>
      )}
    </article>
  ) : (
    ""
  );
}
