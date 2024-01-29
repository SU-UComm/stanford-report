async function resolveIDArray(assetIds, ctx, API_IDENTIFIER) {
  return Promise.all(
    assetIds.map((assetId) =>
      ctx.resolveUri(`matrix-asset://${API_IDENTIFIER}/${assetId}`)
    )
  ).catch((error) => {
    throw new Error(`There was an error resolving the assetIds: ${error}`);
  });
}

export default async function resolveAssetUri({
  ctx,
  assetUri,
  API_IDENTIFIER,
}) {
  // Resolve the data for the card
  const assetData = await ctx.resolveUri(assetUri);

  // Define our promises array
  const promises = [];

  // Resolve the metadata fields
  const imageIds = assetData?.metadata?.featuredImage;
  promises.push(resolveIDArray(imageIds, ctx, API_IDENTIFIER));

  const contentTypeIds = assetData?.metadata?.srContentType;
  promises.push(await resolveIDArray(contentTypeIds, ctx, API_IDENTIFIER));

  const contributorsAuthors = assetData?.metadata?.contributorsAuthors;
  promises.push(await resolveIDArray(contributorsAuthors, ctx, API_IDENTIFIER));

  const taxonomyIds = assetData?.metadata?.srContentMainTopic;
  const taxonomies = await resolveIDArray(taxonomyIds, ctx, API_IDENTIFIER);

  const taxonomyPageIds = taxonomies.at(0)?.metadata?.landingPage;
  const topicpages =
    taxonomyPageIds !== undefined
      ? await resolveIDArray(taxonomyPageIds, ctx, API_IDENTIFIER)
      : false;

  // console.log(JSON.stringify(promises));

  // Wait for our data to be returned
  const [imageData, contentTypeData, authors] = await Promise.all(promises);

  // Assign our data
  assetData.metadata.featuredImage = imageData;
  assetData.metadata.srContentType = contentTypeData;
  assetData.metadata.srContentMainTopic = taxonomies;
  assetData.metadata.taxonomyPageData = topicpages;
  assetData.metadata.contributorsAuthors = authors;

  return assetData;
}
