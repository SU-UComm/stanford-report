/**
 * Card Data formatter - Funnelback
 *
 * @param {string} title The component title
 * @param {object} listMetadata The Funnelback result listMetadata object
 * @param {string} liveUrl The Funnelback Live URL
 * @returns {object}
 */

export default function formatCardDataFunnelback({
  title,
  listMetadata: {
    teaserPlain,
    taxonomyContentCategoryText,
    image,
    taxonomyContentTypeText,
    taxonomyContentMainTopicText,
  },
  date,
  liveUrl,
}) {
  const description = teaserPlain;

  const imageUrl = image;
  // const imageAlt = null; // need to map this

  const taxonomy = taxonomyContentMainTopicText;

  const taxonomyUrl = "#"; // need to map this
  const type = taxonomyContentTypeText[0]; // need to map this
  // const videoUrl = null; // need to map this

  return {
    title,
    description,
    liveUrl,
    imageUrl,
    // imageAlt,
    taxonomy,
    taxonomyUrl,
    type,
    // videoUrl,
    date,
  };
}
