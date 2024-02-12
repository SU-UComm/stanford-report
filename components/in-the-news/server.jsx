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

  let featuredData = null;
  let teaserOneData = null;
  let teaserTwoData = null;

  let featuredLoadTime = "";
  let teaserOneLoadTime = "";
  let teaserTwoLoadTime = "";

  if (featuredTeaser) {
    // Create our service
    const service = new MatrixCardService({ ctx, API_IDENTIFIER });
    const start = Date.now();
    let end = null;

    // Set our card service
    adapter.setCardService(service);

    // get the cards data
    featuredData = await adapter.getCards([{ cardAsset: featuredTeaser }]);

    if (featuredData) end = Date.now();

    featuredLoadTime = `Featured loaded in: ${end - start} milliseconds`;
  }

  if (teaserOne) {
    // Create our service
    const teaserOneService = new MatrixCardService({ ctx, API_IDENTIFIER });
    const start = Date.now();
    let end = null;

    // Set our card service
    adapter.setCardService(teaserOneService);

    // get the cards data
    teaserOneData = await adapter.getCards([{ cardAsset: teaserOne }]);

    if (teaserOneData) end = Date.now();

    teaserOneLoadTime = `Teaser one loaded in: ${end - start} milliseconds`;
  }

  if (teaserTwo) {
    // Create our service
    const teaserTwoService = new MatrixCardService({ ctx, API_IDENTIFIER });
    const start = Date.now();
    let end = null;

    // Set our card service
    adapter.setCardService(teaserTwoService);

    // get the cards data
    teaserTwoData = await adapter.getCards([{ cardAsset: teaserTwo }]);

    if (teaserTwoData) end = Date.now();

    teaserTwoLoadTime = `Teaser one loaded in: ${end - start} milliseconds`;
  }

  const headingData = await linkedHeadingService(
    ctx,
    args.headingConfiguration
  );

  const renderProps = {
    ...args,
    featuredData,
    headingData,
    teaserOneData,
    teaserTwoData,
    featuredLoadTime,
    teaserOneLoadTime,
    teaserTwoLoadTime,
  };

  return renderComponent({
    Component,
    componentName: "in-the-news",
    args: renderProps,
  });
};
