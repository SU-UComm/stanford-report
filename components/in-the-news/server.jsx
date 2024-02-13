import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import MatrixCardService from "../../packages/utils/MatrixCardService";
import CardDataAdapter from "../../packages/utils/CardDataAdapter";
import linkedHeadingService from "../../packages/utils/linkedHeadingService";

export default async (args, info) => {
  const { featuredContent, supplementaryTeaserOne, supplementaryTeaserTwo } =
    args;
  const { featuredTeaser } = featuredContent;
  const { teaserOne } = supplementaryTeaserOne;
  const { teaserTwo } = supplementaryTeaserTwo;
  const { API_IDENTIFIER } = info.set.environment;
  const { ctx } = info;
  const adapter = new CardDataAdapter();
  const cards = [];

  const featuredData = null;
  const teaserOneData = null;
  const teaserTwoData = null;
  let data = null;

  const service = new MatrixCardService({ ctx, API_IDENTIFIER });

  if (featuredTeaser) {
    cards.push({ cardAsset: featuredTeaser });
    // Create our service
    // const service = new MatrixCardService({ ctx, API_IDENTIFIER });

    // Set our card service
    // adapter.setCardService(service);

    // get the cards data
    // featuredData = await adapter.getCards([{ cardAsset: featuredTeaser }]);
  }

  if (teaserOne) {
    cards.push({ cardAsset: teaserOne });
    // Create our service
    // const teaserOneService = new MatrixCardService({ ctx, API_IDENTIFIER });

    // Set our card service
    // adapter.setCardService(teaserOneService);

    // get the cards data
    // teaserOneData = await adapter.getCards([{ cardAsset: teaserOne }]);
  }

  if (teaserTwo) {
    cards.push({ cardAsset: teaserTwo });
    // Create our service
    // const teaserTwoService = new MatrixCardService({ ctx, API_IDENTIFIER });

    // Set our card service
    // adapter.setCardService(teaserTwoService);

    // get the cards data
    // teaserTwoData = await adapter.getCards([{ cardAsset: teaserTwo }]);
  }

  adapter.setCardService(service);

  if (cards.length) {
    data = await adapter.getCards(cards);
  }

  const headingData = await linkedHeadingService(
    ctx,
    args.headingConfiguration
  );

  const renderProps = {
    ...args,
    data,
    // featuredData,
    headingData,
    // teaserOneData,
    // teaserTwoData,
  };

  return renderComponent({
    Component,
    componentName: "in-the-news",
    args: renderProps,
  });
};
