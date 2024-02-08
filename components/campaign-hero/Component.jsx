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

export default function Base({ title, intro }) {
  return (
    <Container width="full" paddingX={false}>
    <section className="su-h-screen su-relative">
      <div className="su-max-w-[1800px] su-grid su-grid-cols-12 su-grid-gap su-relative su-z-[2]">
        <div className="su-col-start-4 su-col-span-6 su-text-white">
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
        <div>
          <blockquote>
            
          </blockquote>
        </div>
      </div>
      <img
        src="https://picsum.photos/seed/picsum/2000/1500"
        // src={bgImageData.url}
        className="su-absolute su-w-full su-h-full su-object-cover su-left-0 su-top-0 su-z-[1]"
      />
      </section>
    </Container>
  );
}
