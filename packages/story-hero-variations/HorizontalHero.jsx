import React from "react";
import { Container } from "../grids/Container";

export default function HorizontalHero({ data }) {
  const { title, pubDateFormatted, media, summary } = data;
  const titleWordsCount = title.split(" ").length;

  return (
    <header className="basic-story__header su-relative su-w-full">
      <Container>
        <div className="su-relative">
          <h1
            className={[
              "su-relative su-z-10 su-text-right su-ml-auto su-mt-0 su-break-words su-font-bold su-leading-[119.4%] md:su-leading-[120%] su-text-[4.6rem] sm:su-text-[6.1rem] lg:su-text-[9.6rem] font-serif-4 su-w-[83.333%] md:su-w-[66.666%] lg:su-w-[70%]",
              titleWordsCount > 5 ? "su-mb-[-1.75em]" : "su-mb-[-.5em]",
            ].join(" ")}
          >
            {title}
          </h1>

          <div className="su-relative">
            <div
              className={[
                "su-w-[10%] sm:su-w-[25%] su-h-[2px] md:su-h-[3px] lg:su-h-[4px] su-absolute su-bg-gradient-light-red-h su-z-0 su-leading-[119.4%] md:su-leading-[120%] su-text-[4.6rem] sm:su-text-[6.1rem] lg:su-text-[9.6rem]",
                titleWordsCount > 5
                  ? "su-top-[-2em] lg:su-top-[-1.75em]"
                  : "su-top-[-.5em]",
              ].join(" ")}
            />
            <div
              className={[
                "su-w-[2px] su-z-10 md:su-w-[3px] lg:su-w-[4px] su-absolute su-rotate-180 su-left-0 su-bg-gradient-light-red su-leading-[119.4%] md:su-leading-[120%] su-text-[4.6rem] sm:su-text-[6.1rem] lg:su-text-[9.6rem]",
                titleWordsCount > 5
                  ? "su-h-[calc(100%+1.5em)] lg:su-h-[calc(100%+1.25em)] su-bottom-[.5em]"
                  : "su-h-[calc(100%+.25em)] su-bottom-[.5em]",
              ].join(" ")}
            />
            <figure className="basic-story__header-image su-gap-[6px] su-col-span-full su-z-0 md:su-gap-[18px] lg:su-gap-[15px]">
              <div className="su-relative su-w-[100vw] su-relative su-left-[50%] su-translate-x-[-50%]">
                <img
                  src={media.featureImage.url}
                  alt={media.featureImage.alt}
                  className="su-relative su-w-full su-max-w-none"
                />
              </div>
              {(media.caption || media.credit) && (
                <div className="su-rs-pb-5 su-relative">
                  <div
                    aria-hidden="true"
                    className="su-w-[2px] md:su-w-[3px] lg:su-w-[4px] su-h-full su-absolute su-right-0 su-bg-digital-red-dark su-dark:su-bg-olive-green su-z-0"
                  />
                  <figcaption className="su-pb-[1.1rem] md:su-pb-[1.3rem] su-pt-[.9rem] su-mt-0 su-mb-0 su-w-[calc(100%-40px)] md:su-w-[83.333%] lg:su-w-[50%] lg:su-max-w-[633px] su-mx-auto su-text-center su-text-[1.4rem] md:su-text-[1.6rem]">
                    {media.caption} {media.caption && media.credit && ` | `}
                    {media.credit}
                  </figcaption>
                </div>
              )}
            </figure>
          </div>

          <div className="su-relative">
            <div
              aria-hidden="true"
              className="su-w-[2px] md:su-w-[3px] lg:su-w-[4px] su-h-full su-absolute su-right-0 su-bg-gradient-light-red su-rotate-180 su-z-0"
            />
            <div className="su-px-[20px] su-w-full md:su-px-0 md:su-ml-[8.33%] md:su-w-[83.333%] lg:su-ml-[10%] lg:su-w-[60%] lg:su-max-w-[63.2rem]">
              <p className="su-font-semibold su-text-left font-serif-4 su-text-[21px] su-leading-[125.28%] md:su-text-[25px] lg:su-text-[32px] su-mb-0">
                {summary}
              </p>
            </div>

            <span className="su-w-full su-pr-[20px] md:su-pr-[8.333%] lg:su-pr-[10%] su-rs-mt-5 su-flex su-items-start su-flex-row md:su-flex-row su-justify-end su-text-[16px] su-leading-[19.1px] md:su-text-[23px] md:su-leading-[28.75px] md:su-basefont-23">
              <time className="su-m-0 md:su-mt-0 md:su-mr-[4px] su-font-semibold">
                {pubDateFormatted}
              </time>
              {/* | {read time here} */}
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
}
