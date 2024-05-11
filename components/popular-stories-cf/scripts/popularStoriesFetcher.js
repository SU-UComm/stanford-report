import FetchAdapter from "../../../packages/utils/fetchAdapter";

export default async function popularStoriesFetcher(urls, { FB_JSON_URL }) {
  const adapter = new FetchAdapter();
  // let data = [];
  const assets = [];

  for (let i = 0; i < urls.length; i++) {
    // eslint-disable-next-line security/detect-object-injection
    if (assets.length <= 4) assets.push(`assetHref:"${urls[i]}"`);
  }

  adapter.url = `${FB_JSON_URL}?profile=stanford-report-push-search&collection=sug~sp-stanford-report-search&num_ranks=5&query=[${assets.join(
    " "
  )}]`;

  const data = await adapter.fetch();

  return data?.response?.resultPacket?.results;
}
