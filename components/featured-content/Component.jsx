import React from "react";

// these are our specific templates for the component.
import Card from "../../packages/card/Card";
import Heading from "../../packages/headings/Heading";
import { FeaturedGrid, GridRow } from "../../packages/grids/Grids";

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
          <FeaturedGrid>
            <GridRow classes="md:su-basis-[58.333%] lg:su-basis-[64.5%] su-flex-grow">
              <Card
                key={data.response.resultPacket.results[0].rank}
                data={mapCardDataFromFunnelbackResults(
                  data.response.resultPacket.results[0]
                )}
              />
            </GridRow>

            <GridRow classes="su-relative su-flex su-flex-wrap md:su-items-center md:su-content-center su-gap-[80px] md:su-gap-[72px] lg:su-gap-[76px] md:su-basis-[39.5%] lg:su-basis-[30%] su-flex-grow before:su-w-full before:md:su-w-[1px] before:su-absolute before:su-bg-black-30 dark:before:su-bg-black before:su-h-[1px] before:md:su-h-full before:su-left-0 before:su-top-[-35px] before:md:su-top-0 before:md:su-left-[-36px] before:lg:su-left-[-80px]">
              <GridRow classes="su-relative su-w-full">
                <Card
                  key={data.response.resultPacket.results[1].rank}
                  data={mapCardDataFromFunnelbackResults(
                    data.response.resultPacket.results[1]
                  )}
                />
              </GridRow>
              <GridRow classes="su-relative su-w-full before:su-w-full before:su-absolute before:su-bg-black-30 dark:before:su-bg-black before:su-h-[1px] before:su-left-0 before:su-top-[-40px] md:before:su-top-[-36px] lg:before:su-top-[-38px]">
                <Card
                  key={data.response.resultPacket.results[2].rank}
                  data={mapCardDataFromFunnelbackResults(
                    data.response.resultPacket.results[2]
                  )}
                />
              </GridRow>
            </GridRow>
          </FeaturedGrid>
        )}
    </>
  );
}
