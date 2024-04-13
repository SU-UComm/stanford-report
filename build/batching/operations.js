import fetch from "node-fetch";


export async function fetchTopicData() {
  const response = await fetch("https://sug-web.matrix.squiz.cloud/__data/assets/js_file/0027/128736/topics.js");
  const data = await response.json();
  return data;
};


export async function prepareData(topics) {

  const output = Object.entries(topics).map(([key, value]) => {
    return value;
  });

  return output;
}
