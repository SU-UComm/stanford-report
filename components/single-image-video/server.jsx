import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  const { ctx } = info;
  const hasImage = args.image;
  let imageData = null;

  if (hasImage) {
    imageData = await basicAssetUri(ctx, hasImage);
  }

  const renderProps = {
    ...args,
    imageData,
  };

  return renderComponent({
    Component,
    componentName: "single-image-video",
    args: renderProps,
  });
};
