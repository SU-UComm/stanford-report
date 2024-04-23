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
    )}?profile=${pageData.search.profile}&collection=${
      pageData.search.collection
    }&meta_taxonomyContentMainTopicText=${
      pageData.mainTopic
    }&meta_taxonomyAudienceText=${translatePersonalisationProfile(
      audience
    )}&meta_taxonomyContentTypeId_not=28210&meta_taxonomyContentTypeId_not=28216&meta_taxonomyContentTypeId_not=28201&sort=date&num_ranks=1&meta_id_not=${
      pageData.id
    }`;

    fallbackFbUrl = `${pageData.search.endpoint?.replace(
      "search.html",
      "search.json"
    )}?profile=${pageData.search.profile}&query=%21null&collection=${
      pageData.search.collection
    }&meta_taxonomyContentTypeId_not=28210&meta_taxonomyContentTypeId_not=28216&meta_taxonomyContentTypeId_not=28201
    &num_ranks=1&sort=date&meta_id_not=${pageData.search.currentPage}`;

    if (pageData.search.contentType === "Video") {
      fallbackFbUrl += "&meta_taxonomyContentTypeText=Video";
      fbUrl += "&meta_taxonomyContentTypeText=Video";
    }

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
