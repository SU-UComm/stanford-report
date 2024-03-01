import React from "react";
import { Container } from "../grids/Container";

export default function FullHero({ data }) {
  const { title, pubDateFormatted, media, summary } = data;

  return (
    <Container>
      <header className="featured-story__header-v2 su-relative su-flex su-flex-col su-items-start md:su-items-end su-pb-[121px]">
        <div className="su-relative su-w-full">
          <img
            className="su-w-full su-h-[254px] sm:su-h-[475px] lg:su-h-[765px] su-object-cover su-object-center"
            src={media.featureImage.url}
            alt={media.featureImage.alt}
          />
          <div className="su-bg-gradient-header-1 dark:su-bg-gradient-header-1-dark su-absolute su-w-full su-h-[101%] su--bottom-1 su-left-0" />
        </div>

        <div className="su-flex su-gap-x-42 su-px-30 md:su-px-0 su-flex-wrap md:su-flex-nowrap lg:su-gap-[114px] su-justify-end su-mx-auto su-mt-[96px] lg:su-mt-0">
          <div className="su-flex su-flex-col su-items-end su-gap-26 md:su-justify-center">
            <h1 className="su-text-right su-font-serif su-max-w-[808px] su-text-[50px] su-leading-[60px] md:su-text-[61px] md:su-leading-[73.2px] lg:su-text-[96px] lg:su-mt-[91px] lg:su-leading-[115.2px] su-ml-10">
              {title}
            </h1>
          </div>
          <div className="su-pl-48 sm:su-mr-100 su-mt-[53px] lg:su-mt-0 su-flex su-flex-col su-items-start su-justify-between su-relative">
            <div className="su-absolute su-bg-gradient-b su-h-full su-w-3 su-left-0 su-top-0" />
            <p className="su-m-0 su-font-serif su-text-20 su-leading-[23.88px] su-pb-80 md:su-text-21 md:su-leading-[27.35px] md:su-pb-72 lg:su-text-24 lg:su-leading-[31.26px] su-font-semibold su-w-full md:su-w-[228px] lg:su-w-[292px] lg:su-pb-[228px]">
              {summary}
            </p>
            <span className="su-w-auto su-text-16 su-leading-[19.1px] su-flex su-gap-7 md:su-basefont-23 md:su-text-21 md:su-leading-[26.25px]">
              <time className="su-m-0 su-mt-4 md:su-mt-0 md:su-mr-4 su-font-semibold">
                {pubDateFormatted}
              </time>
              {/* | {read time here} */}
            </span>
          </div>
        </div>
      </header>
    </Container>
  );
}
