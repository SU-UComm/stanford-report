export default async function resolveAssetUri({ctx, assetUri}) {
  // Resolve the data for the card
  const assetData = await ctx.resolveUri(assetUri);

  // Resolve the metadata fields
  const imageIds = card?.data?.metadata?.featuredImage;
  const imageUris = imageIds.map((imageId) => `matrix-asset://${this.API_IDENTIFIER}/${imageId}`);
  const imageData = await Promise.all(imageUris.map((uri) => this.ctx.resolveUri(uri)));

  // Assign the image data to
  assetData.data.metadata.featuredImage = imageData;

  return assetData;
}