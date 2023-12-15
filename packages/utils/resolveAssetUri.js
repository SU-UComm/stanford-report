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

  const taxonomyIds = assetData?.metadata?.srContentMainTopic;
  promises.push(await resolveIDArray(taxonomyIds, ctx, API_IDENTIFIER));

  // const taxonomyPageIds = taxonomyIds?.metadata?.landingPage;
  // promises.push(await resolveIDArray(taxonomyPageIds, ctx, API_IDENTIFIER));

  // Wait for our data to be returned
  const [imageData, contentTypeData, taxonomyData] = await Promise.all(
    promises
  );

  // Assign our data
  assetData.metadata.featuredImage = imageData;
  assetData.metadata.srContentType = contentTypeData;
  assetData.metadata.srContentMainTopic = taxonomyData;
  // assetData.metadata.taxonomyPageData = taxonomyPageData;

  return assetData;
}
