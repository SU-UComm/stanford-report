import CardDataAdapter from "../../packages/utils/CardDataAdapter";
import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import MatrixMediaCardService from "../../packages/utils/MatrixMediaCardService";

export default async (args, info) => {
  const adapter = new CardDataAdapter();
  // eslint-disable-next-line no-unused-vars
  const { FB_JSON_URL, API_IDENTIFIER } = info.set.environment;
  const { ctx } = info;
  let data = null;

  // data = await new MatrixMediaCardService(ctx, args.cards);
  const { cards } = args;
  // Create our service
  const service = new MatrixMediaCardService({ ctx, API_IDENTIFIER });

  // Set our card service
  adapter.setCardService(service);

  // get the cards data
  data = await adapter.getCards(cards);

  const renderProps = {
    ...args,
    data,
  };

  return renderComponent({
    Component,
    componentName: "media-carousel",
    args: renderProps,
  });
};
