import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import FetchAdapter from "../../packages/utils/fetchAdapter";
import popularStoriesFetcher from "./scripts/popularStoriesFetcher";

export default async (args, info) => {
  const adapter = new FetchAdapter();
  const { FB_API_TOKEN } = info.set.environment;

  // generate date from today to 7 before
  // make the X-Security-Token an env var

  adapter.url =
    "https://dxp-us-admin.funnelback.squiz.cloud/admin-api/analytics/v1/collections/sug~sp-stanford-report-search/clicks?earliestDate=2024-04-01&latestDate=2024-04-14&pageSize=10&profile=_default";

  adapter.request({
    headers: {
      "X-Security-Token": FB_API_TOKEN,
    },
  });

  const urlFetch = await adapter.fetch();
  const urls = [];

  let data = null;

  urlFetch.data.clicksAndCounts.forEach((click) => {
    urls.push(click.targetUrl);
  });

  data = await popularStoriesFetcher(urls, FB_API_TOKEN);

  const renderProps = {
    ...args,
    data,
  };

  return renderComponent({
    Component,
    componentName: "popular-stories",
    args: renderProps,
  });
};
