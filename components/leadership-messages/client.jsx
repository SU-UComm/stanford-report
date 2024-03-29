import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";
import FetchAdapter from "../../packages/utils/fetchAdapter";
import translatePersonalisationProfile from "../../packages/utils/translatePersonalisationProfile";
import formatCardDataFunnelback from "../../packages/utils/formatCardDataFunnelback";
import getCookie from "../../packages/utils/cookieGet";

(async function () {
  const element = document.querySelector(
    `[data-hydration-component="leadership-messages"]`
  );
  if (!element) return;

  // Get our current props
  const props = JSON.parse(element.getAttribute("data-hydration-props"));

  // Check if we're rendering frontend, rather than backend (we won't have data)
  if (props.data === undefined) {
    const audienceCookie = getCookie("preferences_personalisation");
    const audience = translatePersonalisationProfile(audienceCookie);
    const adapter = new FetchAdapter();

    // Construct the FB URL
    let fbUrl = "";
    if (props.search) {
      fbUrl = `${props.search.endpoint?.replace(
        "search.html",
        "search.json"
      )}?profile=${props.search.profile}&query=%21null&collection=${
        props.search.collection
      }&meta_taxonomyContentTypeText=Leadership%20messages&sort=date&meta_taxonomyAudienceText=${audience}&num_ranks=6&meta_id_not=${
        props.search.currentPage
      }`;
    }

    // Check if we have a URL to fetch data from
    if (fbUrl !== "") {
      adapter.url = fbUrl;

      const resultsData = await adapter.fetch();
      const data = [];
      if (resultsData.response?.resultPacket?.results.length > 0) {
        resultsData.response.resultPacket.results.forEach((card) => {
          data.push(formatCardDataFunnelback(card));
        });
      }

      // Set our props with the fetched data
      props.data = data;
      element.setAttribute("data-hydration-props", JSON.stringify(props));
    }
  }

  // Hydrate the component
  hydrateComponent({ Component, componentName: "leadership-messages" });
})();
