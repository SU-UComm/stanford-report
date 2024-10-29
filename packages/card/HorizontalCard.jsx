import React, { Fragment } from "react";
import { cnb } from "cnbuilder";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import CardThumbnail from "./CardThumbnail";
import {
  Alert,
  AnalysisAndInsights,
  CaseStudy,
  Event,
  EventHighlights,
  Feature,
  Infographic,
  InTheNews,
  LeadershipMessages,
  Obituary,
  Opinion,
  Photo,
  PolicyBrief,
  PollQuiz,
  Profile,
  Research,
  Solutions,
  Survey,
  Timeline,
  TipsAndTakeaways,
  TypeAnnouncement,
  UniversityUpdates,
  News,
  QuestionAnswer,
  Video,
  Podcast,
  BookOpenCover,
} from "../SVG-library/SVG";
import { FAIcon } from "../icons/FAIcon";

import EventStartEndDate from "./EventStartEndDate";

/**
 * Adds a serif font family to the <h3> node
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
    videoUrl,
  },
  cardSize = "small",
}) {
  const SVGMap = new Map();
  SVGMap.set("alert", <Alert />);
  SVGMap.set("analysis & insights", <AnalysisAndInsights />);
  SVGMap.set("analysis &amp; insights", <AnalysisAndInsights />);
  SVGMap.set("analysis&nbsp;&amp;&nbsp;insights", <AnalysisAndInsights />);
  SVGMap.set("case study", <CaseStudy />);
  SVGMap.set("case&nbsp;study", <CaseStudy />);
  SVGMap.set("casestudy", <CaseStudy />);
  SVGMap.set("event", <Event />);
  SVGMap.set("event&nbsp;highlights", <EventHighlights />);
  SVGMap.set("event highlights", <EventHighlights />);
  SVGMap.set("feature", <Feature />);
  SVGMap.set("infographic", <Infographic />);
  SVGMap.set("in&nbsp;the&nbsp;news", <InTheNews />);
  SVGMap.set("in the news", <InTheNews />);
  SVGMap.set("inthenews", <InTheNews />);
  SVGMap.set("leadership&nbsp;messages", <LeadershipMessages />);
  SVGMap.set("leadership messages", <LeadershipMessages />);
  SVGMap.set("obituary", <Obituary />);
  SVGMap.set("opinion", <Opinion />);
  SVGMap.set("photo", <Photo />);
  SVGMap.set("policy&nbsp;brief", <PolicyBrief />);
  SVGMap.set("policy brief", <PolicyBrief />);
  SVGMap.set("poll/quiz", <PollQuiz />);
  SVGMap.set("poll / quiz", <PollQuiz />);
  SVGMap.set("poll&nbsp;/&nbsp;quiz", <PollQuiz />);
  SVGMap.set("profile", <Profile />);
  SVGMap.set("research", <Research />);
  SVGMap.set("solutions", <Solutions />);
  SVGMap.set("survey", <Survey />);
  SVGMap.set("timeline", <Timeline />);
  SVGMap.set("tips & takeaways", <TipsAndTakeaways />);
  SVGMap.set("tips &amp; takeaways", <TipsAndTakeaways />);
  SVGMap.set("tips&nbsp;&amp;&nbsp;takeaways", <TipsAndTakeaways />);
  SVGMap.set("university&nbsp;updates", <UniversityUpdates />);
  SVGMap.set("university updates", <UniversityUpdates />);
  SVGMap.set("announcement", <TypeAnnouncement />);
  SVGMap.set("news", <News />);
  SVGMap.set("q&amp;a", <QuestionAnswer />);
  SVGMap.set("q&a", <QuestionAnswer />);
  SVGMap.set("q & a", <QuestionAnswer />);
  SVGMap.set("q&nbsp;&amp;&nbsp;a", <QuestionAnswer />);
  SVGMap.set("video", <Video />);
  SVGMap.set("podcast", <Podcast />);
  SVGMap.set("book", <BookOpenCover className="su-w-[1.2em]" aria-hidden />);

  // gap for the card <article> element
  const cardGap = new Map();
  cardGap.set("large", "su-gap-20 lg:su-gap-48");
  cardGap.set("small", "su-gap-19");

  // gap for the <div> node that holds info, like description & title
  const contentGap = new Map();
  contentGap.set("large", "su-gap-9 lg:su-gap-12");
  contentGap.set("small", "su-gap-6");

  // gap for the <div> node that holds info, like description & title
  const titleSize = new Map();
  titleSize.set(
    "large",
    "su-text-18 md:su-text-21 lg:su-text-23 su-font-bold su-leading-[21.6px] md:su-leading-[25.2px] lg:su-leading-[27.6px]"
  );
  titleSize.set("small", "su-text-18 su-font-semibold su-leading-[21.495px]");

  const isRealExternalLink =
    !!liveUrl && !liveUrl?.includes("news.stanford.edu");

  return (
    <article
      aria-label={title}
      className={`listing-item su-flex ${cardGap.get(cardSize)} su-relative`}
      data-testid="horizontal-card"
    >
      {cardSize === "large" && imageUrl && (
        <div className="su-shrink-0 su-w-[103px] su-h-[69px] md:su-w-[169px] md:su-h-[113px] lg:su-w-[292px] lg:su-h-[193px]">
          <CardThumbnail
            imageUrl={imageUrl}
            alt={imageAlt}
            videoUrl={videoUrl}
            mediaType="image"
            aspectRatio="card-large"
            size={cardSize}
          />
        </div>
      )}

      {/* For UCP-3251: Leave an empty <div> for the thumbnail if no image URL is found so right column doesn't go full width */}
      {cardSize === "large" && !imageUrl && (
        <div className="su-shrink-0 su-w-[103px] su-h-[69px] md:su-w-[169px] md:su-h-[113px] lg:su-w-[292px] lg:su-h-[193px]" />
      )}

      {cardSize === "small" && imageUrl && (
        <div className="su-shrink-0 su-w-[73px] su-h-[73px] su-relative">
          <CardThumbnail
            imageUrl={imageUrl}
            alt={imageAlt}
            mediaType="image"
            aspectRatio="card-small"
            size={cardSize}
          />
        </div>
      )}

      <div className={`su-flex su-flex-col ${contentGap.get(cardSize)}`}>
        {cardSize === "small" && taxonomy && (
          <p
            className="su-mb-0 su-text-16 su-font-semibold su-text-digital-red dark:su-text-dark-mode-red hover:dark:su-text-dark-mode-red"
            data-testid="horizontal-card-taxonomy"
          >
            <XssSafeContent
              className="focus:su-outline-0 focus:su-ring su-text-digital-red su-no-underline hover:su-text-digital-red dark:su-text-dark-mode-red hover:dark:su-text-dark-mode-red su-block su-mt-[-6px]"
              content={taxonomy}
              href={taxonomyUrl}
              elementType="a"
            />
          </p>
        )}

        <h3
          className={`${cardTitleFont(cardSize)} ${titleSize.get(
            cardSize
          )} ${cardTitleFont(cardSize)} su-font-sans su-my-0 su-group`}
        >
          <a
            href={liveUrl}
            className={cnb(
              "su-group su-stretched-link su-inline-block su-text-black dark:su-text-white hocus:su-underline hocus:su-text-digital-red su-transition dark:hocus:su-text-dark-mode-red",
              "focus:su-outline-none focus-visible:su-ring-2 focus-visible:su-rounded focus-visible:su-ring-digital-red dark:focus-visible:su-ring-dark-mode-red focus-visible:su-outline-none",
              "focus-visible:after:su-outline focus-visible:after:su-outline-offset-8 focus-visible:after:su-outline-digital-red dark:focus-visible:after:su-outline-dark-mode-red"
            )}
          >
            <XssSafeContent content={title} elementType="span" />
            {isRealExternalLink && (
              <FAIcon
                icon="arrow-up-right"
                set="regular"
                // Add a width to prevent getting a flash of huge icon before the CSS fully loads
                width={cardSize === "small" ? 12 : 15}
                className="su-inline-block su-align-middle su-ml-5 su-text-digital-red dark:su-text-dark-mode-red group-hocus:su-translate-x-01em group-hocus:su--translate-y-01em su-transition-transform"
              />
            )}
          </a>
        </h3>

        {/* only small cards will have the date */}
        {cardSize === "small" && (
          <div data-testid="horizontal-event-date">
            <EventStartEndDate start={date} end={endDate} />
          </div>
        )}

        {cardSize === "large" && type && (
          <p
            data-testid="horizontal-card-type"
            className="su-text-black-70 dark:su-text-black-30 su-w-full su-text-14 lg:su-text-16 su-mt-9 md:su-mt-12 su-mb-0 su-flex su-gap-6 su-items-center su-justify-start"
          >
            {SVGMap.get(type.toLowerCase()) || Fragment}
            <XssSafeContent
              className="su-font-semibold su-text-14 md:su-text-16 su-leading-4"
              content={type}
              elementType="span"
            />
          </p>
        )}

        {cardSize === "large" && (
          <div
            data-testid="horizontal-card-description"
            className="su-hidden md:su-block su-text-16 lg:su-text-18 su-mt-9 md:su-mt-12 su-mb-0"
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
