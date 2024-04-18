import { fetchTopicData, filterData, prepareData, writeTopicBackup, patchTopicData } from "./operations.js";
import dotenv from 'dotenv';
dotenv.config();

(async () => {
  const MGT_API = "https://sug-web.matrix.squiz.cloud/__management_api/v1/assets/";
  const REQUEST_PROPS = {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${process.env.MANAGEMENT_API_KEY}`,
      'Content-Type': 'application/json'
    },
  }
  //
  // special handling for Topic pages
  //
  // use the topics JSON dataset to find all of the pages we need
  // the batching requires an array of IDs
  // the topicData objects contain a target_id that are the IDs we need (they are the pages we want to update)
  const topicData = await fetchTopicData();
   // type = ["content_type", "featured_unit", "content_topic"]
  let activeFilter = "featured_unit";
  let filteredTopicData = await filterData(topicData, activeFilter);
  
  filteredTopicData = filteredTopicData.slice(50, 100);
  // filteredTopicData = [
  //   { target_id: "142706" },
  //   { target_id: "134217" },
  //   { target_id: "134236" },
  //   { target_id: "142945" }
  // ];

  console.log(filteredTopicData.length + " results to process for " + activeFilter);

  // prepare the data that we will eventally send
  let apiPageData = await prepareData(filteredTopicData, MGT_API, REQUEST_PROPS, true);
  // good idea to store a backup of the previous version
  await writeTopicBackup(apiPageData);

  // now merge the data
  // if we need to update the component version
  const COMPONENT = "stanford-components/topic-subtopic-listing";
  const VERSION = "0.1.0";

  apiPageData.forEach(topic => {
    // Target our management API content block
    const contentBlockTarget = topic.attributes.dxp_page_content.layouts[0].content.main[0];
    // for topics, set the searchQuery string to the new query
    contentBlockTarget.contentItem.content.displayConfiguration.searchQuery = topic.newQuery;
    // and then delete the temp key
    delete topic.newQuery;

    // set the versioning
    contentBlockTarget.componentId = `${COMPONENT}/${VERSION}`;
    contentBlockTarget.contentItem.schemaName = `${COMPONENT}/${VERSION}/main`;

    // console.log(topic.attributes.dxp_page_content.layouts[0].content.main[0].contentItem);
    // console.log(contentBlockTarget.contentItem.content);
  });

  
  //
  // ###################################
  // ###################################
  // ###################################
  // BEWARE! Read carefully before proceeding
  // ###################################
  // ###################################
  // ###################################
  //
  // By running the following command, you will initiate the batch update to the Matrix management API.
  // It will patch the entire body of a content page to the API, effectively updating the entire asset structure.
  // so, make sure you have the correct data before enabling this line of code
  // 
  // 
  
  // console.log(`About to update ${apiPageData.length} assets.`);
  // console.log("...");
  // const patchData = await patchTopicData(apiPageData, MGT_API, REQUEST_PROPS);
  // console.log(`Patched ${patchData.length} items`);





})();
