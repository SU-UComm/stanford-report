import React from "react";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";
import { LinkedHeading } from "../../packages/headings/Heading";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function jrBasicHeroExample({ title }) {
  return (
    <>
      <Container width="full">
        <div className="su-cc su-grid su-grid-cols-12 su-grid-gap su-rs-mb-5">
          <div className="su-col-start-2 su-col-end-12">
            <div className="su-flex su-rs-mb-4">
              <span className="su-flex-grow su-flex-shrink-0 su-flex-basis-full">
                <span className="su-font-semibold">February 28, 2024</span> | 5
                min read
              </span>
              <span className="su-font-semibold su-text-digital-red">
                Taxonomy Term
              </span>
            </div>
            <div>
              <h1>This is the article title at the top of the Basic Story</h1>
              <p className="su-font-serif su-type-1">
                The Give & Go program run by Stanford’s Residential & Dining
                Enterprises has helped to divert nearly 500 tons of material
                from landfills.
              </p>
            </div>
          </div>
          <figure className="su-col-start-1 su-col-end-13">
            <div className="su-max-h-[1040px] su-bg-black-10">
              {/* Landscape image example */}
              {/* <img
                src="https://loremflickr.com/900/600?lock=1"
                alt="placeholder"
                className="su-w-full "
              /> */}

              {/* Portrait image example */}
              <img
                src="https://loremflickr.com/600/900"
                alt="placeholder"
                className="su-max-w-full su-h-full su-m-auto"
              />
            </div>
            <figcaption>
              Caption text goes here lorem ipsum dolor sit amet | Credit goes
              here lorem ipsum
            </figcaption>
          </figure>
        </div>
      </Container>
      <Container width="full" paddingX={false}>
        <div className="su-cc su-grid su-grid-cols-12 su-grid-gap">
          <div className="su-col-start-3 su-col-end-9">
            <p>
              Part of Todd’s job is to oversee Give & Go, a year-round donation
              program. Sustainability is a core value in R&DE and the
              organization has been supporting reuse for more than two decades
              (and recycling for many more). The Give & Go program, formalized
              in 2013, expanded those efforts significantly. In 10 years, Give &
              Go, known among students for the images of alpacas that accompany
              its branding (“Alpaca my stuff …”), has diverted 456 tons of waste
              from landfills, including through innovative partnerships with
              local community organizations and the First-Generation and/or
              Low-Income (FLI) Student Success Center on campus. Give & Go is
              just one part of R&DE’s sustainability program, which in turn is
              part of Stanford’s broader mission to achieve zero waste by 2030.
              (Stanford has placed first in the National Wildlife Federation’s
              Campus Race to Zero competition in the per-capita recycling
              category for two years in a row.)
            </p>
          </div>
          <div className="su-col-start-9 su-col-end-12 su-bg-digital-red su-rs-p-0">
            <h2 className="su-type-1 su-text-white">Sidebar here</h2>
          </div>
        </div>
      </Container>
    </>
  );
}
