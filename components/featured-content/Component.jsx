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
          <Card
            data={{
              title: "Seeing the oceans in a new light",
              description:
                "Halleh Balch, an experimental physicist in the Dionne lab at Stanford, has developed a thumbnail-sized optical sensor that can track the health of marine ecosystems in near-real time through quick detection of environmental DNA. It could be a critical tool for natural resource managers in the face of climate change impacts like coral bleaching, warming seas, and migration of species.",
              liveUrl: "#",
              imageUrl: "https://picsum.photos/500/330",
              imageAlt: "Lorem ipsum dolor sit amet",
              taxonomy: "Earth & Climate",
              taxonomyUrl: "#",
              type: "Article",
            }}
          />,
          <Card
            data={{
              title:
                "Jenny Martinez, Stanford’s new provost, on work and whimsy",
              liveUrl: "#",
              imageUrl: "https://picsum.photos/500/330",
              imageAlt: "Lorem ipsum dolor sit amet",
              taxonomy: "Leadership & Governance",
              taxonomyUrl: "#",
              type: "Q & A",
            }}
          />,
          <Card
            data={{
              title: "Meet the robot that can sort your random stuff",
              liveUrl: "#",
              imageUrl: "https://picsum.photos/500/330",
              imageAlt: "Lorem ipsum dolor sit amet",
              taxonomy: "Science & Engineering",
              taxonomyUrl: "#",
              type: "Article",
            }}
          />,
        ]}
      />
    </>
  );
}
