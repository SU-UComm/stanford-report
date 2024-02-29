import React from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { Container } from "../grids/Container";

export default function HorizontalHero({ data }) {
  const { title, pubDateFormatted, media, summary } = data;
  const titleWordsCount = title.split(" ").length;
  const titleSize =
    "su-leading-[119.4%] md:su-leading-[120%] su-text-[4.6rem] sm:su-text-[6.1rem] lg:su-text-[9.5rem]";

  return (
    <header className="basic-story__header su-relative su-w-full">
      <Container>
        <div className="su-relative">
          <div className="su-relative">
            <div
              className={[
                titleSize,
                "su-w-[2px] su-z-0 md:su-w-[3px] lg:su-w-[4px] su-absolute su-rotate-180 su-top-[1.75em] su-left-0 su-bg-gradient-light-red",
                "su-h-[calc(100%-2.25em)] md:su-top-auto md:su-hidden",
              ].join(" ")}
            />
            <div className="su-relative su-grid su-grid-cols-6 md:su-grid-cols-12 lg:su-grid-cols-10 su-grid-gap">
              <h1
                className={[
                  titleSize,
                  "su-relative md:su-max-h-[6em] su-z-10 su-text-right su-ml-auto su-mt-0 su-break-words su-font-bold font-serif-4 su-col-span-5 md:su-col-span-8 lg:su-col-span-7 su-col-start-2 md:su-col-start-5 lg:su-col-start-4",
                  titleWordsCount > 7 ? "su-mb-[-1.75em]" : "su-mb-[-.5em]",
                ].join(" ")}
              >
                {title}
              </h1>
              <div
                className={[
                  titleSize,
                  "su-absolute su-w-full su-grid su-grid-gap su-grid-cols-6 md:su-grid-cols-12 lg:su-grid-cols-10 su-z-0",
                  "su-top-[1.75em] md:su-top-auto md:su-bottom-[12.3rem] lg:su-bottom-[15.5rem]",
                ].join(" ")}
              >
                <div className="su-col-span-1 md:su-col-span-4 lg:su-col-span-3 su-h-[2px] md:su-h-[3px] lg:su-h-[4px] su-bg-gradient-light-red-h" />
              </div>
            </div>

            <div className="su-relative">
              <div
                className={[
                  titleSize,
                  "su-w-[2px] su-z-0 md:su-w-[3px] lg:su-w-[4px] su-absolute su-rotate-180 su-top-[1.75em] su-left-0 su-bg-gradient-light-red",
                  "su-hidden su-h-[calc(100%+12.3rem-.5em)] lg:su-h-[calc(100%+15.5rem-.5em)] md:su-top-auto md:su-bottom-[.5em] md:su-block",
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
          </div>

          <div className="su-relative">
            <div
              aria-hidden="true"
              className="su-w-[2px] md:su-w-[3px] lg:su-w-[4px] su-h-full su-absolute su-right-0 su-bg-gradient-light-red su-rotate-180 su-z-0"
            />
            <div className="su-grid su-grid-gap su-grid-cols-6 md:su-grid-cols-12 lg:su-grid-cols-10 su-px-[20px] md:su-px-0">
              <XssSafeContent
                className="su-font-semibold su-text-left su-col-span-6 md:su-col-span-10 md:su-col-start-2 lg:su-col-span-6 lg:su-col-start-2 font-serif-4 su-text-[21px] su-leading-[125.28%] md:su-text-[25px] lg:su-text-[32px] su-mb-0"
                content={summary}
                elementType="p"
              />
            </div>

            <div className="su-grid su-grid-gap su-grid-cols-6 md:su-grid-cols-12 lg:su-grid-cols-10 su-px-[20px] md:su-px-0">
              <span className="su-col-span-6 md:su-col-span-10 md:su-col-start-2 lg:su-col-span-8 lg:su-col-start-2 su-rs-mt-5 su-text-right su-text-1">
                <time className="su-m-0 md:su-mt-0 md:su-mr-[4px] su-font-semibold">
                  {pubDateFormatted}
                </time>
                {/* | {read time here} */}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
