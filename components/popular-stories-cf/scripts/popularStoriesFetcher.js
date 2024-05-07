import FetchAdapter from "../../../packages/utils/fetchAdapter";

export default async function popularStoriesFetcher(
  urls,
  { FB_JSON_URL, FB_API_TOKEN, BASE_DOMAIN, BASE_PATH }
) {
  const adapter = new FetchAdapter();
  let data = [];
  const assets = [];

  for (let i = 0; i < urls.length; i++) {
    if (assets.length <= 4) assets.push(`${urls[i]}`);
  }

  adapter.url = `${FB_JSON_URL}?profile=stanford-report-push-search&collection=sug~sp-stanford-report-search&meta_assetHref=[${assets.join(
    ","
  )}]`;

  const fbData = adapter.fetch();

  if (fbData) {
    data = fbData;

    return new Promise((resolve) => {
      resolve(data);
    })
      .then((item) => item.response.resultPacket.results)
      .catch((er) => {
        throw new Error(er);
      });
  }
}
