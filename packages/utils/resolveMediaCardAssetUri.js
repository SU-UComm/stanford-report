import basicAssetUri from "./basicAssetUri";

export default async function resolveMediaCardAssetUri({ ctx, cardData }) {
  const newData = cardData;

  // Define our promises array
  const promises = [];

  // Resolve the image
  promises.push(await basicAssetUri(ctx, cardData.image));
  promises.push(await basicAssetUri(ctx, cardData.linkUrl));

  // Wait for our data to be returned
  const [imageData, linkUrlData] = await Promise.all(promises);

  // Assign our data
  newData.image = imageData;
  newData.linkUrl = linkUrlData;

  return newData;
}
