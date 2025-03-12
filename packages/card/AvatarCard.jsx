import React from "react";
import { cnb } from "cnbuilder";
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
      className="su-component-card su-relative su-w-full md:su-basis-1/3 su-flex su-flex-wrap su-gap-10 lg:su-content-start lg:su-max-w-[29.3rem]"
    >
      <h3 className="su-text-21 lg:su-text-24 su-leading-display su-flex-grow su-my-0 su-font-serif su-w-full">
        <XssSafeContent
          className={cnb(
            "su-stretched-link su-inline-block su-transition su-text-black su-font-bold su-no-underline hocus:su-text-digital-red dark:su-text-white dark:hocus:su-text-dark-mode-red hocus:su-underline",
            "focus:su-outline-none focus-visible:su-ring-2 focus-visible:su-rounded focus-visible:su-ring-digital-red dark:focus-visible:su-ring-dark-mode-red focus-visible:su-outline-none",
            "focus-visible:after:su-outline focus-visible:after:su-outline-offset-8 focus-visible:after:su-outline-digital-red dark:focus-visible:after:su-outline-dark-mode-red"
          )}
          content={title}
          href={liveUrl}
          elementType="a"
        />
      </h3>
      {authorDisplayName && (
        <div
          className={`su-flex su-w-full su-min-h-[5.6rem] su-self-end lg:su-self-start su-items-center su-gap-10 ${
            authorAvatar ? "su--ml-3 su--mb-3" : ""
          } su-text-black dark:su-text-white su-text-16 su-leading-display`}
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
