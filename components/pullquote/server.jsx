import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  const { ctx } = info;
  const matrixAsset = args.displayConfiguration.asset;
  let imageUrl = null;

  if (!["", "undefined", undefined, null].includes(matrixAsset)) {
    const data = await basicAssetUri(ctx, matrixAsset);

    imageUrl = data.url;
  }

  const renderProps = {
    ...args,
    imageUrl,
  };

  return renderComponent({
    Component,
    componentName: "pullquote",
    args: renderProps,
  });
};
