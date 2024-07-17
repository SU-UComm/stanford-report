import React, { useState, useEffect } from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { Container } from "../grids/Container";

function readingTime(text) {
  if (!text) return 0;

  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}

export default function FullHero({ data }) {
  const { title, pubDateFormatted, media, summary } = data;
  const titleSize =
    "su-leading-[119.4%] md:su-leading-[120%] su-text-[4.6rem] sm:su-text-[6.1rem] lg:su-text-[9.5rem]";

  // state
  const [readingTimeValue, setReadingTime] = useState(0);

  useEffect(() => {
    const content = document.querySelector(".su-page-content");

    if (content) {
      setReadingTime(() => readingTime(content.innerText));
    }
  });

  return (
    <Container width="wide">
      <header className="featured-story__header-v2 su-relative">
        <div className="su-relative su-w-screen su-left-[50%] su-translate-x-[-50%]">
          <img
            className="su-w-full su-max-w-none"
            src={media.featureImage.url}
            alt={media.featureImage.alt}
          />
          <div className="su-bg-gradient-to-t su-from-white su-via-[rgb(255_255_255/.5)_8%] dark:su-from-black-true dark:su-via-[rgb(0_0_0/.5)_8%] su-to-50% su-absolute su-w-full su-h-full su-bottom-0 su-left-0" />
        </div>

        {/* id="main-content" is here for skip link to move user past Feature story's large hero images */}
        <div
          id="main-content"
          className="su-relative su-z-10 su-grid su-grid-cols-6 md:su-items-center md:su-grid-cols-12 su-gap-y-0 su-grid-gap md:su-px-0 su-flex-wrap su-mx-auto su-pt-[11.4rem] -su-mt-[16.2rem]"
        >
          <div className="su-col-span-6 md:su-col-span-7 md:su-col-start-1 lg:su-col-span-8 lg:su-col-start-1 lg:su-pr-30">
            <XssSafeContent
              className={[
                "su-text-shadow-title su-shadow-white dark:su-shadow-black-true su-text-left su-w-full su-break-words su-my-0 md:su-rs-py-6 lg:su-rs-py-5 md:su-text-right su-font-serif",
                titleSize,
              ].join(" ")}
              content={title}
              elementType="h1"
            />
          </div>
          <div className="su-hidden md:su-block md:su-col-span-1 md:su-col-start-8 lg:su-col-start-9 lg:su-col-span-4 su-h-full lg:su-hidden">
            <div className="su-bg-gradient-light-red su-h-full su-w-3 su-left-0 su-top-0 su-mx-auto" />
          </div>
          <div className="su-relative su-mt-50 md:su-mt-0 su-col-span-6 su-pl-32 md:su-pl-0 md:su-col-span-4 md:su-col-start-9 su-self-stretch lg:su-pl-48 lg:su-translate-x-[1.5rem]">
            <div className="su-flex su-flex-col su-h-full">
              <div className="md:su-hidden su-absolute su-bg-gradient-light-red su-h-full su-w-3 su-left-0 su-top-0 lg:su-block" />
              <XssSafeContent
                className={[
                  "su-text-shadow-title su-shadow-white dark:su-shadow-black-true lg:su-max-w-[29.2rem] su-m-0 su-font-serif su-text-20 su-leading-[119.4%] su-mb-rs-5 md:su-text-21 md:su-leading-[130.245%] md:su-pb-72 lg:su-text-24 su-font-semibold",
                  "su-pb-80 md:su-pb-0",
                ].join(" ")}
                content={summary}
                elementType="p"
              />
              <span className="su-w-auto md:su-mt-auto su-text-16 su-leading-[19.1px] su-flex su-gap-[7px] md:su-basefont-23 md:su-text-21 md:su-leading-[26.25px]">
                <time className="su-m-0 md:su-mt-0 md:su-mr-[4px] su-font-semibold">
                  {pubDateFormatted}
                </time>
                |{` ${readingTimeValue} min read`}
              </span>
            </div>
          </div>
        </div>
      </header>
    </Container>
  );
}
