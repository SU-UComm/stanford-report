import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import basicAssetUri from "../../packages/utils/basicAssetUri";
import formatCardDataImage from "../../packages/utils/formatCardDataImage";

export default async (args, info) => {
  // const adapter = new CardDataAdapter();
  // eslint-disable-next-line no-unused-vars
  // const { API_IDENTIFIER } = info.set.environment;
  const { ctx } = info;
  // const data = null;

  // data = await new MatrixMediaCardService(ctx, args.cards);
  const { images } = args.contentConfiguration;
  const imageData = [];

  if (images.length) {
    for (const image of images) {
      const imgData = formatCardDataImage(
        await basicAssetUri(ctx, image.image)
      );

      imgData.caption = image.caption;

      imageData.push(imgData);
    }
  }

  // Create our service
  // const service = new MatrixImageService({ ctx, API_IDENTIFIER });

  // // Set our card service
  // adapter.setCardService(service);

  // // get the cards data
  // data = await adapter.getCards(images);

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
