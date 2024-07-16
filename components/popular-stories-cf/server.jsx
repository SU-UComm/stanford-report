import fetch from "node-fetch";
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

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day}${month}${year}`;
}

function getAPIDateRange(date) {
  const dateRangeMap = {
    "1 week": 7,
    "2 weeks": 14,
    "1 month": 30,
    "6 months": 180,
    "1 year": 365,
  };
  return dateRangeMap(date);
}

function getMaxPublishedRange(date) {
  const dateRangeMap = {
    "Past 6 months": 0.5,
    "Past 1 year": 1,
    "Past 2 years": 2,
  };
  return dateRangeMap(date);
}

export default async (args, info) => {
  const adapter = new FetchAdapter();
  const { FB_JSON_URL, MGT_API, CF_ANALYTICS_API } = info.set.environment;
  const {
    storiesCount,
    APIrespCount,
    sourcePath,
    assetExclusions,
    contentTypeExclusions,
    APIdateRange,
    publishedDateMax,
  } = args;

  const dateRangeNumeric = getAPIDateRange(APIdateRange);
  const exclusionContentTypes = contentTypeExclusions.map((num) =>
    `taxonomyContentTypeId:${num}`.join(" ")
  );

  const exclusionIDs = assetExclusions.map((num) => `id:${num}`.join(" "));

  const publishedDateRangeNumeric = getMaxPublishedRange(publishedDateMax);

  // Today's date
  const today = new Date();
  const todayFormatted = formatDate(today);
  // Date from input
  const rangeDate = new Date();
  rangeDate.setFullYear(today.getFullYear() - publishedDateRangeNumeric);
  const dateRange = formatDate(rangeDate);

  const dateRangeQuery = `&f.Date%7Cd=d>${dateRange}<${todayFormatted}`;

  // 2024-05-01T00:00:00.000Z

  const payload = {
    query: `query Viewer {
      viewer {
          zones(filter: { zoneTag_in: ["4f245bec971a45ca38091352b2e11951"] }) {
              httpRequestsAdaptiveGroups(
                  filter: {
                      datetime_gt: "${getDateRange(dateRangeNumeric)}"
                      datetime_lt: "${getDateRange()}"
                      clientRequestHTTPHost: "news.stanford.edu"
                      requestSource: "eyeball"
                      edgeResponseStatus_lt: 300
                      AND: [
                          { clientRequestPath_like: "${sourcePath}%" }
                          { clientRequestPath_notlike: "%/_admin%" }
                      ]
                  }
                  orderBy: [count_DESC]
                  limit: ${APIrespCount}
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

  if (MGT_API && CF_ANALYTICS_API) {
    const REQUEST_PROPS = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CF_ANALYTICS_API}`,
      },
      body: JSON.stringify(payload),
    };
    adapter.url = MGT_API;
    adapter.requestProps = REQUEST_PROPS;

    data = await adapter.fetch();

    data.data.viewer.zones[0].httpRequestsAdaptiveGroups.forEach(
      ({ dimensions }) => {
        urls.push(dimensions.clientRequestPath);
      }
    );

    data = await popularStoriesFetcher(
      urls,
      storiesCount,
      exclusionContentTypes,
      exclusionIDs,
      dateRangeQuery,
      {
        FB_JSON_URL,
      }
    );
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
