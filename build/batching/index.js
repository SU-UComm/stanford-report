import { fetchTopicData, prepareData } from "./operations.js";

(async () => {
  
  //
  // special handling for Topic pages
  //
  // use the topics JSON dataset to find all of the pages we need
  // the batching requires an array of IDs
  // the topicData objects contain a target_id that are the IDs we need (they are the pages we want to update)
  const topicData = await fetchTopicData();
  const dataArray = await prepareData(topicData);
  console.log(dataArray.length);


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
