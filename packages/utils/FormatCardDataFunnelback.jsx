import React from "react";

export default function FormatCardDataFunnelback({
  title,
  listMetadata,
  liveUrl,
}) {
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
}
