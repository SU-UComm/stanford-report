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
  contentConfiguration: { source },
}) {
  const cards = [];

  /**
   * some data coming through might have empty values
   * in the case of "Select", in that case, filter those
   * out so the component doesn't get angry
   */
  data = data.filter(Boolean);

  data.forEach((cardData) => {
    if (source === "Search") {
      cards.push(
        <Card
          data={cardData}
          displayDescription={displayDescriptions}
          displayThumbnail={displayThumbnails}
          cardSize="medium"
        />
      );
    } else if (source === "Select") {
      cards.push(
        <Card
          data={cardData}
          displayDescription={displayDescriptions}
          displayThumbnail={displayThumbnails}
          cardSize="medium"
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
