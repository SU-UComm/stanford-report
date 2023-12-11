import React from "react";

// these are our specific templates for the component.
import Card from "../../packages/card/Card";
import { LinkedHeading } from "../../packages/headings/Heading";
import { FeaturedGrid } from "../../packages/grids/Grids";
import { Avatar, PullQuote } from "../../packages/quotes/Quotes";

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
  title,
  ctaText,
  ctaUrl,
  data,
  alignment,
  displayThumbnails,
  displayDescriptions,
  featuredDescription,
}) {
  const featuredCardData = data[0];
  if (featuredDescription !== "" && featuredDescription !== null) {
    featuredCardData.description = featuredDescription;
  }

  return (
    <>
      <LinkedHeading title={title} ctaText={ctaText} ctaUrl={ctaUrl} />

      <FeaturedGrid
        alignment={alignment}
        items={[
          <Card data={featuredCardData} cardSize="featured" />,
          <Card
            data={data[1]}
            displayThumbnail={displayThumbnails}
            displayDescription={displayDescriptions}
            cardSize="small"
          />,
          <Card
            data={data[2]}
            displayThumbnail={displayThumbnails}
            displayDescription={displayDescriptions}
            cardSize="small"
          />,
        ]}
      />
    </>
  );
}
