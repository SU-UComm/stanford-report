import React, { Fragment } from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import MediaThumbnail from "./MediaThumbnail";
import { News, QuestionAnswer, Video, Podcast, Book } from "../SVG-library/SVG";

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

function mediaContainerSize(size) {
  if (size === "large")
    return "listing-item__media su-w-[103px] su-h-[69px] md:su-w-[169px] md:su-h-[113px] lg:su-w-[292px] lg:su-h-[193px]";
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
  const SVGMap = new Map();
  SVGMap.set("news", <News />);
  SVGMap.set("q&amp;a", <QuestionAnswer />);
  SVGMap.set("video", <Video />);
  SVGMap.set("podcast", <Podcast />);
  SVGMap.set("book", <Book />);

  // gap for the card <article> element
  const cardGap = new Map();
  cardGap.set("large", "su-gap-[20px] lg:su-gap-[48px]");
  cardGap.set("small", "su-gap-[19px]");

  // gap for the <div> node that holds info, like description & title
  const contentGap = new Map();
  contentGap.set("large", "su-gap-[9px] lg:su-gap-[12px]");
  contentGap.set("small", "su-gap-[6px]");

  return (
    <article
      className={`listing-item su-flex ${cardGap.get(cardSize)}`}
      data-testid="horizontal-card"
    >
      {cardSize === "large" && (
        <div className="listing-item__media su-w-[103px] su-h-[69px] md:su-w-[169px] md:su-h-[113px] lg:su-w-[292px] lg:su-h-[193px]">
          <MediaThumbnail
            imageUrl={imageUrl}
            alt={imageAlt}
            mediaType="image"
            aspectRatio="su-aspect-[50/33]"
          />
        </div>
      )}

      {cardSize === "small" && (
        <div className="listing-item__media su-w-[73px] su-h-[73px] su-relative su-overflow-hidden su-shrink-0 su-relative">
          <MediaThumbnail
            imageUrl={imageUrl}
            alt={imageAlt}
            mediaType="image"
            aspectRatio="su-aspect-[50/50]"
          />
        </div>
      )}

      <div className={`su-flex su-flex-col ${contentGap.get(cardSize)}`}>
        {cardSize === "small" && taxonomy && (
          <p
            className="su-mb-0 su-text-[16px] su-font-semibold su-text-digital-red dark:su-text-dark-mode-red hover:dark:su-text-dark-mode-red"
            data-testid="horizontal-card-taxonomy"
          >
            <XssSafeContent
              className="focus:su-outline-0 focus:su-ring su-text-digital-red su-no-underline hover:su-text-digital-red dark:su-text-dark-mode-red hover:dark:su-text-dark-mode-red"
              content={taxonomy}
              href={taxonomyUrl}
              elementType="a"
            />
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
            {SVGMap.get(type.toLowerCase()) || Fragment}
            <XssSafeContent content={type} elementType="span" />
          </p>
        )}

        {cardSize === "large" && (
          <div
            data-testid="horizontal-card-description"
            className="su-hidden lg:su-block lg:su-text-[18px]"
          >
            <XssSafeContent
              className={["su-mb-0 su-w-full [&>*:last-child]:su-mb-0"].join(
                " "
              )}
              content={description}
            />
          </div>
        )}
      </div>
    </article>
  );
}
