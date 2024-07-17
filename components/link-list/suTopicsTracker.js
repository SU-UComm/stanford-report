(() => {
  // Function to get a cookie value by name
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  // Function to set a cookie
  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value || ""}${expires}; path=/`;
  }
  
  function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }
  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day}${month}${year}`;
  }
  
  // returns an array of the top 5 topics
  function getTopTopics(topics) {
      if (!topics || topics.length === 0) return null;
      const topTopics = topics.filter((topic) => topic.count > 1);
      if (topTopics.length === 0) return null;
      const sorted = topTopics.sort((a, b) => b.count - a.count);
      
      // Return the top 5 topics
      return sorted.slice(0, 5);
  }

  function translatePersonalisationProfile(profile) {
    switch (profile) {
      case "faculty":
        return "Faculty/staff";
      case "student":
        return "Student";
      default:
        return "External";
    }
  }

  // generate the Funnelback query
  function suTrackerGenerateTopicsQuery() {
    const suTopicTracker = JSON.parse(
      getCookie("preferences_topics") || '{"viewed": [], "topics": []}'
    );

    const topTopics = getTopTopics(suTopicTracker.topics);
    // when there are no topics to show
    const noOutput = {
      "behavioural": false,
      "query": null
    }
    if(!topTopics) return noOutput;

    const persona = getCookie("preferences_personalisation");
    const fbUrl = "https://news.stanford.edu/_api/fb/query?profile=stanford-report-push-search&collection=sug~sp-stanford-report-search";
   
    let includeQuery = `&query=[${topTopics.map((item) => `taxonomyContentMainTopicId:${item.id} taxonomyContentTopicsId:${item.id} taxonomyContentSubtopicsId:${item.id} `).join("")}]`;

    // what we dont want
    let excludeQuery = `&query_not=[taxonomyContentTypeId:28210 taxonomyContentTypeId:28216 taxonomyContentTypeId:28201 ${suTopicTracker.viewed.map((item) => `id:${item} `).join("")}]`;

    let personaQuery = `&meta_taxonomyAudienceText=${translatePersonalisationProfile(
        persona
      )}`;

    let configQuery = `&sort=date&log=false`;

    // Today's date
    const today = new Date();
    const todayFormatted = formatDate(today);
    // Date from 2 years ago
    const twoYearsAgo = new Date();
    twoYearsAgo.setFullYear(today.getFullYear() - 2);
    const dateRange = formatDate(twoYearsAgo);

    const dateRangeQuery = `&f.Date%7Cd=d>${dateRange}<${todayFormatted}`;

    const compiledQuery = fbUrl + includeQuery + excludeQuery + personaQuery + configQuery + dateRangeQuery;
    const partialQuery = includeQuery + excludeQuery + personaQuery + configQuery + dateRangeQuery;
    const output = {
      "behavioural": true,
      "query": compiledQuery,
      "partialQuery": partialQuery
    }
    return output;
  }

  // Function to initialize or update the suTopicTracker cookie
  function suTrackerSetTopics() {
    let hasViewedStory = false;
    const suTopicTracker = JSON.parse(
      getCookie("preferences_topics") || '{"viewed": [], "topics": []}'
    );

    if (window.pageController.isStory) {
      const storyId = Number(window.pageController.id);
      if (!suTopicTracker.viewed.includes(storyId)) {
        suTopicTracker.viewed.push(storyId);
      } else {
          // revisited page
          hasViewedStory = true;
      }
    }

    if (window.pageController.mainTopicId) {
        const topicId = Number(window.pageController.mainTopicId);
        const topicName = htmlDecode(window.pageController.mainTopic);
        const topicIndex = suTopicTracker.topics.findIndex((topic) => topic.id === topicId);
        
        if (topicIndex > -1) {
            suTopicTracker.topics[topicIndex].count += 1;
        } else {
            suTopicTracker.topics.push({ id: topicId, count: 1, topic: topicName});
        }
    }
    
    // dont log the same story view more than once
    if (!hasViewedStory){
        setCookie("preferences_topics", JSON.stringify(suTopicTracker), 120);
    }

  }

  // Run the function after the page has loaded
  // window.addEventListener("load", function () {
    if (window.pageController) {
      const cdpConsentCookie = JSON.parse(getCookie("squiz.cdp.consent"));
      // do we have consent data?
      const consented = cdpConsentCookie?.CDPConsent;
      if (consented) {
        suTrackerSetTopics()
      }
      window.pageController.topicsQuery = suTrackerGenerateTopicsQuery;
    }
  // });
})();