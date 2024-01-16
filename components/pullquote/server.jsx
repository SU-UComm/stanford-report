import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import CardDataAdapter from "../../packages/utils/CardDataAdapter";
import MatrixCardService from "../../packages/utils/MatrixCardService";

export default async (args, info) => {
  const { API_IDENTIFIER } = info.set.environment;
  const { ctx } = info;
  const adapter = new CardDataAdapter();
  const matrixAsset = [{ cardAsset: args.displayConfiguration.asset }];
  let data = null;

  if (matrixAsset) {
    const service = new MatrixCardService({ ctx, API_IDENTIFIER });

    adapter.setCardService(service);

    data = await adapter.getCards(matrixAsset);
  }

  const renderProps = {
    ...args,
    data,
  };

  return renderComponent({
    Component,
    componentName: "pullquote",
    args: renderProps,
  });
};
