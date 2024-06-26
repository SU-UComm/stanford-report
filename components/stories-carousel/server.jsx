import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import CardDataAdapter from "../../packages/utils/CardDataAdapter";
import FunnelbackCardService from "../../packages/utils/FunnelbackCardService";
import linkedHeadingService from "../../packages/utils/linkedHeadingService";

export default async (args, info) => {
  // eslint-disable-next-line no-unused-vars
  const { FB_JSON_URL, BASE_DOMAIN, BASE_PATH, NEWS_ARCHIVE_PATH } =
    info.set.environment;
  const { ctx } = info;
  const adapter = new CardDataAdapter();
  let data = null;

  // check what data source "Search" or "Select"
  // eslint-disable-next-line no-empty

  if (
    args.contentConfiguration.searchQuery !== "" &&
    args.contentConfiguration.searchQuery !== null &&
    args.contentConfiguration.searchQuery !== "?"
  ) {
    // compose and fetch the FB search results
    const query = args.contentConfiguration.searchQuery;
    const service = new FunnelbackCardService({ FB_JSON_URL, query });

    adapter.setCardService(service);

    data = await adapter.getCards();
  }

  // Resolve the URI for the section heading link
  const headingData = await linkedHeadingService(
    ctx,
    args.headingConfiguration
  );

  if (!headingData.ctaLink) {
    headingData.ctaLink = `${BASE_DOMAIN}${BASE_PATH}${NEWS_ARCHIVE_PATH}`;
  }

  const renderProps = {
    ...args,
    data,
    headingData,
  };

  return renderComponent({
    Component,
    componentName: "stories-carousel",
    args: renderProps,
  });
};
