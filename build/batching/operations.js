import fs from "fs";
import fetch from "node-fetch";


export async function fetchTopicData() {
  const response = await fetch("https://sug-web.matrix.squiz.cloud/__data/assets/js_file/0027/128736/topics.js");
  const data = await response.json();
  return data;
};


export async function filterData(topics) {
 // we need to exclude all top level section pages
    // All section pages have a group: "28170" value
  const output = [];
  Object.entries(topics).forEach(([key, value]) => {
    // if it is not a section page
    if(value.group !== "28170"){
      output.push(value);
    }
  });

  return output;
}

export async function writeTopicBackup(jsonData) {
  const data = JSON.stringify(jsonData);
  fs.writeFile('./build/batching/backups/topic-data-backup.json', data, (err) => {
    if (err) throw err;
    console.log('Data has been saved to ./build/batching/backups/topic-data-backup.json');
    return;
  });
}


export async function preparedData(topicsArr, mgt_api, requestProps, log = true) {
      // create a promise array
      const promises = topicsArr.map(async (topic) => {
        const url = `${mgt_api}${topic.target_id}`;

        const res = await fetch(url, requestProps).catch((error) => {
          throw new Error(error);
        });
        const json = await res.json();

        const query = json.attributes?.dxp_page_content?.layouts[0]?.content?.main[0]?.contentItem?.content?.displayConfiguration?.searchQuery;
        let cleanQuery = query
          .replace("&meta_isTeaser_not=false", "")
          .replace("&sort=title", "")
          .replace("&sort=date", "");

        // add sorting
        cleanQuery += "&sort=date";
        json.newQuery = cleanQuery;

        return json;
      });

      // Wait for all promises to resolve before continuing
      return Promise.all(promises);
  
}


export async function patchTopicData(topicsArr, mgt_api, requestProps, log = true, method = "GET") {
      // create a promise array
      requestProps.method = method;
      const promises = topicsArr.map(async (topic) => {
        const url = `${mgt_api}${topic.target_id}`;

        requestProps.body = JSON.strinfigy(topic);

         const res = await fetch(url, requestProps).catch((error) => {
           throw new Error(error);
         });
        const json = await res.json();

        return json;
      });

      // Wait for all promises to resolve before continuing
      return Promise.all(promises);
  
}
