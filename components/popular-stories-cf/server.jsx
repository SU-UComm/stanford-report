import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";
import FetchAdapter from "../../packages/utils/fetchAdapter";
import popularStoriesFetcher from "./scripts/popularStoriesFetcher";

function getDateRange(range) {
  const date = new Date();
  if (range) {
    date.setDate(date.getDate() - range);
  }

  return date.toISOString();
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
  };
  return dateRangeMap[date];
}

function getMaxPublishedDate(lengthOfTime) {
  const dateRangeMap = {
    "Past 6 months": {
      days: 0,
      months: -6,
      years: 0,
    },
    "Past 1 year": {
      days: 0,
      months: 0,
      years: -1,
    },
    "Past 2 years": {
      days: 0,
      months: 0,
      years: -2,
    },
  };

  // Subtract the max published date from today
  const date = new Date();
  date.setDate(date.getDate() + dateRangeMap[lengthOfTime].days);
  date.setMonth(date.getMonth() + dateRangeMap[lengthOfTime].months);
  date.setFullYear(date.getFullYear() + dateRangeMap[lengthOfTime].years);
  return date;
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
  let exclusionContentTypes =
    contentTypeExclusions && contentTypeExclusions.length > 0
      ? contentTypeExclusions
          .split(",")
          .map(
            (num) =>
              `${
                num.trim() !== "" ? `taxonomyContentTypeId:${num.trim()}` : ""
              }`
          )
          .join(" ")
      : "";

  // default exclusion types
  exclusionContentTypes +=
    " taxonomyContentTypeId:28201 taxonomyContentTypeId:28216 taxonomyContentTypeId:28210";

  const exclusionIDs =
    assetExclusions && assetExclusions.length > 0
      ? assetExclusions
          .split(",")
          .map((num) => `${num.trim() !== "" ? `id:${num.trim()}` : ""}`)
          .join(" ")
      : "";

  const dateRange = formatDate(getMaxPublishedDate(publishedDateMax));
  const dateRangeQuery = `meta_d1=${dateRange}`;

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
                          { clientRequestPath_like: "${sourcePath.trim()}" }
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
