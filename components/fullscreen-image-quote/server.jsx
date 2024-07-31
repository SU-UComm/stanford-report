import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  const { ctx } = info;
  let imageData = null;
  if (args?.image) {
    imageData = await basicAssetUri(ctx, args.image);
  }

  let mobileImageData = null;
  if (args?.mobileImage) {
    mobileImageData = await basicAssetUri(ctx, args.mobileImage);
  }

  let linkUrl = null;
  if (args?.ctaDetails?.internalUrl) {
    linkUrl = await basicAssetUri(ctx, args?.ctaDetails?.internalUrl);
  }
  const internalLinkUrl = linkUrl?.url;

  const renderProps = {
    ...args,
    imageData,
    mobileImageData,
    internalLinkUrl,
  };

  return renderComponent({
    Component,
    componentName: "fullscreen-image-quote",
    args: renderProps,
  });
};
