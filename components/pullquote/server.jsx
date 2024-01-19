import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  const { ctx } = info;
  const matrixAsset = args.displayConfiguration.asset;
  let data = null;

  if (matrixAsset) {
    data = await basicAssetUri(ctx, matrixAsset);
  }

  const renderProps = {
    ...args,
    data,
  };

  return renderComponent({
    Component,
    componentName: "pullquote",
    args: renderProps,
  });
};
