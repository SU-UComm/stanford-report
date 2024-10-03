
import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import CardDataAdapter from "../../packages/utils/CardDataAdapter";
import FunnelbackCardService from "../../packages/utils/FunnelbackCardService";

export default async (args, info) => {
  const { FB_JSON_URL } = info.set.environment;
  const adapter = new CardDataAdapter();
  const query = args.displayConfiguration.searchQuery;

  let data = null;

  const res = await fetch(FB_JSON_URL + query).catch((err) => {
    throw new Error(err);
  });

  const fbData = await res.json();

  if (query) {
    const service = new FunnelbackCardService({ FB_JSON_URL, query });

    adapter.setCardService(service);

    data = await adapter.getCards();
  }

  const resultsSummary =
    fbData.response.resultPacket && fbData.response.resultPacket.resultsSummary
      ? fbData.response.resultPacket.resultsSummary
      : null;

  const renderProps = {
    ...args,
    data,
    resultsSummary,
    pageNumber: resultsSummary.currStart,
    endpoint: FB_JSON_URL,
  };

  return renderComponent({
    Component,
    componentName: "topic-subtopic-listing",
    args: renderProps,
  });
};
