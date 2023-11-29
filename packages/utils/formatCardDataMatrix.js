/**
 * Card Data formatter - Matrix
 *
 * @param {object} attributes Matrix asset attributes object
 * @param {object} metadata Matrix asset metadata object
 * @param {string} url Matrix asset url
 * @param {object} thumbnail Matrix asset thumbnail object
 * @returns {object}
 */

export default function formatCardDataMatrix({
  attributes,
  metadata,
  url,
  thumbnail,
}) {
  const title = attributes.short_name;
  const description = metadata.summary || metadata.teaser;
  const liveUrl = url;
  const imageUrl = (thumbnail && thumbnail.url) || null;
  const imageAlt = (thumbnail && thumbnail.alt) || null;
  const taxonomy = null;
  // card taxonomy url
  const taxonomyUrl = null; // need to map this
  // card type (Article, Q&A, Video etc)
  const type = (metadata.ogType && metadata.ogType[0]) || null; // need to map this
  // card video url, when available
  const videoUrl = null; // need to map this
  // card date, when available
  const date = (metadata.publishedDate && metadata.publishedDate[0]) || null; // need to map this

  return {
    title,
    description,
    liveUrl,
    imageUrl,
    imageAlt,
    taxonomy,
    taxonomyUrl,
    type,
    videoUrl,
    date,
  };
}
