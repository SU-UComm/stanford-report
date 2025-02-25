import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  const { ctx } = info;
  const { image } = args.colThree.imageConfiguration;
  const { internalUrl } = args.colThree.buttonConfiguration;

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
    componentName: "multicolumn-info-section",
    args: renderProps,
  });
};
