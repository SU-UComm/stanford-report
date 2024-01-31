import React from "react";

// import specific templates for the component
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { Container } from "../../packages/grids/Container";
import { Carousel } from "../../packages/carousels/Carousel";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function ContentCarousel({ title, slides }) {
  const cards = [];

  slides.forEach((slide) => {
    cards.push(
      <XssSafeContent
        data-test="content-carousel-content"
        className={[
          "su-wysiwyg-content su-w-full su-mt-[38px]",
          "[&>*]:su-mb-[6px] [&>*]:su-text-[16px] [&>*]:su-leading-[125%] [&>*]:md:su-text-[19px] [&>*]:lg:su-text-[19px] [&>*:last-child]:su-mb-0 [&>*]:su-card-paragraph",
        ].join(" ")}
        content={slide.content}
      />
    );
  });

  return (
    <Container>
      <div className="su-bg-fog-light dark:su-bg-black su-p-[20px] md:su-pt-[36px] md:su-px-[36px] md:su-pb-[26px]">
        <div className="su-relative su-overflow-hidden">
          <h2 className="su-relative su-text-[23px] su-leading-[119.415%] su-z-20 su-font-black su-mb-0 su-inline su-bg-fog-light dark:su-bg-black su-pr-[10px] su-m-0">
            {title}
          </h2>
          <span className="su-hidden md:su-block su-w-full su-bg-black-20 su-h-[1px] su-absolute su-bottom-[4px]" />
        </div>
        <Carousel variant="content" slides={cards} />
      </div>
    </Container>
  );
}
