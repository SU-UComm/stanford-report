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
    image,
    taxonomyContentTypeText,
    taxonomyContentMainTopicText,
    featuredVideo,
  },
  date,
  liveUrl,
}) {
  const description = teaserPlain;

  const imageUrl = image;
  // const imageAlt = null; // need to map this

  const taxonomy = taxonomyContentMainTopicText;

  const taxonomyUrl = "#";
  const type = taxonomyContentTypeText[0];

  // video
  const videoUrl = featuredVideo;

  return {
    title,
    description,
    liveUrl,
    imageUrl,
    // imageAlt,
    taxonomy,
    taxonomyUrl,
    type,
    videoUrl,
    date,
  };
}
