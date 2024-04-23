import FetchAdapter from "../../../packages/utils/fetchAdapter";
import translatePersonalisationProfile from "../../../packages/utils/translatePersonalisationProfile";

export default async function relatedStory(
  search = null,
  pageData = null,
  personalisation = ""
) {
  const adapter = new FetchAdapter();

  if (pageData && search) {
    const fbUrl = `
      ${search.endpoint?.replace(/\.html/g, ".json")}
      ?profile=${search.profile}
      &collection=${search.collection}
      &meta_taxonomyContentMainTopicText=${pageData.mainTopic}
      &meta_taxonomyContentTypeId_not=28210&meta_taxonomyContentTypeId_not=28216&meta_taxonomyContentTypeId_not=28201
      &meta_taxonomyAudienceText=${translatePersonalisationProfile(
        personalisation
      )}&num_ranks=3
      &meta_id_not=${pageData.id}
    `;

    // uglify the URL
    adapter.url = fbUrl.replace(/\n+|\t+| {2,}/g, "");

    const storyResultData = await adapter.fetch();
    const story = storyResultData.response?.resultPacket?.results || null;

    return story;
  }

  return null;
}
