import FetchAdapter from "../../../packages/utils/fetchAdapter";

export default async function relatedStoryData(
  pageData = null,
  search = null,
  audience = null
) {
  const adapter = new FetchAdapter();

  if (pageData && search) {
    const fbUrl = `${search.endpoint?.replace(
      "search.html",
      "search.json"
    )}?profile=${search.profile}&query=%21null&collection=${
      search.collection
    }&meta_taxonomyContentMainTopicText=${
      pageData.mainTopic
    }&meta_taxonomyAudienceText=${audience || ""}&num_ranks=1&meta_id_not=${
      pageData.id
    }`;
    adapter.url = fbUrl;

    const storyResultData = await adapter.fetch();
    const story = storyResultData.response?.resultPacket?.results?.[0] || null;
    return story;
  }

  return null;
}
