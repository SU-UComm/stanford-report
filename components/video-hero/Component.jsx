import React from "react";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";
import EmbedVideo from "../../packages/media/EmbedVideo";

/**
 * Basic hero
 *
 * @param {string} title The props to display the hero
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function VideoHero(props) {
  const { title, pubDateFormatted, topic, media } = props;
  const video = media.featureVideo.id;
  return (
    <Container>
      <div className="su-relative su-pb-[56.25%]">
        <EmbedVideo
          videoId={video}
          className="su-absolute su-top-0 su-left-0 su-w-full su-h-full"
        />
      </div>
      <div className="su-flex su-justify-between su-flex-wrap su-rs-mt-6">
        <span className="su-flex su-items-center su-justify-center su-text-16 md:su-basefont-23">
          <time className="su-m-0 su-mr-4 su-font-semibold">
            {pubDateFormatted}
          </time>
        </span>
        {topic.asset_name &&
          (topic.asset_url !== "" ? (
            <a
              href={topic.asset_url !== "" ? topic.asset_url : "#"}
              className="su-font-semibold su-text-digital-red dark:su-text-dark-mode-red su-no-underline hocus:su-underline"
            >
              {topic.asset_name}
            </a>
          ) : (
            <span className="su-font-semibold su-text-digital-red dark:su-text-dark-mode-red">
              {topic.asset_name}
            </span>
          ))}
      </div>
      <h1 className="su-mt-32 sm:su-mt-45 xl:su-mt-58 su-font-serif">
        {title}
      </h1>
    </Container>
  );
}
