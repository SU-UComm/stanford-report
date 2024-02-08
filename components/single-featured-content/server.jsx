import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import CardDataAdapter from "../../packages/utils/CardDataAdapter";
import MatrixCardService from "../../packages/utils/MatrixCardService";
import linkedHeadingService from "../../packages/utils/linkedHeadingService";

export default async (args, info) => {
  const { API_IDENTIFIER } = info.set.environment;
  const { ctx } = info;
  const adapter = new CardDataAdapter();
  const featured = args.contentConfiguration.source;

  let data = null;

  if (featured) {
    // Create our service
    const service = new MatrixCardService({ ctx, API_IDENTIFIER });

    // Set our card service
    adapter.setCardService(service);

    // get the cards data
    data = await adapter.getCards([{ cardAsset: featured }]);
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
  };

  return renderComponent({
    Component,
    componentName: "single-featured-content",
    args: renderProps,
  });
};
