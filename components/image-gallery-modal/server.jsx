import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import CardDataAdapter from "../../packages/utils/CardDataAdapter";
import MatrixImageService from "../../packages/utils/MatrixImageService";

export default async (args, info) => {
  const adapter = new CardDataAdapter();
  // eslint-disable-next-line no-unused-vars
  const { API_IDENTIFIER } = info.set.environment;
  const { ctx } = info;
  let data = null;
  console.log(JSON.stringify(ctx));

  // data = await new MatrixMediaCardService(ctx, args.cards);
  const { images } = args.contentConfiguration;
  // Create our service
  const service = new MatrixImageService({ ctx, API_IDENTIFIER });

  // Set our card service
  adapter.setCardService(service);

  // get the cards data
  data = await adapter.getCards(images);

  const renderProps = {
    ...args,
    data,
  };

  return renderComponent({
    Component,
    componentName: "image-gallery-modal",
    args: renderProps,
  });
};
