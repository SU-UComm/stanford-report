import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  // Using code from Campaign CTA component to resolve internal URL
  const { ctx } = info;
  const { internalUrl } = args.internalUrl;
  let linkUrl = null;

  if (internalUrl) {
    linkUrl = await basicAssetUri(ctx, internalUrl);
  }

  const renderProps = {
    ...args,
    linkUrl,
  };
  return renderComponent({
    Component,
    componentName: "button",
    args: renderProps,
  });
};
