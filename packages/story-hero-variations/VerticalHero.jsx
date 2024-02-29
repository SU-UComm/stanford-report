import React from "react";
import { Container } from "../grids/Container";

export default function VerticalHero({ data }) {
  const { title, pubDateFormatted, media, summary } = data;

  const titleWordsCount = title.split(" ").length;

  return (
    <Container>
      <div className="basic-story__header su-relative su-flex su-flex-col su-items-start md:su-items-end">
        <div className="su-relative su-w-full su-z-10">
          <h1
            className={[
              "su-mt-0 su-break-words su-font-bold su-leading-[119.4%] md:su-leading-leading su-text-[4.6rem] sm:su-text-[6.1rem] lg:su-text-[9.6rem] font-serif-4 su-w-[83.333%] md:su-w-[66.666%] lg:su-w-[70%] su-pr-20",
              titleWordsCount > 5 ? "su-mb-[-1.75em]" : "su-mb-[-.5em]",
            ].join(" ")}
          >
            {title}
          </h1>
        </div>
        <div className="sm:su-overflow-visible su-relative su-pl-[calc(16.666%+10px)] lg:su-pl-[20%] su-w-full">
          <div
            aria-hidden="true"
            className="su-mt-[-63px] sm:su-mt-[-85px] lg:su-mt-[-131px] su-w-[16.66%] md:su-w-1/3 lg:su-w-[30%] su-h-2 md:su-h-3 su-absolute su-right-0 su-top-0 su-bg-gradient"
          />
          <div
            aria-hidden="true"
            className={[
              "su-leading-[119.4%] md:su-leading-display su-text-[4.6rem] sm:su-text-[6.1rem] lg:su-text-[9.6rem]",
              "su-w-[2px] md:su-w-[3px] su-absolute su-left-0 su-bottom-0 su-bg-gradient-b",
              titleWordsCount > 5
                ? "su-h-[calc(100%-2.25em)]"
                : "su-h-[calc(100%-1.25em)]",
            ].join(" ")}
          />
          <figure className="basic-story__header-image su-relative su-flex su-items-center su-flex-col su-gap-8 sm:su-gap-15 su-pb-11 md:su-pb-13 su-rs-mb-5 md:su-rs-mb-7 xl:su-rs-mb-9">
            <img
              src={media.featureImage.url}
              alt={media.featureImage.alt}
              className="su-relative su-w-full su-block"
            />

            {(media.caption || media.credit) && (
              <figcaption
                className={[
                  "su-text-14 md:su-text-16 su-text-center su-m-0",
                  "sm:su-w-3/4",
                ].join(" ")}
              >
                {media.caption} {media.caption && media.credit && ` | `}
                {media.credit}
              </figcaption>
            )}
          </figure>

          <p
            className={[
              "su-w-full su-h-min su-mx-auto su-font-semibold su-text-center font-serif-4 su-text-21 su-leading-[28.79px] su-m-0",
              "sm:su-text-[22.5px] sm:su-leading-[27px]",
              "md:su-w-4/5",
              "lg:su-text-[32px] lg:su-leading-[41.68px]",
            ].join(" ")}
          >
            {summary}
          </p>

          <span
            className={[
              "su-w-full su-flex su-items-center su-justify-center su-text-18 su-leading-[27px] su-gap-7 su-rs-mt-5 md:su-rs-mt-7 ",
              "sm:su-text-23 sm:su-leading-[28.75px]",
              "md:su-basefont-23 md:su-flex-row",
            ].join(" ")}
          >
            <time className="su-m-0 su-font-semibold">{pubDateFormatted}</time>
            {/* | {time to read here} */}
          </span>
        </div>
      </div>
    </Container>
  );
}
