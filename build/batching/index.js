import { fetchTopicData, filterData, preparedData, writeTopicBackup, patchTopicData } from "./operations.js";

(async () => {
  const MGT_API = "https://sug-web.matrix.squiz.cloud/__management_api/v1/assets/";
  const REQUEST_PROPS_GET = {
    method: "GET",
    headers: {
      Authorization: "Bearer 653d5ade6d4f19fa7dfc885d7a1e6cc9",
    },
  }
  //
  // special handling for Topic pages
  //
  // use the topics JSON dataset to find all of the pages we need
  // the batching requires an array of IDs
  // the topicData objects contain a target_id that are the IDs we need (they are the pages we want to update)
  const topicData = await fetchTopicData();
  let filteredTopicData = await filterData(topicData);
  filteredTopicData = filteredTopicData.slice(0, 10);
  // console.log(filteredTopicData);

  let apiPageData = await preparedData(filteredTopicData, MGT_API, REQUEST_PROPS, true);

  await writeTopicBackup(apiPageData);

  // now merge the data
  apiPageData.forEach(topic => {
    topic.attributes.dxp_page_content.layouts[0].content.main[0].contentItem.content.displayConfiguration.searchQuery = topic.newQuery;
    delete topic.newQuery;
    console.log(topic.attributes.dxp_page_content.layouts[0].content.main[0].contentItem.content.displayConfiguration.searchQuery);
  });

  // const patchData = await patchTopicData(apiPageData, MGT_API, REQUEST_PROPS, true, "PATCH");







  

  // Are we setting a version or content?
  const UPDATEVERSION = false;
  const UPDATECONTENT = true;

  const COMPONENT = "stanford-components/topic-subtopic-listing";
  const VERSION = "0.0.13";


  const searchQuery = `?profile=stanford-report-push-search
                        &collection=sug~sp-stanford-report-search
                        &sort=title
                        {&meta_isTeaser_not=false}
                        &meta_taxonomyContentCategoryId={topicid}`;

  // the dot notation location of where we need to set the data
  const datamodel = "attributes?.dxp_page_content?.layouts?[0]?.content?.main?[0]?.contentItem?.content?.displayConfiguration?.searchQuery";




})();
