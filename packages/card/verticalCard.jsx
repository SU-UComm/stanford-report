import React, { Fragment } from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
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
  News,
  QuestionAnswer,
  Video,
  Podcast,
  Book,
} from "../SVG-library/SVG";
import CardThumbnail from "./CardThumbnail";

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
  SVGMap.set("announcement", <TypeAnnouncement />);
  SVGMap.set("news", <News />);
  SVGMap.set("q&amp;a", <QuestionAnswer />);
  SVGMap.set("q&a", <QuestionAnswer />);
  SVGMap.set("q & a", <QuestionAnswer />);
  SVGMap.set("q&nbsp;&amp;&nbsp;a", <QuestionAnswer />);
  SVGMap.set("video", <Video />);
  SVGMap.set("podcast", <Podcast />);
  SVGMap.set("book", <Book />);

  const cardThumb = imageUrl || "https://sug-web.matrix.squiz.cloud/?a=130443";

  return (
    <article
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
          />
        </div>
      )}

      {taxonomy && (
        <p
          data-testid="vertical-card-taxonomy"
          className={`su-relative su-z-10 su-mb-13 su-font-semibold ${taxonomySize(
            cardSize
          )}`} // size
        >
          <XssSafeContent
            className="focus:su-underline focus:su-outline-0 focus:su-ring su-text-digital-red su-no-underline hover:su-text-digital-red dark:su-text-dark-mode-red hover:dark:su-text-dark-mode-red"
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
          <XssSafeContent
            className="focus:su-outline-0 focus:before:su-ring hover:su-text-digital-red su-transition su-text-black dark:su-text-white dark:hover:su-text-dark-mode-red before:su-absolute before:su-w-full before:su-h-full before:su-block before:su-top-0 before:su-left-0"
            content={title}
            href={liveUrl}
            elementType="a"
          />
        </h2>

        {type && (
          <p
            data-testid="vertical-card-type"
            className={`su-flex su-font-semibold su-text-black-70 dark:su-text-black-60 su-my-0 su-gap-6 su-flex-nowrap su-items-center ${typeSize(
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
