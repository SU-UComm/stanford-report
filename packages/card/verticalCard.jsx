import React, { Fragment } from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { News, QuestionAnswer, Video, Podcast, Book } from "../SVG-library/SVG";
import MediaThumbnail from "./MediaThumbnail";

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
    return "su-text-[35px] md:su-text-[40px] lg:su-text-[43px] su-leading-[42px] md:su-leading-[48px] lg:su-leading-[51.6px]";
  if (size === "medium")
    return "su-text-[21px] lg:su-text-[33px] su-leading-[25.2px] lg:su-leading-[39.6px]";
  return "su-text-[21px] lg:su-text-[24px] su-leading-[25.2px] lg:su-leading-[28.8px]";
}

function descriptionSize(size) {
  if (size === "featured")
    return "[&>*]:su-text-[18px] [&>*]:md:su-text-[19px] [&>*]:su-leading-[22.5px] [&>*]:md:su-leading-[23.75px] [&>*]:su-mt-[4px] [&>*]:md:su-mt-[14px]";
  return "[&>*]:su-text-[19px] [&>*]:su-leading-[23.75px]";
}

function gapSize(size) {
  if (size === "featured")
    return "su-gap-[11px] md:su-gap-[13px] lg:su-gap-[13px]";
  return "su-gap-[11px] md:su-gap-[12px] lg:su-gap-[9px]";
}

function imageMargin(size) {
  if (size === "featured")
    return "su-mb-[15px] md:su-mb-[26px] lg:su-mb-[38px]";
  return "su-mb-[15px] md:su-mb-[18px] lg:su-mb-[19px]";
}

function taxonomySize(size) {
  if (size === "featured")
    return "su-text-[20px] md:su-text-[20px] su-leading-[26px]";
  if (size === "medium")
    return "su-text-[16px] md:su-text-[16px] md:su-text-[20px] su-leading-[20.8px] md:su-leading-[26px]";

  return "su-text-[18px] su-leading-[23.4px]";
}

function typeSize(size) {
  if (size === "featured")
    return "su-text-[18px] su-leading-[23.4px] md:su-text-[20px] md:su-leading-[26px] lg:su-text-[20px] lg:su-leading-[26px]";
  if (size === "medium")
    return "su-text-[16px] su-leading-[20.8px] lg:su-text-[18px] lg:su-leading-[23.4px]";

  return "su-text-[16px] su-leading-[20.8px]";
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
    videoUrl,
  },
  cardSize = "small",
  displayDescription = true,
  displayThumbnail = true,
}) {
  const SVGMap = new Map();
  SVGMap.set("news", <News />);
  SVGMap.set("q&amp;a", <QuestionAnswer />);
  SVGMap.set("video", <Video />);
  SVGMap.set("podcast", <Podcast />);
  SVGMap.set("book", <Book />);

  return (
    <article
      className="su-component-card su-relative su-w-full"
      data-testid="vertical-card"
    >
      {displayThumbnail && imageUrl && !videoUrl && (
        <div className={`${imageMargin(cardSize)}`}>
          <MediaThumbnail
            imageUrl={imageUrl}
            alt={imageAlt}
            aspectRatio="su-aspect-[50/33]"
            mediaType="image"
          />
        </div>
      )}

      {displayThumbnail && videoUrl && (
        <div className={`${imageMargin(cardSize)}`}>
          <MediaThumbnail
            imageUrl={imageUrl}
            alt={imageAlt}
            aspectRatio="su-aspect-[50/33]"
            mediaType="video"
          />
        </div>
      )}

      {taxonomy && (
        <p
          data-testid="vertical-card-taxonomy"
          className={`su-relative su-z-10 su-mb-[13px] su-font-semibold ${taxonomySize(
            cardSize
          )}`} // size
        >
          <XssSafeContent
            className="focus:su-outline-0 focus:su-ring su-text-digital-red su-no-underline hover:su-text-digital-red dark:su-text-dark-mode-red hover:dark:su-text-dark-mode-red"
            content={taxonomy}
            href={taxonomyUrl}
            elementType="a"
          />
        </p>
      )}

      <div className={`su-flex su-flex-wrap ${gapSize(cardSize)}`}>
        <h2
          className={`su-w-full ${titleSize(cardSize)} su-font-serif su-my-0`}
        >
          <a
            href={liveUrl}
            className="focus:su-outline-0 focus:before:su-ring hover:su-text-digital-red su-transition su-text-black dark:su-text-white dark:hover:su-text-dark-mode-red before:su-absolute before:su-w-full before:su-h-full before:su-block before:su-top-0 before:su-left-0"
          >
            {title}
          </a>
        </h2>

        {type && (
          <p
            data-testid="vertical-card-type"
            className={`su-flex su-font-semibold su-text-black-70 dark:su-text-black-60 su-my-0 su-gap-[6px] su-flex-nowrap su-items-center ${typeSize(
              cardSize
            )}`}
          >
            {SVGMap.get(type.toLowerCase()) || Fragment}
            <XssSafeContent content={type} elementType="span" />
          </p>
        )}

        {displayDescription && description && (
          <XssSafeContent
            className={[
              "su-mb-0 su-w-full [&>*:last-child]:su-mb-0",
              descriptionSize(cardSize),
            ].join(" ")}
            content={description}
          />
        )}
      </div>
    </article>
  );
}
