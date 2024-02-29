import FetchAdapter from "../../../packages/utils/fetchAdapter";
import translatePersonalisationProfile from "../../../packages/utils/translatePersonalisationProfile";

export default async function relatedStoryData(pageData = null, audience = "") {
  const adapter = new FetchAdapter();
  if (pageData && pageData.search) {
    const fbUrl = `${pageData.search.endpoint?.replace(
      "search.html",
      "search.json"
    )}?profile=${pageData.search.profile}&query=%21null&collection=${
      pageData.search.collection
    }&meta_taxonomyContentMainTopicText=${
      pageData.mainTopic
    }&meta_taxonomyAudienceText=${translatePersonalisationProfile(
      audience
    )}&num_ranks=1&meta_id_not=${pageData.id}`;
    adapter.url = fbUrl;

    const storyResultData = await adapter.fetch();
    const story = storyResultData.response?.resultPacket?.results?.[0] || null;
    return story;
  }

  return null;
}
