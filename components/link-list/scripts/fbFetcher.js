import FetchAdapter from "../../../packages/utils/fetchAdapter";
import translatePersonalisationProfile from "../../../packages/utils/translatePersonalisationProfile";

export default async function fbFetcher(
  search = null,
  pageData = null,
  personalisation = "",
  behaviouralData = null
) {
  const adapter = new FetchAdapter();

  if (pageData && search) {
    // default non-behavioural
    const defaultFbUrl = `
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
    let fbUrl = defaultFbUrl;

    if (behaviouralData && behaviouralData?.behavioural) {
      fbUrl = `${search.endpoint?.replace(/\.html/g, ".json")}
      ?profile=${search.profile}
      &collection=${search.collection}${
        behaviouralData.partialQuery
      }&num_ranks=3`;
    }

    // uglify the URL
    adapter.url = fbUrl.replace(/\n+|\t+| {2,}/g, "");

    const storyResultData = await adapter.fetch();
    let story = storyResultData.response?.resultPacket?.results || null;

    // when behavioural and there is insufficient data returned (less than 3)
    if (behaviouralData?.behavioural && story && story.length < 3) {
      // run the default topic query
      adapter.url = defaultFbUrl.replace(/\n+|\t+| {2,}/g, "");
      const backupResultData = await adapter.fetch();
      story = backupResultData.response?.resultPacket?.results || null;
    }

    return story;
  }

  return null;
}
