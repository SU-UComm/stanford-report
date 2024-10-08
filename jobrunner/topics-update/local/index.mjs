import job from "../main";

async function runJobLocally() {
  // replicate job runners context.environment
  const context = {
    environment: {
      FB_SEARCH_ENDPOINT: process.env.FB_SEARCH_ENDPOINT,
    },
  };

  // replicate job runners input
  const input = {
    topicId: "--28417--",
  };
  // run the job!
  job(input, context);
}

runJobLocally();
