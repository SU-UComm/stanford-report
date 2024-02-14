import React from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { Book, ExternalArrow, Podcast } from "../SVG-library/SVG";
import { SidebarHeading } from "../headings/Heading";

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
  data: {
    type,
    title,
    taxonomy,
    imageUrl,
    imageAlt,
    description,
    liveUrl,
    author,
  },
}) {
  const iconMap = new Map();
  iconMap.set("Featured reading", <Book variant="outline" />);
  iconMap.set("Featured audio", <Podcast variant="outline" />);

  return title ? (
    <article
      data-test="media-card"
      className="su-component-card-media md:su-min-h-[384px] su-relative su-w-full md:su-px-0 su-flex su-flex-wrap su-justify-center su-gap-[20px] md:su-gap-[36px] md:su-gap-[48px] md:su-flex-nowrap su-items-center su-justify-center"
    >
      {imageUrl && (
        <div className="su-relative su-w-full su-px-[20px] md:su-px-0 su-h-[342px] lg:su-h-[373px] lg:su-h-[572px] lg:su-py-[30px] su-min-w-[249px] md:su-min-w-[249px] lg:su-min-w-[382px] lg:su-max-w-[382px] su-flex su-items-center su-justify-center">
          <img
            className="su-media-card-thumb su-w-full su-h-full su-object-scale-down su-object-center"
            src={imageUrl}
            alt={imageAlt}
          />
        </div>
      )}
      <div className="su-media-card-text su-grow su-w-full md:su-w-auto">
        {taxonomy && (
          <div className="su-mb-[20px] md:su-mb-[27px]">
            <SidebarHeading
              headingSize="p"
              icon={taxonomy}
              color="media"
              title={taxonomy}
            />
          </div>
        )}
        {title && (
          <h2 className="su-text-[35px] su-mb-[5px] su-leading[110%] md:su-text-[40px] lg:su-text-[43px]">
            {liveUrl && (
              <a
                href={liveUrl}
                className="su-text-black su-transition dark:su-text-white hocus:su-text-digital-red dark:hocus:su-text-dark-mode-red"
              >
                {title}
                <span className="su-inline-block [&>*]:su-inline-block [&>*]:su-w-[42px] [&>*]:su-h-[42px] su-ml-[-42px] su-translate-x-[42px]">
                  <ExternalArrow />
                </span>
              </a>
            )}
            {(liveUrl === "" || liveUrl === undefined || liveUrl === null) && (
              <span className="su-text-black su-transition dark:su-text-white">
                {title}
              </span>
            )}
          </h2>
        )}
        {author && (
          <div
            data-test="mediacard-author"
            className="su-mb-[15px] md:su-mb-[19px]"
          >
            {author}
          </div>
        )}
        {type && (
          <div className="su-text-[18px] md:su-text-[16px] su-mb-[15px] md:su-mb-[19px] su-gap-[6px] su-text-black-70 dark:su-text-black-50 su-flex su-nowrap">
            <span
              className={[
                type === "Book"
                  ? "[&>*]:su-fill-transparent [&>*]:su-stroke-current"
                  : "",
              ].join(" ")}
            >
              {iconMap.get(taxonomy)}
            </span>
            {type}
          </div>
        )}
        {description && (
          <XssSafeContent
            data-test="mediacard-description"
            content={description}
            elementType="div"
            className="[&>*]:su-my-0 [&>*]:su-leading-[125%] su-leading-[125%] [&>*]:su-text-[18px] su-text-[18px] md:[&>*]:su-text-[19px] md:su-text-[19px] lg:[&>*]:su-text-[21px] lg:su-text-[21px] dark:su-text-white su-font-sans su-w-full"
          />
        )}
      </div>
    </article>
  ) : (
    ""
  );
}
