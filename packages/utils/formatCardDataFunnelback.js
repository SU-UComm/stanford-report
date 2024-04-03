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
    assetTypeCode,
    teaserPlain,
    summary,
    image,
    taxonomyContentTypeText,
    contentTopic,
    contentSubtopic,
    taxonomyContentMainTopicText,
    contentCategory,
    featuredVideo,
    taxonomyContentMainTopicLandingPageUrl,
    taxonomyFeaturedUnitLandingPageUrl,
    taxonomyFeaturedUnitText,
    imageAlt,
    authorName,
    authorImage,
    author,
    isTeaser,
    storySource,
    canonical,
    c,
    videoCategory,
    videoId,
  },
  date,
  liveUrl,
}) {
  const authorDisplayName = authorName !== undefined ? authorName : author;
  const authorAvatar = authorImage !== "" ? authorImage : undefined;

  const imageUrl = image;
  const videoUrl = featuredVideo || videoId;

  const description = teaserPlain || summary || (c instanceof Array ? c[0] : c);

  // taxonomy
  let taxonomy = taxonomyContentMainTopicText;

  if (!taxonomy && contentTopic) {
    taxonomy = contentTopic instanceof Array ? contentTopic[0] : contentTopic;
  }

  if (!taxonomy && contentSubtopic) {
    taxonomy =
      contentSubtopic instanceof Array ? contentSubtopic[0] : contentSubtopic;
  }

  const taxonomyUrl = taxonomyContentMainTopicLandingPageUrl;

  // type
  let type = taxonomyContentTypeText ? taxonomyContentTypeText[0] : "";

  if (!type && contentCategory) {
    type =
      contentCategory instanceof Array ? contentCategory[0] : contentCategory;
  } else if (!type && videoCategory) {
    type = "Video";
  }

  if (canonical && assetTypeCode?.[0] === "link") {
    liveUrl = canonical;
  }

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
    authorDisplayName,
    authorAvatar,
    taxonomyFeaturedUnitLandingPageUrl,
    taxonomyFeaturedUnitText,
    isTeaser,
    storySource,
  };
}
