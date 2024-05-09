import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import MatrixCardService from "../../packages/utils/MatrixCardService";
import CardDataAdapter from "../../packages/utils/CardDataAdapter";
import linkedHeadingService from "../../packages/utils/linkedHeadingService";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  const { featuredContent, supplementaryTeaserOne, supplementaryTeaserTwo } =
    args;
  const { featuredTeaser, personHeadshot } = featuredContent;
  const teaserOne = supplementaryTeaserOne?.teaserOne;
  const teaserTwo = supplementaryTeaserTwo?.teaserTwo;
  const { API_IDENTIFIER, BASE_DOMAIN } = info.set.environment;
  const { ctx } = info;
  const adapter = new CardDataAdapter();
  const cards = [];

  let headshotData = null;
  let data = null;

  const service = new MatrixCardService({ BASE_DOMAIN, API_IDENTIFIER });

  if (personHeadshot) {
    headshotData = await basicAssetUri(ctx, personHeadshot);
  }

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
    headshotData,
  };

  return renderComponent({
    Component,
    componentName: "in-the-news",
    args: renderProps,
  });
};
