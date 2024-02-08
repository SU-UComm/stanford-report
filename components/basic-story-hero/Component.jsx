import React from "react";
import { Container } from "../../packages/grids/Container";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

function readingTime(text) {
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}

export default function basicStoryHero(props) {
  const { title, media, summary, pubDateFormatted, topic } = props;
  return (
    <div>
      <div className="su-px-0 md:su-px-[113px]">
        <div className="su-flex su-justify-between su-flex-wrap">
          <span className="su-flex su-items-center su-justify-center su-text-[16px] md:su-basefont-23">
            <time className="su-m-0 su-mr-[4px] su-font-semibold">
              {pubDateFormatted}
            </time>
            <span className="su-reading-time su-reading-time-separator" />
          </span>
          <span className="su-font-semibold su-text-digital-red dark:su-text-dark-mode-red su-text-[16px] sm:su-text-[21px] md:su-text-[24px]">
            {topic}
          </span>
        </div>
        <h1 className="su-mt-[32px] sm:su-mt-[45px] xl:su-mt-[58px] su-font-serif">
          {title}
        </h1>
        <p className="su-font-serif su-intro-text su-text-[21px] sm:su-text-[28px] su-leading-[130%] su-m-0 su-mt-[32px]">
          {summary}
        </p>
      </div>
      <div className="swiper basic-story__header-slider su-overflow-visible su-mt-[32px] md:su-mt-[72px]">
        <figure className="basic-story__header-image su-flex su-flex-col su-gap-[6px] su-col-span-full su-relative su-translate-y-[-110px] sm:su-translate-y-[-130px] lg:su-translate-y-[-200px] xl:su-translate-y-[-220px] su-z-0 md:su-gap-[18px] lg:su-gap-[15px]">
          <div className="su-relative">
            <img
              src={media.featureImage.url}
              alt={media.featureImage.alt}
              className="su-relative su-w-full su-h-[300px] sm:su-h-[500px] lg:su-h-[764px] su-object-cover su-object-center"
            />
            <div className="su-absolute su-top-[-1%] dark:su-top-0 su-left-0 su-h-[101%] su-w-full su-bg-repeat su-bg-center su-bg-cover" />
          </div>
          <figcaption className="su-text-[14px] su-w-3/4 su-mx-auto su-text-center su-m-0 su-leading-[16.72px] md:su-text-[16px] md:su-leading-[19.11px]">
            {media.caption} | {media.credit}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
