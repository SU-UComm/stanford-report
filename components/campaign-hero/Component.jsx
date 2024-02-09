import React from "react";
import { cnb } from "cnbuilder";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";

/**
 * Campaign Hero
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function CampaignHero({
  backgroundImage,
  title,
  intro,
  quote,
  name,
  extra,
  quoteLink,
}) {
  return (
    <Container width="full" paddingX={false}>
      <section className="su-h-screen su-relative">
        <div className="su-max-w-[1800px] su-grid su-grid-cols-12 su-grid-gap su-relative su-z-[2]">
          <div className="su-col-start-4 su-col-span-6 su-text-white su-text-center">
            <h1>{title}</h1>
            <p className="su-type-3 su-leading-[1.3]">{intro}</p>
          </div>
          {quote && (
            <div className="su-rs-pt-2 su-rs-px-5 su-rs-pb-6 su-col-start-3 su-col-span-8 su-text-white su-flex su-flex-col su-gap-2xl md:su-flex-row su-border-t su-border-black-30">
              <blockquote cite="" className="su-type-1">
                <p className="su-font-serif su-leading-display">“{quote}”</p>
                <footer className="su-font-bold">
                  {quoteLink ? (
                    <a href={quoteLink}>{name}</a>
                  ) : (
                    <span>{name}</span>
                  )}
                  {extra && `, ${extra}`}
                </footer>
              </blockquote>
              <img
                src="https://picsum.photos/seed/picsum/300/300"
                alt="quote placeholder for local dev"
                className="su-rounded-full su-block"
              />
            </div>
          )}
        </div>
        <img
          src="https://picsum.photos/seed/picsum/2000/1500"
          // src={bgImageData.url}
          className="su-absolute su-w-full su-h-full su-object-cover su-left-0 su-top-0 su-z-[0]"
          alt="placeholder for local dev"
        />
        <div
          className="su-absolute su-block su-w-full su-h-full su-top-0 su-bg-gradient-to-t su-from-black-true su-z-[1]"
          aria-hidden="true"
        />
      </section>
    </Container>
  );
}
