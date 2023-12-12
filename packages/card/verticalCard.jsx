import React, { Fragment } from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { News, QuestionAnswer, Video, Podcast, Book } from "../SVG-library/SVG";

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
        <ImageThumbnail
          imageUrl={imageUrl}
          imageAlt={imageAlt}
          cardSize={cardSize}
        />
      )}

      {displayThumbnail && videoUrl && (
        <VideoThumbnail
          imageUrl={imageUrl}
          imageAlt={imageAlt}
          cardSize={cardSize}
        />
      )}

      {taxonomy && (
        <p
          data-testid="vertical-card-taxonomy"
          className="su-relative su-z-10 su-text-[16px] lg:su-text-[18px] su-leading-[20.8px] lg:su-leading-[23.4px] su-mb-[13px] su-font-semibold"
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
            className="su-flex su-font-semibold su-text-black-70 dark:su-text-black-60 su-my-0 su-gap-[6px] su-flex-nowrap su-items-center su-text-[16px] su-leading-[20.8px]"
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

function VideoThumbnail({ cardSize, imageUrl, imageAlt }) {
  return (
    <a
      href="#"
      className={`focus:su-outline-0 focus:su-ring su-relative su-z-10 su-block su-aspect-[50/33] ${imageMargin(
        cardSize
      )}`}
    >
      <img
        className="su-absolute su-object-cover su-object-center su-w-full su-h-full"
        src={imageUrl}
        width="293"
        height="195"
        alt={imageAlt}
      />

      <svg
        className="su-absolute su-left-[27px] su-bottom-[27px] su-drop-shadow-[0px_14px_28px_rgba(0,0,0,0.20)]"
        aria-hidden="true"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M54.375 30C54.375 23.5353 51.8069 17.3355 47.2357 12.7643C42.6645 8.1931 36.4647 5.625 30 5.625C23.5353 5.625 17.3355 8.1931 12.7643 12.7643C8.1931 17.3355 5.625 23.5353 5.625 30C5.625 36.4647 8.1931 42.6645 12.7643 47.2357C17.3355 51.8069 23.5353 54.375 30 54.375C36.4647 54.375 42.6645 51.8069 47.2357 47.2357C51.8069 42.6645 54.375 36.4647 54.375 30ZM0 30C0 22.0435 3.1607 14.4129 8.7868 8.7868C14.4129 3.1607 22.0435 0 30 0C37.9565 0 45.5871 3.1607 51.2132 8.7868C56.8393 14.4129 60 22.0435 60 30C60 37.9565 56.8393 45.5871 51.2132 51.2132C45.5871 56.8393 37.9565 60 30 60C22.0435 60 14.4129 56.8393 8.7868 51.2132C3.1607 45.5871 0 37.9565 0 30ZM22.0664 17.2383C22.957 16.7461 24.0352 16.7578 24.9141 17.2969L41.7891 27.6094C42.6211 28.125 43.1367 29.0273 43.1367 30.0117C43.1367 30.9961 42.6211 31.8984 41.7891 32.4141L24.9141 42.7266C24.0469 43.2539 22.957 43.2773 22.0664 42.7852C21.1758 42.293 20.625 41.3555 20.625 40.3359V19.6875C20.625 18.668 21.1758 17.7305 22.0664 17.2383Z"
          fill="white"
        />
      </svg>

      <span className="sr-only">Watch video</span>
    </a>
  );
}

/**
 * card component's image thumbnail
 *
 * @param {string} cardSize
 * the size of the card component, eg: featured, medium & small
 *
 * @param {string} imageUrl
 * the image's source
 *
 * @param {string} imageAlt
 * the image's alt value
 *
 * @returns {JSX.Element}
 */
function ImageThumbnail({ cardSize, imageUrl, imageAlt }) {
  return (
    <div
      className={`su-relative su-block su-aspect-[50/33] ${imageMargin(
        cardSize
      )}`}
      data-testid="vertical-card-image-wrapper"
    >
      <img
        className="su-absolute su-object-cover su-object-center su-w-full su-h-full"
        src={imageUrl}
        alt={imageAlt}
      />
    </div>
  );
}
