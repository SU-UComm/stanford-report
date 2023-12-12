import React from "react";

// these are our specific templates for the component.
import Card from "../../packages/card/Card";
import { LinkedHeading } from "../../packages/headings/Heading";
import { MultiColumnGrid } from "../../packages/grids/Grids";
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

export default function MulticolumnListing({
  title,
  ctaText,
  ctaUrl,
  data,
  alignment,
  displayThumbnails,
  displayDescriptions,
  featuredDescription,
  numberOfCards,
}) {
  const featuredCardData = data[0];

  const cards = [];

  data.forEach((cardData, i) => {
    if (i <= numberOfCards - 1) {
      cards.push(
        <Card
          data={cardData}
          displayDescription={displayDescriptions}
          displayThumbnail={displayThumbnails}
          cardSize="small"
        />
      );
    }
  });

  return (
    <>
      <LinkedHeading title={title} ctaText={ctaText} ctaUrl={ctaUrl} />

      <MultiColumnGrid alignment={alignment} items={cards} />
    </>
  );
}
