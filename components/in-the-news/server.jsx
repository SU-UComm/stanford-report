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

  let data = null;

  const service = new MatrixCardService({ ctx, API_IDENTIFIER });
  if (featuredTeaser) {
    cards.push({ cardAsset: featuredTeaser });
  }

  if (teaserOne) {
    cards.push({ cardAsset: teaserOne });
  }

  if (teaserTwo) {
    cards.push({ cardAsset: teaserTwo });
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
    headingData,
  };

  return renderComponent({
    Component,
    componentName: "in-the-news",
    args: renderProps,
  });
};
