import FetchAdapter from "../../../packages/utils/fetchAdapter";

export default async function popularStoriesFetcher(urls, token) {
  const adapter = new FetchAdapter();
  const data = [];

  for (let i = 0; i < urls.length; i++) {
    adapter.url = `https://dxp-us-admin.funnelback.squiz.cloud/admin-api/collection-info/v1/collections/sug~sp-stanford-report-search/url/data?url=${urls[i]}`;

    adapter.request({
      headers: {
        "X-Security-Token": token,
      },
    });

    const fbData = adapter.fetch();

    data.push(fbData);
  }

  return Promise.all(data)
    .then((items) => items.filter((item) => item.data[0]))
    .catch((error) => {
      throw new Error(error);
    });
}
