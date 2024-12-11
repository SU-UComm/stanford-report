import React from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { SidebarHeading } from "../headings/Heading";
import { FAIcon } from "../icons/FAIcon";

// TODO: Clean up TW classes with px, and properties with more than one value, e.g., md:su-gap-36 md:su-gap-48

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
  const isRealExternalLink =
    !!liveUrl && !liveUrl?.includes("news.stanford.edu");

  let typeIcon;
  let iconTestId;

  if (type === "Book") {
    typeIcon = "book-open-cover";
    iconTestId = "svg-book-open-cover";
  } else if (type === "Podcast") {
    typeIcon = "microphone";
    iconTestId = "svg-microphone";
  } else if (type === "Magazine") {
    typeIcon = "book-open";
    iconTestId = "svg-book-open";
  }

  return title ? (
    <article
      aria-label={title}
      data-test="media-card"
      className="su-component-card-media md:su-min-h-[38.4rem] su-relative su-w-full md:su-px-0 su-flex su-flex-wrap su-justify-center su-gap-20 md:su-gap-36 md:su-gap-48 md:su-flex-nowrap su-items-center"
    >
      {imageUrl && (
        <div className="su-relative su-w-full su-px-20 md:su-px-0 su-h-[34.2rem] lg:su-h-[57.2rem] lg:su-py-30 su-min-w-[24.9rem] lg:su-min-w-[38.2rem] lg:su-max-w-[38.2rem] su-flex su-items-center su-justify-center">
          <img
            className="su-media-card-thumb su-size-full su-object-scale-down su-object-center"
            src={imageUrl}
            alt={imageAlt}
          />
        </div>
      )}
      <div className="su-media-card-text su-grow su-w-full md:su-w-auto">
        {taxonomy && (
          <div className="su-mb-20 md:su-mb-27">
            <SidebarHeading
              headingSize="p"
              icon={taxonomy}
              color="media"
              title={taxonomy}
            />
          </div>
        )}
        {title && (
          <h3 className="su-text-[3.5rem] su-mb-5 su-leading-tight md:su-text-[4rem] lg:su-text-[4.3rem]">
            {liveUrl && (
              // eslint-disable-next-line jsx-a11y/control-has-associated-label
              <a
                href={liveUrl}
                className="su-group su-text-black su-transition dark:su-text-white hocus:su-text-digital-red dark:hocus:su-text-dark-mode-red hocus:su-underline"
              >
                <XssSafeContent content={title} elementType="span" />
                {isRealExternalLink && (
                  <FAIcon
                    icon="arrow-up-right"
                    set="regular"
                    // Add a width to prevent getting a flash of huge icon before the CSS fully loads
                    width={24}
                    className="su-h-auto su-align-middle su-ml-5 su-text-digital-red dark:su-text-dark-mode-red group-hocus:su-translate-x-01em group-hocus:su--translate-y-01em su-transition-transform"
                  />
                )}
              </a>
            )}
            {(liveUrl === "" || liveUrl === undefined || liveUrl === null) && (
              <span className="su-text-black su-transition dark:su-text-white">
                {title}
              </span>
            )}
          </h3>
        )}
        {author && (
          <div data-test="mediacard-author" className="su-mb-15 md:su-mb-19">
            {author}
          </div>
        )}
        {type && (
          <div className="su-text-18 md:su-text-16 su-mb-15 md:su-mb-19 su-gap-6 su-text-black-70 dark:su-text-black-50 su-flex su-nowrap su-items-center su-leading-none">
            <FAIcon icon={typeIcon} set="solid" data-testid={iconTestId} />
            <span className="su-font-semibold">{type}</span>
          </div>
        )}
        {description && (
          <XssSafeContent
            data-test="mediacard-description"
            content={description}
            elementType="div"
            className="*:su-my-0 *:su-leading-[125%] su-leading-[125%] *:su-text-18 su-text-18 md:*:su-text-19 md:su-text-19 lg:*:su-text-21 lg:su-text-21 dark:su-text-white su-font-sans su-w-full"
          />
        )}
      </div>
    </article>
  ) : (
    ""
  );
}
