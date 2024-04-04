import FetchAdapter from "../../../packages/utils/fetchAdapter";
import translatePersonalisationProfile from "../../../packages/utils/translatePersonalisationProfile";

export default async function relatedStoryData(pageData = null, audience = "") {
  const adapter = new FetchAdapter();
  if (pageData && pageData.search) {
    let fbUrl = "";
    let fallbackFbUrl = "";

    fbUrl = `${pageData.search.endpoint?.replace(
      "search.html",
      "search.json"
    )}?profile=${pageData.search.profile}&query=%21null&collection=${
      pageData.search.collection
    }&meta_taxonomyContentMainTopicText=${
      pageData.mainTopic
    }&meta_taxonomyAudienceText=${translatePersonalisationProfile(
      audience
    )}&num_ranks=1&meta_id_not=${pageData.id}`;

    fallbackFbUrl = `${pageData.search.endpoint?.replace(
      "search.html",
      "search.json"
    )}?profile=${pageData.search.profile}&query=%21null&collection=${
      pageData.search.collection
    }&meta_taxonomyContentTypeText_not=Leadership%20messages+News+Announcements
    &num_ranks=12&meta_notisTeaser=true&sort=date&meta_id_not=${
      pageData.search.currentPage
    }`;

    adapter.url = fbUrl;

    let storyResultData = await adapter.fetch();
    let story = storyResultData.response?.resultPacket?.results?.[0] || null;

    if (!story) {
      adapter.url = fallbackFbUrl;

      storyResultData = await adapter.fetch();
      story = storyResultData.response?.resultPacket?.results?.[0] || null;
    }

    return story;
  }

  return null;
}
