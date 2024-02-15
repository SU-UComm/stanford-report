import React from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { ExternalLink } from "../links/ExternalLink";
import { PullQuote } from "../quotes/PullQuote";

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

export default function PullQuoteCard({
  data: {
    imageUrl,
    quote,
    description,
    liveUrl,
    ctaText = "Read the story",
    authorName,
  },
}) {
  return quote ? (
    <article
      data-test="pullquote-card"
      className="su-component-card-pullquote su-relative su-w-full su-pl-0 lg:su-pl-[52px] su-flex su-flex-wrap su-justify-center su-gap-[27px]"
    >
      {quote && (
        <PullQuote
          quote={quote}
          avatar={imageUrl}
          avatarSize="medium"
          cardSize="featured"
        />
      )}
      {description && (
        <XssSafeContent
          data-test="pullquote-description"
          content={`<p>${
            authorName ? `<strong>${authorName}</strong>,` : ""
          } ${description.replace(/<p>|<\/p>/g, "")}</p>`}
          elementType="div"
          className="[&>*]:su-my-0 [&>*]:su-text-18 [&>*]:dark:su-text-white [&>*]:su-font-sans [&>*]:su-w-full"
        />
      )}
      <ExternalLink size="large" ctaText={ctaText} liveUrl={liveUrl} />
    </article>
  ) : (
    ""
  );
}
