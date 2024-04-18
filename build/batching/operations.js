import fs from "fs";
import fetch from "node-fetch";


export async function fetchTopicData() {
  const response = await fetch("https://sug-web.matrix.squiz.cloud/__data/assets/js_file/0027/128736/topics.js");
  const data = await response.json();
  return data;
};


export async function filterData(topics, type = null) {
  // type = ["content_type", "featured_unit", "content_topic"]
  // we need to exclude all top level section pages
  // All section pages have a group: "28170" value
  const output = [];
  Object.entries(topics).forEach(([key, value]) => {
    //
    // MAKE SURE WE DO NOT OVERRIDE SECTION PAGES (the main top level pages)
    // Each section page has a group value of 28170
    // 
    if(value.group !== "28170"){

      // if we have passed a type filter in, we only want to return that type
      if( type ) {
        if( type && type === value.type ) {
          output.push(value);
        }
      } else {
        output.push(value);
      }
    
    }
  });

  return output;
}

export async function writeTopicBackup(jsonData) {
  const data = JSON.stringify(jsonData);
  const timestamp = Date.now();
  fs.writeFile(`./build/batching/backups/${timestamp}-topic-data-backup.json`, data, (err) => {
    if (err) throw err;
    console.log(`Backup data has been saved to ./build/batching/backups/${timestamp}-topic-data-backup.json`);
    return;
  });
}


export async function prepareData(topicsArr, mgt_api, requestProps) {
      // create a promise array
      const promises = topicsArr.map(async (topic) => {
        const url = `${mgt_api}${topic.target_id}`;
        // fetch initial topic page data
        const res = await fetch(url, requestProps).catch((error) => {
          throw new Error(error);
        });
        const json = await res.json();

        // filter out and rework the FB queries
        const query = json.attributes?.dxp_page_content?.layouts[0]?.content?.main[0]?.contentItem?.content?.displayConfiguration?.searchQuery;
        let cleanQuery = query
          .replace("&meta_isTeaser_not=false", "")
          .replace("&sort=title", "")
          .replace("&sort=date", "");

          // other possible filters we may need to add
          // exclude Announcement #28210
          //&meta_taxonomyContentTypeId_not=28210
          // Exclude In the News #28216
          //&meta_taxonomyContentTypeId_not=28216
          // exclude Leadership Messages #28201
          //&meta_taxonomyContentTypeId_not=28201

        // add sorting
        cleanQuery += "&sort=date";
        // add a temp value (it is removed later)
        json.newQuery = cleanQuery;

        // return the modified json
        return json;
      });

      // Wait for all promises to resolve before continuing
      return Promise.all(promises);
}


export async function patchTopicData(topicsArr, mgt_api, requestProps) {
      // create a promise array
      requestProps.method = "PATCH";

      const promises = topicsArr.map(async (topic) => {
        const url = `${mgt_api}${topic.id}`;

        requestProps.body = JSON.stringify(topic);
         const res = await fetch(url, requestProps).catch((error) => {
           throw new Error(error);
         });
        const json = await res.json();
        console.log(`${topic.id} written.`);
        return json;
      });

      // Wait for all promises to resolve before continuing
      return Promise.all(promises);
}
