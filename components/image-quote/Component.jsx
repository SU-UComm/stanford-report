import React from "react";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function ImageQuote({ displayConfiguration, data }) {
  const { imageCaption, imageCredit, quote, name, title } =
    displayConfiguration;

  const imageOrientation =
    data.attributes.height > data.attributes.width ? "portrait" : "landscape";

  const imageWidthMaps = new Map();
  imageWidthMaps.set("landscape", {
    image: "su-w-5/6 md:su-w-[75%] lg:su-w-[calc(50%-19px)]",
    quote: "lg:su-w-[62%] lg:su-ml-[-10%]",
    line: "before:su-w-[18%] md:before:su-w-[26%] lg:before:su-w-[52%] dark:before:su-rotate-180",
  });
  imageWidthMaps.set("portrait", {
    image: "su-w-5/6 md:su-w-[58.33%] lg:su-mr-[2%] lg:su-w-[38%]",
    quote: "lg:su-w-[70%] lg:su-ml-[-10%]",
    line: "before:su-w-[18%] md:before:su-w-[42%] lg:before:su-w-[62%] dark:before:su-rotate-180",
  });

  const widthClasses = imageWidthMaps.get(imageOrientation);
  const captionCredit =
    imageCaption && imageCredit
      ? `${imageCaption} | ${imageCredit}`
      : imageCaption || imageCredit;

  return (
    <Container width="large">
      <section
        className={[
          "story__quote su-relative",
          "su-flex su-flex-wrap lg:su-flex-nowrap lg:su-items-start",
          "before:su-absolute before:su-h-4 before:su-top-72 md:before:su-top-[30%] lg:before:su-top-72 before:su-z-0 before:su-right-0 su-bg-gradient-before-reverse",
          widthClasses.line,
          "after:su-absolute after:su-w-4 after:su-z-[-10] after:su-top-72 md:after:su-top-[30%] lg:after:su-top-72 after:su-right-0 su-bg-gradient-after-reverse after:su-h-[calc(100%-35%)] lg:after:su-h-[calc(100%-72px)] lg:after:su-hidden",
        ].join(" ")}
      >
        <figure
          className={["su-flex su-flex-col su-gap-8", widthClasses.image].join(
            " "
          )}
        >
          <img
            src={data.url}
            className="su-z-10 su-w-full su-h-auto su-object-center su-object-cover"
            alt={data.attributes.alt}
          />
          <figcaption className="dark:su-text-white su-text-14 su-font-normal su-mt-8 md:su-text-16">
            {captionCredit}
          </figcaption>
        </figure>

        <figure
          className={[
            "su-ml-0 md:su-w-[83.32%]]",
            "su-pl-32 su-pr-45 md:su-pr-0 md:su-pl-[51px] md:su-mx-[8.33%] lg:su-mx-0 lg:su-pl-[17.7%] lg:su-mt-72 su-flex su-flex-col su-pt-49 lg:su-pt-[91px] su-gap-6 md:su-gap-18 lg:su-gap-29 su-pr-0 lg:su-pr-72 su-relative",
            widthClasses.quote,
            "after:su-hidden lg:after:su-block after:su-absolute after:su-w-4 after:su--z-10 after:su-top-45 lg:after:su-top-0 after:su-right-0 lg:after:su-h-full su-bg-gradient-after-reverse",
          ].join(" ")}
        >
          <blockquote className="story__quote-target su-relative su-pl-0 su-flex su-m-0 su-items-start su-gap-6 su-text-black dark:su-text-white su-font-semibold su-text-24 md:su-text-[36px] font-serif-4 before:su-text-[59px] md:before:su-text-[73px] before:su-leading-[109.5px] lg:before:su-leading-[139.5px] lg:before:su-text-[93px] before:su-font-regular before:su--mt-30 md:before:su--mt-25 lg:before:su--mt-32 before:su-content-['“'] before:su-text-serif before:su-text-black before:su-absolute before:su-right-full before:su-mr-6 md:before:su-mr-13 dark:before:su-text-white">
            {`${quote}”`}
          </blockquote>

          <figcaption className="su-relative su-text-black su-basefont-21 su-mt-0 su-flex su-flex-col dark:su-text-white su-text-16 md:su-text-21 su-font-normal lg:su-flex su-gap-5 md:su-gap-6 after:su-h-[calc(100%+32px)] after:su-hidden lg:after:su-block after:su-w-5 after:su-bg-white dark:after:su-bg-black-true after:su-absolute after:su-left-full after:su--top-32 after:su-translate-x-72 after:su--ml-4">
            <strong>{name}</strong> <span>{title}</span>
          </figcaption>
        </figure>
      </section>
    </Container>
  );
}
