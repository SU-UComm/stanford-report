import FetchAdapter from "../../../packages/utils/fetchAdapter";

export default async function relatedStory(
  search = null,
  pageData = null,
  personalisation = null
) {
  const adapter = new FetchAdapter();

  if (pageData && search) {
    const fbUrl = `
      ${search.endpoint?.replace(/\.html/g, ".json")}
      ?profile=${search.profile}
      &query=%21null&collection=${search.collection}
      &meta_taxonomyContentMainTopicText=${
        personalisation || ""
      }&num_ranks=3&meta_id_not=${pageData.id}
    `;

    adapter.url = fbUrl.replace(/\n+|\t+| {1,}/g, "");

    const storyResultData = await adapter.fetch();
    const story = storyResultData.response?.resultPacket?.results || null;

    return story;
  }

  return null;
}
