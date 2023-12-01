import React, { Fragment } from "react";
import {
  Article,
  QuestionAnswer,
  Video,
  Podcast,
  Book,
} from "../SVG-library/SVG";

/**
 * This function will return the appropriate heading font
 * sizes for the card's title.
 *
 * @param {string} size
 * The size can be one of the following:
 * - featured
 * - medium
 * - small
 *
 * @return {string}
 */
function titleSize(size) {
  if (size === "featured")
    return "su-text-[35px] md:su-text-[40px] lg:su-text-[43px]";
  if (size === "medium") return "su-text-[21px] lg:su-text-[24px]";
  if (size === "small") return "su-text-[21px] lg:su-text-[24px]";
}

/**
 * Card package
 *
 * @param {string} title
 * The components title
 *
 * @param {string} description
 * The components description
 *
 * @param {string} liveUrl
 * The components url
 *
 * @param {string} imageUrl
 * The components image Url
 *
 * @param {string} imageAlt
 * The components image Alt
 *
 * @param {string} taxonomy
 * The components taxonomy value
 *
 * @param {string} taxonomyUrl
 * The components taxonomy url
 *
 * @param {string} type
 * The components type
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function VerticalCard({
  data: {
    title,
    description,
    liveUrl,
    imageUrl,
    imageAlt,
    taxonomy,
    taxonomyUrl,
    type,
  },
  cardSize,
  showDescriptionOnMobile,
  hideImages,
}) {
  const SVGMap = {
    article: <Article />,
    "q & a": <QuestionAnswer />,
    video: <Video />,
    podcast: <Podcast />,
    book: <Book />,
  };

  const displayImages = hideImages === false;

  // for small cards only
  const descriptionOnMobile =
    cardSize === "small" && showDescriptionOnMobile === false
      ? "su-hidden lg:su-block"
      : "";

  return (
    <article
      className="su-component-card su-relative su-w-full"
      data-testid="vertical-card"
    >
      {displayImages && imageUrl && (
        <div className="su-relative su-block su-aspect-[50/33] su-mb-[19px]" data-testid="vertical-card-image-wrapper">
          <img
            className="su-absolute su-object-cover su-object-center su-w-full su-h-full"
            src={imageUrl}
            alt={imageAlt}
          />
        </div>
      )}

      {taxonomy && (
        <p className="su-relative su-z-10 su-text-[16px] lg:su-text-[18px] su-leading-[20.8px] lg:su-leading-[23.4px] su-mb-[13px] su-font-semibold">
          <a
            href={taxonomyUrl}
            className="focus:su-outline-0 focus:su-ring su-text-digital-red su-no-underline hover:su-text-digital-red dark:su-text-dark-mode-red hover:dark:su-text-dark-mode-red"
          >
            {taxonomy}
          </a>
        </p>
      )}

      <div className="su-flex su-flex-wrap su-gap-[9px]">
        <h2
          className={`su-w-full ${titleSize(
            cardSize
          )} su-leading-[25.2px] lg:su-leading-[28.8px] su-font-serif su-my-0`}
        >
          <a
            href={liveUrl}
            className="focus:su-outline-0 focus:before:su-ring hover:su-text-digital-red su-transition su-text-black dark:su-text-white dark:hover:su-text-dark-mode-red before:su-absolute before:su-w-full before:su-h-full before:su-block before:su-top-0 before:su-left-0"
          >
            {title}
          </a>
        </h2>

        {type && (
          <p className="su-flex su-font-semibold su-text-black-70 dark:su-text-black-60 su-my-0 su-gap-[6px] su-flex-nowrap su-items-center su-text-[16px] su-leading-[20.8px]">
            {SVGMap[type.toLowerCase()] || Fragment}
            <span>{type}</span>
          </p>
        )}

        <p
          className={`su-mb-0 ${descriptionOnMobile} su-text-[19px] su-leading-[23.75px]`}
        >
          {description}
        </p>
      </div>
    </article>
  );
}
