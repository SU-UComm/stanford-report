import basicAssetUri from "./basicAssetUri";

/**
 * Linked Heading Data formatter - Matrix
 *
 * @returns {object}
 */
export default async function linkedHeadingService(
  ctx,
  { title, ctaText, ctaUrl, ctaManualUrl, ctaNewWindow }
) {
  let resolvedUrl = "";

  // Resolve the CTA URL if one is supplied
  if (ctaUrl !== undefined && ctaUrl !== "" && ctaUrl !== null) {
    const linkedPageData = await basicAssetUri(ctx, ctaUrl);
    resolvedUrl = linkedPageData.url;
  }

  let ctaLink = null;

  if (resolvedUrl !== "") {
    ctaLink = resolvedUrl;
  } else {
    ctaLink = ctaManualUrl;
  }

  return {
    title,
    ctaText,
    ctaLink,
    ctaNewWindow,
  };
}
