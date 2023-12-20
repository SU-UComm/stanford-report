import basicAssetUri from "./basicAssetUri";

/**
 * Linked Heading Data formatter - Matrix
 *
 * @returns {object}
 */
export default async function linkedHeadingService(
  ctx,
  { title, ctaText, ctaUrl }
) {
  let resolvedUrl;

  // Resolve the CTA URL if one is supplied
  if (ctaUrl !== "") {
    const linkedPageData = await basicAssetUri(ctx, ctaUrl);
    resolvedUrl = linkedPageData.url;
  }

  return {
    title,
    ctaText,
    resolvedUrl,
  };
}
