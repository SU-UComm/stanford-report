import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  // eslint-disable-next-line no-unused-vars
  const { ctx } = info;
  const { images } = args.contentConfiguration;
  const imageData = [];
  const imageCaptions = [];

  let data = null;

  if (images.length) {
    for (const image of images) {
      imageData.push(await basicAssetUri(ctx, image.imageAsset));
    }

    images.forEach((image) => {
      if (image.imageCaption) imageCaptions.push(image.imageCaption);
    });

    data = imageData;
  }

  const renderProps = {
    ...args,
    data,
    imageCaptions,
  };

  return renderComponent({
    Component,
    componentName: "multicolumn-image",
    args: renderProps,
  });
};
