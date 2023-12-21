export default async function basicAssetUri(ctx, assetUri) {
  // Resolve the data for the card
  const assetData = await ctx.resolveUri(assetUri);
  return assetData;
}
