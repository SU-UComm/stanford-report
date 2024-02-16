async function resolveIDArray(assetIds, ctx, API_IDENTIFIER) {
  return Promise.all(
    assetIds.map((assetId) =>
      ctx.resolveUri(`matrix-asset://${API_IDENTIFIER}/${assetId}`)
    )
  ).catch((error) => {
    throw new Error(`There was an error resolving the assetIds: ${error}`);
  });
}

export default async function resolveImageUri({
  ctx,
  assetUri,
  API_IDENTIFIER,
}) {
  // Resolve the data for the card
  const assetData = await ctx.resolveUri(assetUri);

  console.log(assetData);

  // Define our promises array
  const promises = [];

  return assetData;
}
