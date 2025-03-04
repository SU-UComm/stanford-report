import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  const { ctx } = info;
  /* Button in second column, with infoText */
  const { infoInternalUrl } = args.colTwo.buttonConfiguration;
  const { image } = args.colThree.imageConfiguration;
  /* Button in thirdd column, inside InfoBox */
  const { internalUrl } = args.colThree.buttonConfiguration;

  /* Button in second column, with infoText */
  let infoLinkUrl = null;
  if (infoInternalUrl) {
    infoLinkUrl = await basicAssetUri(ctx, infoInternalUrl);
  }
  const infoInternalLinkUrl = infoLinkUrl?.url;

  /* Button in thirdd column, inside InfoBox */
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
    infoInternalLinkUrl,
    internalLinkUrl,
  };
  return renderComponent({
    Component,
    componentName: "multicolumn-info-section",
    args: renderProps,
  });
};
