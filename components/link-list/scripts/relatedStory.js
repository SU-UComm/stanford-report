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
      &query=[taxonomyContentMainTopicId:${
        pageData.mainTopicId
      } taxonomyContentTopicsId:${
      pageData.mainTopicId
    } taxonomyContentSubtopicsId:${pageData.mainTopicId}]
      &query_not=[taxonomyContentTypeId:28210 taxonomyContentTypeId:28216 taxonomyContentTypeId:28201 id:${
        pageData.id
      }]
      &meta_taxonomyAudienceText=${translatePersonalisationProfile(
        personalisation
      )}&num_ranks=3&sort=date&log=false
    `;

    // uglify the URL
    adapter.url = fbUrl.replace(/\n+|\t+| {2,}/g, "");

    const storyResultData = await adapter.fetch();
    const story = storyResultData.response?.resultPacket?.results || null;

    return story;
  }

  return null;
}
