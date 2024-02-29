import React from "react";

// import specific templates for the component
import Card from "../../packages/card/Card";
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

export default function SingleFeaturedContent({
  contentConfiguration,
  displayConfiguration,
  data,
  headingData,
}) {
  if (
    contentConfiguration.featuredDescription !== "" &&
    contentConfiguration.featuredDescription !== null &&
    contentConfiguration.featuredDescription !== undefined
  ) {
    featuredCardData.description = contentConfiguration.featuredDescription;
  }

  return (
    <Container>
      <LinkedHeading
        title={headingData.title}
        ctaText={headingData.ctaText}
        ctaLink={headingData.ctaLink}
        ctaNewWindow={headingData.ctaNewWindow}
      />

      <div className="su-single-featured-content md:su-px-[64px] lg:su-px-[122.5px]">
        <Card data={data[0]} cardSize="featured" />
      </div>
    </Container>
  );
}
