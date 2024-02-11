import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  const { ctx } = info;
  const { backgroundImage, image } = args.contentConfiguration;

  let bgImageData = null;
  let imageData = null;

  if (backgroundImage) {
    bgImageData = await basicAssetUri(ctx, backgroundImage);
  }

  if (image) {
    imageData = await basicAssetUri(ctx, image);
  }

  const renderProps = {
    ...args,
    bgImageData,
    imageData,
  };

  return renderComponent({
    Component,
    componentName: "media-feature",
    args: renderProps,
  });
};
