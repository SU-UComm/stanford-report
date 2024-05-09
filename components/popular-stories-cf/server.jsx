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

  return date.toISOString();

  // return `${year}-${month}-${day}`;
}

export default async (args, info) => {
  const adapter = new FetchAdapter();
  const {
    FB_API_TOKEN,
    FB_JSON_URL,
    MGT_API,
    CF_ANALYTICS_API,
    BASE_DOMAIN,
    BASE_PATH,
  } = info.set.environment;

  // 2024-05-01T00:00:00.000Z

  const payload = {
    query: `query Viewer {
      viewer {
          zones(filter: { zoneTag_in: ["4f245bec971a45ca38091352b2e11951"] }) {
              httpRequestsAdaptiveGroups(
                  filter: {
                      datetime_gt: "${getDateRange(7)}"
                      datetime_lt: "${getDateRange()}"
                      clientRefererHost: "news.stanford.edu"
                      requestSource: "eyeball"
                      edgeResponseStatus_lt: 300
                      AND: [
                          { clientRequestPath_like: "/stories/%" }
                          { clientRequestPath_notlike: "%/_admin%" }
                      ]
                  }
                  orderBy: [count_DESC]
                  limit: 10
              ) {
                  count
                  dimensions {
                      clientRequestHTTPHost
                      clientRequestPath
                  }
              }
          }
      }
    }`,
  };

  let data = null;
  const urls = [];

  if (FB_API_TOKEN) {
    const REQUEST_PROPS = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CF_ANALYTICS_API}`,
      },
      body: JSON.stringify(payload),
    };

    const res = await fetch(MGT_API, REQUEST_PROPS).catch((er) => {
      throw new Error(er);
    });

    data = await res.json();

    data.data.viewer.zones[0].httpRequestsAdaptiveGroups.forEach(
      ({ dimensions }) => {
        urls.push(dimensions.clientRequestPath);
      }
    );

    data = await popularStoriesFetcher(urls, {
      FB_JSON_URL,
      FB_API_TOKEN,
      BASE_DOMAIN,
      BASE_PATH,
    });
  } else {
    data = [];
  }

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
