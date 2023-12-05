/**
 * Utility to check for the presence of data.
 *
 * @param {array} arr A matrix metadata field array. Eg: "featuredVideo": [],
 * @returns {string|null}
 */
function dataChecker(arr) {
  return typeof arr !== "undefined" && arr.length > 0 && arr[0] !== ""
    ? arr[0]
    : null;
}

/**
 * Card Data formatter - Matrix
 *
 * @param {object} attributes Matrix asset attributes object
 * @param {object} metadata Matrix asset metadata object
 * @param {string} url Matrix asset url
 * @param {object} thumbnail Matrix asset thumbnail object
 * @returns {object}
 */
export default function formatCardDataMatrix({ attributes, metadata, url }) {
  const title = attributes.name;
  const liveUrl = url;
  const description = dataChecker(metadata.teaser);
  const imageUrl = dataChecker(metadata.csFeaturedImageUrl);
  const imageAlt = dataChecker(metadata.csFeaturedImageAlt);
  const taxonomy = dataChecker(metadata.csTaxonomyName);
  const taxonomyUrl = dataChecker(metadata.csTaxonomyUrl);
  const type = dataChecker(metadata.csContentTypeName);
  const videoUrl = dataChecker(metadata.featuredVideo);
  const date = dataChecker(metadata.publishedDate);

  return {
    title,
    liveUrl,
    description,
    imageUrl,
    imageAlt,
    taxonomy,
    taxonomyUrl,
    type,
    videoUrl,
    date,
  };
}
