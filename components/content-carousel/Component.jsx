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
          "su-wysiwyg-content su-w-full",
          "*:su-mb-6 *:su-text-16 *:su-leading-[125%] *:md:su-text-19 *:lg:su-text-19 [&>*:last-child]:su-mb-0 *:su-card-paragraph",
        ].join(" ")}
        content={slide.content}
      />
    );
  });

  return (
    <Container width="narrow">
      <div className="su-bg-fog-light dark:su-bg-black su-p-20 md:su-pt-36 md:su-px-36 md:su-pb-26">
        <div className="su-relative su-mb-38 su-overflow-hidden">
          {title && (
            <h3 className="su-relative su-text-23 su-leading-[119.415%] su-z-20 su-font-black su-mb-0 su-inline su-bg-fog-light dark:su-bg-black su-pr-10 su-m-0">
              {title}
            </h3>
          )}
          <span className="su-w-full su-bg-black-20 su-h-px su-absolute su-bottom-4" />
        </div>
        <Carousel variant="content" slides={cards} />
      </div>
    </Container>
  );
}
