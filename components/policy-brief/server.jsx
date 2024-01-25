import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  const { ctx } = info;
  const { image } = args.contentConfiguration;

  let data = null;

  if (image) {
    data = await basicAssetUri(ctx, image);
  }

  const renderProps = {
    ...args,
    data,
  };

  return renderComponent({
    Component,
    componentName: "policy-brief",
    args: renderProps,
  });
};
