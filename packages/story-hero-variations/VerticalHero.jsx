import React from "react";
import { Container } from "../grids/Container";

export default function VerticalHero({ data }) {
  const { title, pubDateFormatted, media, summary } = data;

  const titleWordsCount = title.split(" ").length;

  return (
    <Container>
      <div className="basic-story__header su-relative su-flex su-flex-col su-items-start md:su-items-end sm:su-pt-[280px] xl:su-pt-[400px]">
        <div className="su-relative su-flex su-justify-start su-flex-wrap su-flex-row-reverse md:su-flex-col su-max-w-[260px] sm:su-max-w-[460px] lg:su-max-w-[500px] xl:su-max-w-[766px] sm:su-absolute sm:su-left-20 md:su-left-50 su-top-0 su-z-10">
          <h1 className="su-mt-20 su-text-[46px] su-font-bold sm:su-text-80 lg:su-text-[128px] font-serif-4">
            {title}
          </h1>

          <div className="su-w-4 su-h-[901px] su-absolute su-left-0 su-top-[110%] su-bg-gradient-b sm:su-h-[1147px] lg:su-h-[1648px]" />
        </div>
        <div className="sm:su-overflow-visible su-pl-[62px] sm:su-pl-[126px] lg:su-pl-[227px] su-w-full">
          <div className="su-w-42 sm:su-w-[220px] lg:su-w-[300px] su-h-4 su-absolute su-right-20 md:su-right-50 xl:su-right-100 su-top-80 sm:su-top-200 su-bg-gradient" />
          <figure className="basic-story__header-image su-relative su-flex su-items-center su-flex-col su-gap-8 sm:su-gap-15">
            <img
              src={media.featureImage.url}
              alt={media.featureImage.alt}
              className={`su-relative su-w-full su-h-[437px] sm:su-h-[907px] lg:su-h-[1301px] su-object-cover su-object-center ${
                titleWordsCount >= 7 ? "su--mt-100" : ""
              }`}
            />

            <figcaption
              className={[
                "su-text-14 su-font-normal su-text-center su-leading-[16.72px] su-pb-49 su-m-0",
                "sm:su-w-3/4 sm:su-text-16 sm:su-leading-[19.11px] sm:su-pb-[121px]",
                "lg:su-pb-[184px]",
              ].join(" ")}
            >
              {media.caption} | {media.credit}
            </figcaption>
          </figure>

          <p
            className={[
              "su-w-full su-h-min su-mx-auto su-font-semibold su-text-center font-serif-4 su-text-21 su-leading-[28.79px] su-pb-50 su-m-0",
              "sm:su-text-[22.5px] sm:su-leading-[27px] sm:su-pb-72",
              "md:su-w-4/5",
              "lg:su-text-[32px] lg:su-leading-[41.68px] lg:su-pb-[76px]",
            ].join(" ")}
          >
            {summary}
          </p>

          <span
            className={[
              "su-w-full su-flex su-items-center su-justify-center su-text-18 su-leading-[27px] su-gap-7",
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
