import React from "react";

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
  title,
  ctaText,
  ctaUrl,
  data,
  alignment,
}) {
  return (
    <>
      <LinkedHeading title={title} ctaText={ctaText} ctaUrl={ctaUrl} />

      <FeaturedGrid
        alignment={alignment}
        items={[
          <Card data={data[0]} />,
          <Card data={data[1]} />,
          <Card data={data[2]} />,
        ]}
      />
    </>
  );
}
