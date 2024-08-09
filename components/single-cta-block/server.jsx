import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  const { ctx } = info;
  let imageData = null;
  if (args?.image) {
    imageData = await basicAssetUri(ctx, args.image);
  }

  let linkUrl = null;
  if (args?.ctaConfiguration?.internalUrl) {
    linkUrl = await basicAssetUri(ctx, args?.ctaConfiguration?.internalUrl);
  }
  const internalLinkUrl = linkUrl?.url;

  const renderProps = {
    ...args,
    imageData,
    internalLinkUrl,
  };

  return renderComponent({
    Component,
    componentName: "single-cta-block",
    args: renderProps,
  });
};
