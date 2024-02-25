import basicAssetUri from "./basicAssetUri";

/**
 * Linked Heading Data formatter - Matrix
 *
 * @returns {object}
 */
export default async function linkedHeadingService(
  ctx,
  { title, ctaSource, ctaText, ctaUrl, ctaAsset, ctaNewWindow }
) {
  let resolvedUrl;

  // Resolve the CTA URL if one is supplied
  if (ctaAsset !== undefined && ctaAsset !== "" && ctaAsset !== null) {
    const linkedPageData = await basicAssetUri(ctx, ctaAsset);
    resolvedUrl = linkedPageData.url;
  }

  let ctaLink = null;

  if (ctaSource === "Matrix Asset") {
    ctaLink = resolvedUrl;
  } else {
    ctaLink = ctaUrl;
  }

  return {
    title,
    ctaSource,
    ctaText,
    ctaLink,
    ctaNewWindow,
  };
}
