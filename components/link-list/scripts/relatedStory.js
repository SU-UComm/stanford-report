import FetchAdapter from "../../../packages/utils/fetchAdapter";
import translatePersonalisationProfile from "../../../packages/utils/translatePersonalisationProfile";

export default async function relatedStory(
  search = null,
  pageData = null,
  personalisation = ""
) {
  const adapter = new FetchAdapter();

  window.pageController = {
    id: 129998,
    title: "B Stakeholder Demo Basic Story Test",
    isStory: true,
    mainTopic: "Campus &amp;amp; Facilities",
    mainTopicId: "28395",
    storyLayout: "Basic",
    search: {
      endpoint: "https://dxp-us-search.funnelback.squiz.cloud/s/search.html",
      collection: "sug~sp-stanford-report-search",
      profile: "stanford-report-push-search",
      resultPage: "https://sug-web.matrix.squiz.cloud/report/search",
    },
  };

  if (pageData && search) {
    const fbUrl = `
      ${search.endpoint?.replace(/\.html/g, ".json")}
      ?profile=${search.profile}
      &query=%21null
      &collection=${search.collection}
      &meta_taxonomyContentMainTopicText=${pageData.mainTopic}
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
