import React, { Fragment } from "react";
import {
  Article,
  QuestionAnswer,
  Video,
  Podcast,
  Book,
} from "../SVG-library/SVG";

import EventStartEndDate from "./EventStartEndDate";

/**
 * Adds a serif font family to the <h2> node
 *
 * @param {string} size
 * The card size, either "large" or "small"
 *
 * @returns {string}
 */
function cardTitleFont(size) {
  if (size === "large") return "su-font-serif";

  return "";
}

/**
 * Horizontal package
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
 * @param {string} cardSize
 * The card's size, can be "large" or "small"
 *
 * @returns {JSX.Element}
 */
export default function HorizontalCard({
  data: {
    title,
    description,
    liveUrl,
    imageUrl,
    imageAlt,
    taxonomy,
    taxonomyUrl,
    type,
    date,
    endDate,
  },
  cardSize,
}) {
  const SVGMap = {
    article: <Article />,
    "q & a": <QuestionAnswer />,
    video: <Video />,
    podcast: <Podcast />,
    book: <Book />,
  };

  // gap for the card <article> element
  const cardGap = {
    large: "su-gap-[20px] lg:su-gap-[48px]",
    small: "su-gap-[19px]",
  };

  // gap for the <div> node that holds info, like description & title
  const contentGap = {
    large: "su-gap-[9px] lg:su-gap-[12px]",
    small: "su-gap-[6px]",
  };

  return (
    <article
      className={`listing-item su-flex ${cardGap[cardSize]}`}
      data-testid="horizontal-card"
    >
      <CardThumbnail size={cardSize} imageUrl={imageUrl} imageAlt={imageAlt}>
        <img
          className="su-object-cover su-object-center su-absolute su-w-full su-h-full"
          src={imageUrl}
          alt={imageAlt}
        />
      </CardThumbnail>

      <div className={`su-flex su-flex-col ${contentGap[cardSize]}`}>
        {cardSize === "small" && taxonomy && (
          <p
            className="su-mb-0 su-text-[16px] su-font-semibold su-text-digital-red dark:su-text-dark-mode-red hover:dark:su-text-dark-mode-red"
            data-testid="horizontal-card-taxonomy"
          >
            {taxonomy}
          </p>
        )}

        <h2
          className={`${cardTitleFont(
            cardSize
          )} su-text-[18px] md:su-text-[21px] lg:su-text-[23px] su-font-bold su-leading-[21.6px] md:su-leading-[25.2px] lg:su-leading-[27.6px] ${cardTitleFont(
            cardSize
          )} su-my-0`}
        >
          <a
            className="focus:su-outline-0 hover:su-text-digital-red su-transition su-text-black dark:su-text-white dark:hover:su-text-dark-mode-red"
            href={liveUrl}
          >
            {title}
          </a>
        </h2>

        {/* only small cards will have the date */}
        {cardSize === "small" && (
          <div data-testid="horizontal-event-date">
            <EventStartEndDate start={date} end={endDate} />
          </div>
        )}

        {cardSize === "large" && type && (
          <p
            data-testid="horizontal-card-type"
            className="su-flex su-font-bold su-text-black-70 dark:su-text-black-60 su-text-[14px] su-leading-[18.2px]"
          >
            {SVGMap[type.toLowerCase()] || Fragment}
            <span>{type}</span>
          </p>
        )}

        {cardSize === "large" && (
          <div
            data-testid="horizontal-card-description"
            className="su-hidden lg:su-block lg:su-text-[18px]"
          >
            {description}
          </div>
        )}
      </div>
    </article>
  );
}

/**
 * CardThumbnail renders out the card's thumbnail image
 * container
 *
 * @param {string} size
 * The size of the card, which dictates the image container
 * constraints, "large" or "small"
 *
 * @param {array} children
 * Child nodes to the card thumbnail
 *
 * @returns {JSX.Element}
 */
function CardThumbnail({ size, children }) {
  if (size === "large") {
    return (
      <div className="listing-item__media su-w-[103px] su-h-[69px] md:su-w-[169px] md:su-h-[113px] lg:su-w-[292px] lg:su-h-[193px] su-relative su-overflow-hidden su-shrink-0">
        {children}
      </div>
    );
  }

  // small card tumbnail
  return (
    <div className="listing-item__media su-w-[73px] su-h-[73px] su-relative su-overflow-hidden su-shrink-0">
      {children}
    </div>
  );
}
