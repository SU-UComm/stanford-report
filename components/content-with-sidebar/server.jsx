import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  const { ctx } = info;
  const { image } = args.infoBox.imageConfiguration;
  const { internalUrl } = args.infoBox.buttonConfiguration;

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
    componentName: "content-with-sidebar",
    args: renderProps,
  });
};
