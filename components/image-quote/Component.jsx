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

  return (
    <Container width="wide">
      <section className="story__quote su-col-span-full !su-my-[100px] md:!su-my-[171px] su-flex su-flex-col xl:su-flex-row sm:su-col-span-11 sm:su-col-start-2 su-justify-center">
        <figure className="su-flex su-flex-col su-gap-[23px] su-w-5/6 sm:su-w-[483px] lg:su-w-[524px]">
          <img
            // src={data.url}
            src="https://picsum.photos/500"
            className="su-z-10 su-w-full su-h-auto su-object-center su-object-cover"
            alt=""
          />
          <figcaption className="dark:su-text-white su-text-[14px] su-font-normal md:su-text-[16px]">
            {imageCaption}|{imageCredit}
          </figcaption>
        </figure>

        <figure className="su-flex su-flex-col su-pt-[41px] xl:su-pt-[161px] xl:su-pl-[46px] su-clip-bottom su-gap-[18px] su-pr-[30px] su-relative before:su-absolute before:su-w-screen before:su-top-0 xl:before:su-top-[69px] before:su-z-0 before:su-translate-y-[-250px] xl:before:su-translate-y-0 before:su-right-0 before:su-h-[3px] su-bg-gradient-before after:su-absolute after:su-w-[3px] after:su-top-0 xl:after:su-top-[69px] after:su-translate-y-[-250px] xl:after:su-translate-y-0 after:su-right-0 after:su-h-screen su-bg-gradient-after">
          <blockquote className="story__quote-target su-relative su-pl-[50px] sm:su-pl-[40px] su-flex su-m-0 su-items-start su-gap-[6px] su-text-black dark:su-text-white su-font-semibold su-font-semibold su-text-[24px] md:su-text-[36px] font-serif-4 lg:su-max-w-[457px] before:su-text-[73px] before:su-leading-[109.5px] lg:before:su-leading-[139.5px] lg:before:su-text-[93px] before:su-font-semibold before:su-mt-[-25px] lg:before:su-mt-[-38px] before:su-content-['“'] before:su-text-serif before:su-text-black dark:su-text-white before:su-absolute before:su-right-full lg:before:su-right-full before:su-mr-[6px] lg:before:su-mr-[13px] dark:before:su-text-white before:su-left-0 xl:before:su-left-[-18px]">
            {quote}
          </blockquote>
          <figcaption className="su-relative su-text-black su-pl-[50px] sm:su-pl-[40px] su-basefont-21 su-mt-0 su-flex su-flex-col dark:su-text-white su-text-[16px] md:su-text-[21px] su-font-normal">
            <strong>{name}</strong> {title}
          </figcaption>
        </figure>
      </section>
    </Container>
  );
}
