import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import MatrixCardService from "../../packages/utils/MatrixCardService";
import CardDataAdapter from "../../packages/utils/CardDataAdapter";
import linkedHeadingService from "../../packages/utils/linkedHeadingService";

export default async (args, info) => {
  const { featuredContent } = args;
  const { featuredTeaser } = featuredContent;
  const { API_IDENTIFIER } = info.set.environment;
  const { ctx } = info;
  const adapter = new CardDataAdapter();

  let data = null;

  if (featuredTeaser) {
    // Create our service
    const service = new MatrixCardService({ ctx, API_IDENTIFIER });

    // Set our card service
    adapter.setCardService(service);

    // get the cards data
    data = await adapter.getCards([{ cardAsset: featuredTeaser }]);
  }

  return renderComponent({ Component, componentName: "in-the-news", args });
};
