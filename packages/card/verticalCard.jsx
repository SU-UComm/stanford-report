import React, { Fragment } from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { cnb } from "cnbuilder";
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
import CardThumbnail from "./CardThumbnail";
import { FAIcon } from "../icons/FAIcon";

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
    return "su-text-21 lg:su-text-[33px] su-leading-[25.2px] lg:su-leading-[39.6px]";
  return "su-text-21 lg:su-text-24 su-leading-[25.2px] lg:su-leading-[28.8px]";
}

function descriptionSize(size) {
  if (size === "featured")
    return "*:su-text-18 su-text-18 *:md:su-text-19 md:su-text-19 *:su-leading-[22.5px] su-leading-[22.5px] *:md:su-leading-[23.75px] md:su-leading-[23.75px] *:su-mt-4 *:md:su-mt-14";
  return "*:su-text-19 *:su-leading-[23.75px] su-text-19 su-leading-[23.75px]";
}

function gapSize(size) {
  if (size === "featured") return "su-gap-11 md:su-gap-13 lg:su-gap-13";
  return "su-gap-11 md:su-gap-12 lg:su-gap-9";
}

function imageMargin(size) {
  if (size === "featured") return "su-mb-15 md:su-mb-26 lg:su-mb-38";
  return "su-mb-15 md:su-mb-18 lg:su-mb-19";
}

function taxonomySize(size) {
  if (size === "featured") return "su-text-20 md:su-text-20 su-leading-[26px]";
  if (size === "medium")
    return "su-text-16 md:su-text-16 md:su-text-20 su-leading-[20.8px] md:su-leading-[26px]";

  return "su-text-18 su-leading-[23.4px]";
}

function typeSize(size) {
  if (size === "featured")
    return "su-text-18 su-leading-[23.4px] md:su-text-20 md:su-leading-[26px] lg:su-text-20 lg:su-leading-[26px]";
  if (size === "medium")
    return "su-text-16 su-leading-[20.8px] lg:su-text-18 lg:su-leading-[23.4px]";

  return "su-text-16 su-leading-[20.8px]";
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
  headingLvl = 2,
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
  SVGMap.set(
    "book",
    <BookOpenCover className="su-text-black-70 su-w-[1.2em]" aria-hidden />
  );

  let cardThumb = imageUrl;

  if (!cardThumb && liveUrl && !(liveUrl instanceof Array)) {
    cardThumb = `${
      liveUrl.match(/https:\/\/.*?\//)[0]
    }__data/assets/image/0015/130443/Quad-Arch-Close.png`;
  }

  const isRealExternalLink =
    !!liveUrl && !liveUrl?.includes("news.stanford.edu");

  return (
    <article
      aria-label={title}
      className="su-component-card su-relative su-w-full"
      data-testid="vertical-card"
    >
      {displayThumbnail && (
        <div className={`${imageMargin(cardSize)}`}>
          <CardThumbnail
            imageUrl={cardThumb}
            alt={imageAlt}
            aspectRatio={`card-${cardSize}`}
            videoUrl={type === "Video" ? videoUrl : ""}
            size={cardSize}
            title={title}
          />
        </div>
      )}

      <div className={`su-flex su-flex-wrap ${gapSize(cardSize)}`}>
        {headingLvl === 2 && (
          <h2
            className={`su-w-full ${titleSize(
              cardSize
            )} su-font-serif su-my-0 su-order-2`}
          >
            <a
              className={cnb(
                "su-group su-stretched-link su-inline-block su-text-black dark:su-text-white hocus:su-underline hocus:su-text-digital-red su-transition dark:hocus:su-text-dark-mode-red",
                "focus:su-outline-none focus-visible:su-ring-2 focus-visible:su-rounded focus-visible:su-ring-digital-red dark:focus-visible:su-ring-dark-mode-red focus-visible:su-outline-none",
                "focus-visible:after:su-outline focus-visible:after:su-outline-offset-8 focus-visible:after:su-outline-digital-red dark:focus-visible:after:su-outline-dark-mode-red"
              )}
              href={liveUrl}
            >
              {/* Title using XssSafeContent in case of HTML formatting needed – em, strong, etc.  */}
              <XssSafeContent content={title} elementType="span" />
              {isRealExternalLink && (
                <FAIcon
                  icon="arrow-up-right"
                  set="regular"
                  // Add a width to prevent getting a flash of huge icon before the CSS fully loads
                  width={cardSize === "featured" ? 20 : 15}
                  className="su-inline-block su-h-auto su-align-middle su-ml-5 su-text-digital-red dark:su-text-dark-mode-red group-hocus:su-translate-x-01em group-hocus:su--translate-y-01em su-transition-transform"
                />
              )}
            </a>
          </h2>
        )}
        {headingLvl === 3 && (
          <h3
            className={`su-w-full ${titleSize(
              cardSize
            )} su-font-serif su-my-0 su-order-2`}
          >
            <a
              href={liveUrl}
              className={cnb(
                "su-group su-stretched-link su-inline-block su-text-black dark:su-text-white hocus:su-underline hocus:su-text-digital-red su-transition dark:hocus:su-text-dark-mode-red",
                "focus:su-outline-none focus-visible:su-ring-2 focus-visible:su-rounded focus-visible:su-ring-digital-red dark:focus-visible:su-ring-dark-mode-red focus-visible:su-outline-none",
                "focus-visible:after:su-outline focus-visible:after:su-outline-offset-8 focus-visible:after:su-outline-digital-red dark:focus-visible:after:su-outline-dark-mode-red"
              )}
            >
              {/* Title using XssSafeContent in case of HTML formatting needed – em, strong, etc.  */}
              <XssSafeContent content={title} elementType="span" />
              {isRealExternalLink && (
                <FAIcon
                  icon="arrow-up-right"
                  set="regular"
                  // Add a width to prevent getting a flash of huge icon before the CSS fully loads
                  width={cardSize === "featured" ? 20 : 15}
                  className="su-inline-block su-h-auto su-align-middle su-ml-5 su-text-digital-red dark:su-text-dark-mode-red group-hocus:su-translate-x-01em group-hocus:su--translate-y-01em su-transition-transform"
                />
              )}
            </a>
          </h3>
        )}

        {taxonomy && (
          <span
            data-testid="vertical-card-taxonomy"
            className={`su-relative su-inline-block su-z-10 su-font-semibold su-order-1 ${taxonomySize(
              cardSize
            )}`} // size
          >
            <XssSafeContent
              className={cnb(
                "su-text-digital-red dark:su-text-dark-mode-red su-no-underline hocus:su-underline hocus:su-text-black hocus:dark:su-text-white",
                "focus:su-outline-none focus-visible:su-ring-2 focus-visible:su-rounded focus-visible:su-ring-black dark:focus-visible:su-ring-white focus-visible:su-outline-none"
              )}
              content={taxonomy}
              href={taxonomyUrl}
              elementType="a"
            />
          </span>
        )}

        {type && (
          <p
            data-testid="vertical-card-type"
            className={`su-flex su-font-semibold su-text-black-70 dark:su-text-black-60 su-my-0 su-gap-6 su-flex-nowrap su-items-center su-order-3 ${typeSize(
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
              "su-mb-0 su-w-full [&>*:last-child]:su-mb-0 su-order-4",
              descriptionSize(cardSize),
            ].join(" ")}
            content={description}
          />
        )}
      </div>
    </article>
  );
}
