import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  const { ctx } = info;
  const { image } = args.imageConfiguration;
  const { internalUrl } = args.buttonConfiguration;

  let linkUrl = null;
  if (internalUrl) {
    linkUrl = await basicAssetUri(ctx, internalUrl);
  }
  const internalLinkUrl = linkUrl?.url;

  let imageData = null;

  if (image) {
    imageData = await basicAssetUri(ctx, image);
  }

  const renderProps = {
    ...args,
    imageData,
    internalLinkUrl,
  };

  return renderComponent({
    Component,
    componentName: "text-callout",
    args: renderProps,
  });
};
