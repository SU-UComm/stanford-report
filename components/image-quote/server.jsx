import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import CardDataAdapter from "../../packages/utils/CardDataAdapter";
import MatrixCardService from "../../packages/utils/MatrixCardService";

export default async (args, info) => {
  const { API_IDENTIFIER } = info.set.environment;
  const { ctx } = info;
  const adapter = new CardDataAdapter();
  const { image } = args.displayConfiguration;
  const data = null;

  if (image) {
    const service = new MatrixCardService({ ctx, API_IDENTIFIER });

    adapter.setCardService(service);

    await adapter.getCards([{ cardAsset: image }]);
  }

  return renderComponent({ Component, componentName: "image-quote", args });
};
