import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  // Using code from Campaign CTA component to resolve internal URL
  const { ctx } = info;
  let linkUrl = null;

  if (args?.internalUrl) {
    linkUrl = await basicAssetUri(ctx, args.internalUrl);
  }
  const internalLinkUrl = linkUrl?.url;

  const renderProps = {
    ...args,
    internalLinkUrl,
  };
  return renderComponent({
    Component,
    componentName: "button",
    args: renderProps,
  });
};
