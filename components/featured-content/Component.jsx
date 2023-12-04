import React from "react";

// these are our specific templates for the component.
import Card from "../../packages/card/Card";
import { LinkedHeading } from "../../packages/headings/Heading";
<<<<<<< HEAD

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
=======
import { FeaturedGrid } from "../../packages/grids/Grids";
>>>>>>> develop

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
<<<<<<< HEAD
    <div className="su-w-full su-component-multicolumn">
      <LinkedHeading title={title} ctaText={ctaText} ctaUrl={ctaUrl} />

      {data &&
        data.response &&
        data.response.resultPacket &&
        data.response.resultPacket.results && (
          <div className="su-relative su-flex su-flex-wrap md:su-flex-nowrap su-flex-1 su-gap-[68px] md:su-gap-[72px] lg:su-gap-[102px] su-place-content-between">
                <Card
                    data={{
                        "title": "Seeing the oceans in a new light",
                        "description": "Halleh Balch, an experimental physicist in the Dionne lab at Stanford, has developed a thumbnail-sized optical sensor that can track the health of marine ecosystems in near-real time through quick detection of environmental DNA. It could be a critical tool for natural resource managers in the face of climate change impacts like coral bleaching, warming seas, and migration of species.",
                        "liveUrl": "#",
                        "imageUrl": "https://picsum.photos/500/330",
                        "imageAlt": "Lorem ipsum dolor sit amet",
                        "taxonomy": "Earth & Climate",
                        "taxonomyUrl": "#",
                        "type": "Article"
                    }}
                    cardType="vertical"
                    cardSize="featured"
                    showDescriptionOnMobile={ false }
                    hideImages={ false }
                />

                <Card
                    data={{
                        "title": "Jenny Martinez, Stanford's new provost, on work and whimsy",
                        "liveUrl": "#",
                        "imageUrl": "https://picsum.photos/500/330",
                        "imageAlt": "Lorem ipsum dolor sit amet",
                        "taxonomy": "Leadership & Governance",
                        "taxonomyUrl": "#",
                        "type": "Q & A"
                    }}
                    cardType="vertical"
                    cardSize="small"
                    showDescriptionOnMobile={ false }
                    hideImages={ true }
                />

                <Card
                    data={{
                        "title": "Meet the robot that can sort your random stuff",
                        "liveUrl": "#",
                        "imageUrl": "https://picsum.photos/500/330",
                        "imageAlt": "Lorem ipsum dolor sit amet",
                        "taxonomy": "Science & Engineering",
                        "taxonomyUrl": "#",
                        "type": "Article"
                    }}
                    cardType="vertical"
                    cardSize="small"
                    showDescriptionOnMobile={ false }
                    hideImages={ false }
                />
            </div>
        )}
    </div>
=======
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
>>>>>>> develop
  );
}

                //{
                    //data.response.resultPacket.results.map((result) => { 
                        //return (
                            //<Card
                                //key={result.rank}
                                //data={mapCardDataFromFunnelbackResults(result)}
                                //cardType="vertical"
                            ///>
                        //) 
                    //})
                //}
