//

// Handle requests to Funnelback
async function getTopicStoriesFromFunnelback(endpoint, topicId) {
  try {
    const query = `${endpoint}?profile=stanford-report-push-search&collection=sug~sp-stanford-report-search&query=[taxonomyContentMainTopicId:${topicId} taxonomyContentTopicsId:${topicId} taxonomyContentSubtopicsId:${topicId}]&num_ranks=1000&sort=date&log=false`;
    const res = await fetch(`${query}`);
    return await res.json();
  } catch (err) {
    console.log(err);
  }
}

// make the PUT request using the fetched XML data in the payload
async function setMxFbUpdate(id) {
  try {
    //
    const myHeaders = new Headers();
    myHeaders.append("pragma", "no-cache");
    myHeaders.append("cache-control", "no-cache");
    const query = `?jrprompt=true&job=jr-su-topic-edit&storyid=${id}`;
    const response = await fetch(
      `https://news.stanford.edu/_designs/integration-points/funnelback/force-push-update-proxy${query}`,
      {
        method: "GET",
        headers: {
          "cache-control": "no-cache",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Error uploading data for ID: ${id}`);
    }
    return response.json();
  } catch (err) {
    console.log("error", err);
  }
}

// Function to process the GET and PUT requests concurrently with a limit
async function processRequests(data, concurrencyLimit = 1, envVars) {
  const executing = []; // Array to track ongoing requests

  const fbData = data.map((item) => {
    return {
      id: item.listMetadata.id[0],
      key: item.indexUrl,
    };
  });
  console.log("originals", JSON.stringify(fbData));

  const mxPayload = {
    metadata_values: {
      forceSearchUpdate: {
        type: "metadata_field_select",
        value: "true",
      },
    },
  };
  for (const item of fbData) {
    const task = (async () => {
      try {
        await setMxFbUpdate(item.id, envVars, mxPayload);
        console.log("processed", item.id);
      } catch (error) {
        console.error(`Error processing ID ${item.id}:`, error);
      }
    })();

    executing.push(task);

    // If we've reached the concurrency limit, wait for one of the requests to complete
    if (executing.length >= concurrencyLimit) {
      await Promise.race(executing);
      executing.splice(executing.indexOf(Promise.race(executing)), 1); // Remove completed task
    }
  }

  // Wait for all remaining requests to finish
  await Promise.all(executing);
}

module.exports = async function (input, context) {
  // Some error handling
  if (!input) {
    console.error("Error: input is missing/not defined");
    return;
  }
  if (!context || !context.environment) {
    console.error("Error: context is missing/not defined");
    return;
  }

  try {
    // source our input variables
    const { topicId = null } = input;
    // source environment variables
    const envVars = context.environment;
    console.log("Topic Id:", topicId);
    // fetch the Story FB results that use the Topic ID
    const fbData = await getTopicStoriesFromFunnelback(
      envVars.FB_SEARCH_ENDPOINT,
      topicId
    );
    const storiesToUpdate = fbData?.response?.resultPacket?.results;

    // finish if there are no stories to update
    if (!storiesToUpdate || storiesToUpdate.length === 0) {
      console.log("No Stories to update. Finishing job");
      return;
    }

    console.log("stories matching", storiesToUpdate.length);

    await processRequests(storiesToUpdate, 1, envVars);
    console.log("All requests completed");
  } catch (err) {
    console.log(err);
  }
};
