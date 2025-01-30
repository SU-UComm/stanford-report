import React from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { cnb } from "cnbuilder";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";

/**
 * Leadership hero
 *
 * @param {string} title
 * Page/story title
 *
 * @param {string} pubDateFormatted
 * Publish date
 *
 * @param {string} topic
 * Topic taxonomy term, linked to topic page
 *
 * @param {string} summary
 * Story summary
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function StandaloneVisualHero(props) {
  const { title, pubDateFormatted, topic, summary } = props;

  const hasTopicLink = !!(
    topic &&
    topic.asset_url !== null &&
    topic.asset_url !== undefined &&
    topic.asset_url !== ""
  );
  const hasTopicText = !!(
    topic &&
    topic.asset_name !== null &&
    topic.asset_name !== undefined &&
    topic.asset_name !== ""
  );
  const TopicTag = hasTopicLink ? "a" : "span";

  return (
    <Container>
      <div className="su-flex su-justify-between su-flex-wrap">
        <span className="su-flex su-items-center su-justify-center su-text-16 md:su-basefont-23">
          <time className="su-m-0 su-mr-4 su-font-semibold">
            {pubDateFormatted}
          </time>
        </span>
        {hasTopicText && (
          <TopicTag
            className={cnb(
              "su-font-semibold su-text-digital-red dark:su-text-dark-mode-red su-no-underline ",
              hasTopicLink ? "hocus:su-underline" : ""
            )}
            href={hasTopicLink ? topic.asset_url : false}
          >
            {topic.asset_name}
          </TopicTag>
        )}
      </div>
      <h1 className="su-mt-32 sm:su-mt-45 xl:su-mt-58 su-font-serif">
        {title}
      </h1>
      {summary && (
        <XssSafeContent
          className="su-font-serif su-intro-text su-mb-0 su-rs-mt-2 su-text-21 su-leading-[27.35px] md:su-text-28 md:su-leading-[36.47px]"
          content={summary}
          elementType="p"
        />
      )}
    </Container>
  );
}
