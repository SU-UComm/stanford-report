import React from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import formatNewsDate from "../utils/formatNewsDate";
import { Avatar } from "../quotes/Avatar";
import { ArrowRight } from "../SVG-library/SVG";

/**
 * Narrow horizontal card package
 * Used for press center, announcements, leadership messages and in the news
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
 * @param {string} type
 * The components type
 *
 * @returns {JSX.Element}
 */
export default function NarrowHorizontalCard({
  data: {
    title,
    description,
    liveUrl,
    date,
    authorAvatar,
    authorDisplayName,
    displayConfiguration,
    taxonomyFeaturedUnitLandingPageUrl,
    taxonomyFeaturedUnitText,
    isTeaser,
    storySource,
  },
}) {
  const authorDate = (
    <time className="su-text-black-70 dark:su-text-black-60 su-font-semibold">
      {authorDisplayName ? (
        <XssSafeContent
          content={` &nbsp;|&nbsp; ${formatNewsDate(date)}`}
          elementType="span"
        />
      ) : (
        formatNewsDate(date)
      )}
    </time>
  );
  const authorDetails = authorDisplayName ? (
    <span className="su-my-0">
      {authorDisplayName}
      {authorDate}
    </span>
  ) : (
    authorDate
  );

  let isExternalLink = isTeaser || false;
  if (typeof isTeaser === "object") {
    isExternalLink = isTeaser[0] === "true";
  }

  return (
    <article
      className="su-grid su-grid-gap su-grid-cols-6 lg:su-grid-cols-10"
      data-testid="narrow-horizontal-card"
    >
      <div className="su-flex su-flex-col su-gap-12 su-col-start-1 su-col-span-full lg:su-col-span-6 lg:su-col-start-3">
        {displayConfiguration === "In the News" && storySource && (
          <XssSafeContent
            className="su-text-16 lg:su-text-18 su-leading-[130%] su-font-semibold su-my-0"
            content={storySource}
            elementType="p"
          />
        )}

        {displayConfiguration === "Announcements" &&
          taxonomyFeaturedUnitText && (
            <p
              data-testid="vertical-card-taxonomy"
              className="su-relative su-text-16 su-leading-[2.3rem] lg:su-text-18 su-z-10 su-mb-0 su-font-semibold" // size
            >
              <XssSafeContent
                className="focus:su-outline-0 focus:su-ring su-text-digital-red su-no-underline hover:su-text-digital-red dark:su-text-dark-mode-red hover:dark:su-text-dark-mode-red"
                content={taxonomyFeaturedUnitText}
                href={taxonomyFeaturedUnitLandingPageUrl || undefined}
                elementType={taxonomyFeaturedUnitLandingPageUrl ? "a" : "span"}
              />
            </p>
          )}

        <h2 className="su-font-serif su-basefont-23 su-my-0">
          <a
            className="su-group hocus:su-text-digital-red hocus:su-underline su-transition su-text-black dark:su-text-white dark:hocus:su-text-dark-mode-red"
            href={liveUrl}
          >
            <XssSafeContent content={title} elementType="span" />
            {isExternalLink === true && (
              <span className="su-text-digital-red dark:su-text-dark-mode-red su-translate-x-0 su-translate-y-0 su-transition group-hocus:su-translate-y-[-.1em] group-hocus:su-translate-x-[.1em] su-inline-block">
                <span className="[&>*]:su-inline-block [&>*]:su-stroke-current [&>*]:su-w-24 [&>*]:su-h-23 [&>*]:su-rotate-[-45deg] [&>*]:su-translate-x-[.12em] [&>*]:su-translate-y-[-.08em]">
                  <ArrowRight />
                </span>
              </span>
            )}
          </a>
        </h2>

        {description && (
          <div
            data-testid="narrow-horizontal-card-description"
            className="su-my-0 su-text-16 su-leading-[2.4rem] lg:su-text-18 lg:su-leading-[2.7rem]"
          >
            <XssSafeContent
              className={["su-mb-0 su-w-full [&>*:last-child]:su-mb-0"].join(
                " "
              )}
              content={description}
            />
          </div>
        )}

        {displayConfiguration === "Leadership Messages" && (
          <div
            className={`su-flex su-w-full su-min-h-[56px] su-self-end lg:su-self-start su-items-center su-gap-10 ${
              authorAvatar ? "su-ml-[-3px] su-mb-[-3px]" : ""
            } su-text-black dark:su-text-white su-text-16 su-leading-[19.106px]`}
          >
            {authorAvatar && (
              <Avatar
                image={authorAvatar}
                avatarSize="small"
                alt={`Photo of ${authorDisplayName}`}
              />
            )}
            {authorDetails}
          </div>
        )}

        {date &&
          displayConfiguration !== "Leadership Messages" &&
          displayConfiguration !== "In the News" && (
            <p className="su-text-black-70 dark:su-text-black-60 su-text-16 lg:su-text-18 su-leading-[130%] su-font-semibold su-my-0">
              {formatNewsDate(date)}
            </p>
          )}
      </div>
    </article>
  );
}
