import React, { useState } from "react";

// these are our specific templates for the component.
import Card from "../../packages/card/Card";
import { LinkedHeading } from "../../packages/headings/Heading";
import { FeaturedGrid } from "../../packages/grids/Grids";

/**
 * Featured content component
 *
 * @param {string} title The component title
 * @param {string} ctaText The cta text
 * @param {string} ctaUrl The cta url
 * @param {object} data JSON data for content
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function FeaturedContent({
  headingConfiguration,
  contentConfiguration,
  displayConfiguration,
  data,
}) {
  const [first, setfirst] = useState(null);
  const featuredCardData = data[0];
  if (
    contentConfiguration.featuredDescription !== "" &&
    contentConfiguration.featuredDescription !== null &&
    contentConfiguration.featuredDescription !== undefined
  ) {
    featuredCardData.description = contentConfiguration.featuredDescription;
  }

  return (
    <>
      <LinkedHeading
        title={headingConfiguration.title}
        ctaText={headingConfiguration.ctaText}
        ctaUrl={headingConfiguration.ctaUrl}
      />

      <FeaturedGrid
        alignment={displayConfiguration.alignment}
        items={[
          <Card data={featuredCardData} cardSize="featured" />,
          <Card
            data={data[1]}
            displayThumbnail={displayConfiguration.displayThumbnails}
            displayDescription={displayConfiguration.displayDescriptions}
            cardSize="small"
          />,
          <Card
            data={data[2]}
            displayThumbnail={displayConfiguration.displayThumbnails}
            displayDescription={displayConfiguration.displayDescriptions}
            cardSize="small"
          />,
        ]}
      />
    </>
  );
}
