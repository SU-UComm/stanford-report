import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import CardDataAdapter from "../../packages/utils/CardDataAdapter";
import MatrixMediaCardService from "../../packages/utils/MatrixCardService";
import formatCardDataImage from "../../packages/utils/formatCardDataImage";

export default async (args, info) => {
  const { API_IDENTIFIER, BASE_DOMAIN } = info.set.environment;
  const adapter = new CardDataAdapter();
  let data = null;
  const { images } = args.contentConfiguration;

  // Create our service
  const service = new MatrixMediaCardService({ BASE_DOMAIN, API_IDENTIFIER });
  // Set our card service
  adapter.setCardService(service);

  // get the cards data
  data = await adapter.getCards(images);

  const imageData = [];

  data.forEach((item) => {
    imageData.push(formatCardDataImage(item));
  });

  const renderProps = {
    ...args,
    data: imageData,
  };

  return renderComponent({
    Component,
    componentName: "image-gallery-modal",
    args: renderProps,
  });
};
