import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import CardDataAdapter from "../../packages/utils/CardDataAdapter";
import MatrixCardService from "../../packages/utils/MatrixCardService";
import linkedHeadingService from "../../packages/utils/linkedHeadingService";
import basicAssetUri from "../../packages/utils/basicAssetUri";

export default async (args, info) => {
  // eslint-disable-next-line no-unused-vars
  const { FB_JSON_URL, API_IDENTIFIER, BASE_DOMAIN } = info.set.environment;
  const { ctx } = info;
  const adapter = new CardDataAdapter();
  const { featuredStory } = args.contentConfiguration;
  const { relatedStory } = args.contentConfiguration;
  const { videoImage } = args.contentConfiguration;

  let data = null;
  const service = new MatrixCardService({ BASE_DOMAIN, API_IDENTIFIER });
  adapter.setCardService(service);
  data = await adapter.getCards([
    { cardAsset: featuredStory },
    { cardAsset: relatedStory },
  ]);

  let imageData = null;
  if (videoImage) {
    imageData = await basicAssetUri(ctx, videoImage);
  }

  // Resolve the URI for the section heading link
  const headingData = await linkedHeadingService(
    ctx,
    args.headingConfiguration
  );

  const renderProps = {
    ...args,
    data,
    headingData,
    imageData,
  };

  return renderComponent({
    Component,
    componentName: "featured-content-vv",
    args: renderProps,
  });
};
