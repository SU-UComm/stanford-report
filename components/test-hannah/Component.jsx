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

export default function TestHannah({
  image,
  quote,
  attribution,
  yearLabel,
  textPosition,
  imageUrl,
}) {
  return (
    <section
      className="su-relative su-bg-cover su-bg-no-repeat su-py-[100px] su-text-white before:su-bg-black-true before:su-w-full before:su-h-full before:su-top-0 before:su-left-0 before:su-absolute before:su-opacity-25 before:su-z-10"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <Container>
        <div
          className={[
            "su-relative su-z-20 md:su-max-w-[674px]",
            textPosition === "right" ? "su-ml-auto" : "su-ml-0",
          ].join(" ")}
        >
          <blockquote className="su-type-2 su-font-serif">
            {quote}
            <cite className="su-text-23 su-block su-font-sans su-mt-[28px]">
              <span className="su-block">{attribution}</span>
              <span className="su-block">{yearLabel}</span>
            </cite>
          </blockquote>
        </div>
      </Container>
    </section>
  );
}
