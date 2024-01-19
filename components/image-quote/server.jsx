import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import CardDataAdapter from "../../packages/utils/CardDataAdapter";
import MatrixCardService from "../../packages/utils/MatrixCardService";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  const { API_IDENTIFIER } = info.set.environment;
  const { ctx } = info;
  const adapter = new CardDataAdapter();
  const { image } = args.displayConfiguration;
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
    componentName: "image-quote",
    args: renderProps,
  });
};
