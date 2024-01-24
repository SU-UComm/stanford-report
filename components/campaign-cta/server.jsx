import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  const { ctx } = info;
  const { image } = args.displayConfiguration;
  const { linkUrl } = args.displayConfiguration;
  let data = null;
  let linkData = null;

  if (linkUrl) {
    linkData = await basicAssetUri(ctx, linkUrl);
  }

  if (image) {
    data = await basicAssetUri(ctx, image);
  }

  const renderProps = {
    ...args,
    data,
    linkData,
  };

  return renderComponent({
    Component,
    componentName: "campaign-cta",
    args: renderProps,
  });
};
