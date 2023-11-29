import React from "react";

// these are our specific templates for the component.
import Card from "../../packages/card/Card";
import Heading from "../../packages/headings/Heading";
import { FeaturedGrid } from "../../packages/grids/Grids";

const mapCardDataFromFunnelbackResults = ({ title, listMetadata, liveUrl }) => {
  const description =
    (listMetadata && listMetadata.description && listMetadata.description[0]) ||
    null;
  const imageUrl =
    (listMetadata &&
      listMetadata.relatedImageURL &&
      listMetadata.relatedImageURL[0]) ||
    null;
  const imageAlt = null; // need to map this
  const taxonomy =
    (listMetadata &&
      listMetadata.taxonomyTopicsText &&
      listMetadata.taxonomyTopicsText[0]) ||
    null;
  const taxonomyUrl = null; // need to map this
  const type = null; // need to map this

  return {
    title,
    description,
    liveUrl,
    imageUrl,
    imageAlt,
    taxonomy,
    taxonomyUrl,
    type,
  };
};

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
      <Heading title={title} ctaText={ctaText} ctaUrl={ctaUrl} />

      {data &&
        data.response &&
        data.response.resultPacket &&
        data.response.resultPacket.results && (
          <FeaturedGrid
            alignment={alignment}
            items={[
              <Card
                key={data.response.resultPacket.results[0].rank}
                data={mapCardDataFromFunnelbackResults(
                  data.response.resultPacket.results[0]
                )}
              />,
              <Card
                key={data.response.resultPacket.results[1].rank}
                data={mapCardDataFromFunnelbackResults(
                  data.response.resultPacket.results[1]
                )}
              />,
              <Card
                key={data.response.resultPacket.results[2].rank}
                data={mapCardDataFromFunnelbackResults(
                  data.response.resultPacket.results[2]
                )}
              />,
            ]}
          />
        )}
    </>
  );
}
