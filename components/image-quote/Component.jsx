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
  const { image, imageCaption, imageCredit, quote, name, title } =
    displayConfiguration;

  return (
    <Container width="wide">
      <section className="story__quote su-col-span-full !su-my-[100px] md:!su-my-[171px] su-flex su-flex-col xl:su-flex-row sm:su-col-span-11 sm:su-col-start-2">
        <figure className="su-flex su-flex-col su-gap-[23px] su-w-5/6 sm:su-w-[483px] lg:su-w-[524px]">
          <img
            src={data.url}
            className="su-z-10 su-w-full su-h-auto su-object-center su-object-cover"
            alt=""
          />
          <figcaption className="dark:su-text-white">
            {imageCaption}|{imageCredit}
          </figcaption>
        </figure>

        <figure className="su-flex su-flex-col su-pt-[41px] xl:su-pt-[161px] xl:su-pl-[46px] su-clip-bottom su-gap-[18px] su-pr-[30px] su-relative before:su-absolute before:su-w-screen before:su-top-0 xl:before:su-top-[69px] before:su-z-0 before:su-translate-y-[-250px] xl:before:su-translate-y-0 before:su-right-0 before:su-h-[3px] su-bg-gradient-before after:su-absolute after:su-w-[3px] after:su-top-0 xl:after:su-top-[69px] after:su-translate-y-[-250px] xl:after:su-translate-y-0 after:su-right-0 after:su-h-screen su-bg-gradient-after">
          <blockquote className="story__quote-target su-pl-[50px] sm:su-pl-[40px] su-flex sm:su-w-[483px] su-m-0 su-items-start su-gap-[6px] su-text-black dark:su-text-white su-font-semibold su-text-[20px] sm:su-text-[25px] lg:su-text-[36px] font-serif-4 lg:su-max-w-[457px]">
            {quote}
          </blockquote>
          <figcaption className="su-relative su-text-black su-pl-[50px] sm:su-pl-[40px] su-basefont-21 su-mt-0 su-flex su-flex-col dark:su-text-white">
            <strong>{name}</strong> {title}
          </figcaption>
        </figure>
      </section>
    </Container>
  );
}
