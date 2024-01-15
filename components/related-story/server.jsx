import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import CardDataAdapter from "../../packages/utils/CardDataAdapter";
import MatrixCardService from "../../packages/utils/MatrixCardService";

export default async (args, info) => {
  const { API_IDENTIFIER } = info.set.environment;
  const { contentConfiguration } = args;
  const { story } = contentConfiguration;
  const { ctx } = info;
  const adapter = new CardDataAdapter();
  let data = null;

  if (story) {
    const service = new MatrixCardService({ ctx, API_IDENTIFIER });

    adapter.setCardService(service);

    data = await adapter.getCards([{ cardAsset: story }]);
  }

  const renderProps = {
    ...args,
    data,
  };

  return renderComponent({
    Component,
    componentName: "related-story",
    args: renderProps,
  });
};
