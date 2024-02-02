import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  const { ctx } = info;
  let imageData = null;
  imageData = await basicAssetUri(ctx, args.image);

  const imageUrl = imageData.url;
  console.log(JSON.stringify(imageUrl));

  const renderProps = {
    ...args,
    imageUrl,
  };

  return renderComponent({
    Component,
    componentName: "test-hannah",
    args: renderProps,
  });
};
