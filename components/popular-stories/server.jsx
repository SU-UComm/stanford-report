import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import FetchAdapter from "../../packages/utils/fetchAdapter";
import popularStoriesFetcher from "./scripts/popularStoriesFetcher";

function getDateRange(range) {
  const date = new Date();

  if (range) {
    date.setDate(date.getDate() - range);
  }

  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth();
  const day = date.getDate();

  return `${year}-${month}-${day}`;
}

export default async (args, info) => {
  const adapter = new FetchAdapter();
  const { FB_API_TOKEN } = info.set.environment;

  adapter.url = `https://dxp-us-admin.funnelback.squiz.cloud/admin-api/analytics/v1/collections/sug~sp-stanford-report-search/clicks?earliestDate=${getDateRange(
    7
  )}&latestDate=${getDateRange()}&pageSize=10&profile=_default`;

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
