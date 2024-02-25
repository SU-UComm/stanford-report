import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  const { ctx } = info;
  // const matrixAsset = args.displayConfiguration;
  let data = null;

  console.log(JSON.stringify(args));

  data = [];

  // if (!["", "undefined", undefined, null].includes(matrixAsset)) {
  //   console.log("Here is my test");
  //   data = await basicAssetUri(ctx, matrixAsset);
  // }

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
