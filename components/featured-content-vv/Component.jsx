import React from "react";

// these are our specific templates for the component.
import Card from "../../packages/card/Card";
import { LinkedHeading } from "../../packages/headings/Heading";
import { FeaturedGrid } from "../../packages/grids/Grids";
import { Container } from "../../packages/grids/Container";
import CardThumbnail from "../../packages/card/CardThumbnail";

/**
 * Featured content component
 *
 * @param {string} title The component title
 * @param {string} ctaText The cta text
 * @param {string} ctaUrl The cta url
 * @param {object} data JSON data for content
 * @returns {JSX.Element}
 * @constructor
 */

export default function FeaturedContentVV({
  contentConfiguration,
  displayConfiguration,
  data,
  headingData,
  headingConfiguration,
  imageData,
}) {
  const featuredCardData = data[0];
  if (
    contentConfiguration.featuredDescriptionOverride !== "" &&
    contentConfiguration.featuredDescriptionOverride !== null &&
    contentConfiguration.featuredDescriptionOverride !== undefined
  ) {
    featuredCardData.description =
      contentConfiguration.featuredDescriptionOverride;
  }

  const relatedCardData = data[1];

  return (
    <Container width="large" data-component="featured-content">
      {headingConfiguration.includeSectionHeading && (
        <LinkedHeading
          title={headingData.title}
          ctaText={headingData.ctaText}
          ctaLink={headingData.ctaLink}
          ctaNewWindow={headingData.ctaNewWindow}
        />
      )}
      <FeaturedGrid
        alignment={displayConfiguration.alignment}
        includeVerticalVideo
        items={[
          <Card
            data={featuredCardData}
            cardSize="featured"
            headingLvl={headingData.title ? 3 : 2}
          />,
          <CardThumbnail
            imageUrl={imageData?.url}
            alt={imageData?.alt}
            title={imageData?.alt}
            aspectRatio="vertical-video"
            videoUrl={contentConfiguration.youtubeId}
            size="vertical-video-featured"
            videoIconClasses="group-hocus:su-scale-110 su-transition-transform"
            rounded
          />,
          <Card
            data={relatedCardData}
            displayThumbnail={false}
            cardSize="small"
            headingLvl={headingData.title ? 3 : 2}
          />,
        ]}
      />
    </Container>
  );
}
