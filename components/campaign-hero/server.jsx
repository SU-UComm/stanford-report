import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  const { ctx } = info;
  let bkgImageData = null;
  if (args?.bkgConfig?.bkgImage) {
    bkgImageData = await basicAssetUri(ctx, args.bkgConfig.bkgImage);
  }

  let quoteImageData = null;
  if (args?.quoteConfig?.image) {
    quoteImageData = await basicAssetUri(ctx, args.quoteConfig.image);
  }

  let quoteLinkUrl = null;
  if (args?.quoteConfig?.quoteInternalUrl) {
    quoteLinkUrl = await basicAssetUri(ctx, args.quoteConfig.quoteInternalUrl);
  }
  const quoteInternalLinkUrl = quoteLinkUrl?.url;

  const renderProps = {
    ...args,
    bkgImageData,
    quoteImageData,
    quoteInternalLinkUrl,
  };

  return renderComponent({
    Component,
    componentName: "campaign-hero",
    args: renderProps,
  });
};
