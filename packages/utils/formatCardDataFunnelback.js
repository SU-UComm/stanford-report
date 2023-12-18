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
    taxonomyContentMainTopicLandingPageUrl,
    imageAlt,
  },
  date,
  liveUrl,
}) {
  const imageUrl = image;
  const videoUrl = featuredVideo;

  const description = teaserPlain;

  const taxonomy = taxonomyContentMainTopicText;
  const taxonomyUrl = taxonomyContentMainTopicLandingPageUrl;
  const type = taxonomyContentTypeText ? taxonomyContentTypeText[0] : "";

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
