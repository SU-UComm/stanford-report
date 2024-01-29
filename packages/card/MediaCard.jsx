import React from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { ExternalLink } from "../links/ExternalLink";

/**
 * Returns a card featuring media (book or podcast)
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

export default function MediaCard({
  data: { type, title, taxonomy, imageUrl, imageAlt, description, liveUrl },
}) {
  return title ? (
    <article
      data-test="media-card"
      className="su-component-card-media su-relative su-w-full su-pl-0 lg:su-pl-[52px] su-flex su-flex-wrap su-justify-center su-gap-[27px]"
    >
      {imageUrl && <img src={imageUrl} alt={imageAlt} />}
      <ExternalLink size="large" ctaText={title} liveUrl={liveUrl} />
      {description && (
        <XssSafeContent
          data-test="pullquote-description"
          content={description}
          elementType="div"
          className="[&>*]:su-my-0 [&>*]:su-text-[18px] [&>*]:dark:su-text-white [&>*]:su-font-sans [&>*]:su-w-full"
        />
      )}
    </article>
  ) : (
    ""
  );
}
