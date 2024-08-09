import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import CardDataAdapter from "../../packages/utils/CardDataAdapter";
import MatrixImageCardService from "../../packages/utils/MatrixImageCardService";
import formatCardDataImage from "../../packages/utils/formatCardDataImage";

export default async (args, info) => {
  const { API_IDENTIFIER, BASE_DOMAIN } = info.set.environment;
  const adapter = new CardDataAdapter();
  let data = null;
  const { images } = args.contentConfiguration;

  // Create our service
  const service = new MatrixImageCardService({ BASE_DOMAIN, API_IDENTIFIER });
  // Set our card service
  adapter.setCardService(service);

  const filteredImages = images.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.image === item.image)
  );

  // get the cards data
  data = await adapter.getCards(images);
  const imageData = data.map((image, index) => {
    const imgData = formatCardDataImage(image);

    return { ...imgData, caption: filteredImages[`${index}`]?.caption };
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
