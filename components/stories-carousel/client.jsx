import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";
import FetchAdapter from "../../packages/utils/fetchAdapter";
import translatePersonalisationProfile from "../../packages/utils/translatePersonalisationProfile";
import formatCardDataFunnelback from "../../packages/utils/formatCardDataFunnelback";
import getCookie from "../../packages/utils/cookieGet";

(async function () {
  const element = document.querySelector(
    `[data-hydration-component="stories-carousel"]`
  );
  const MAX_CARDS = 6;
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
    let fallbackFbUrl = "";
    if (props.search) {
      fbUrl = `${props.search.endpoint?.replace(
        "search.html",
        "search.json"
      )}?profile=${props.search.profile}&collection=${props.search.collection}${
        props.search.maintopic?.asset_name !== ""
          ? `&meta_taxonomyContentMainTopicId=${props.search.maintopic?.asset_assetid}`
          : ""
      }&meta_taxonomyAudienceText=${audience}&meta_taxonomyContentTypeId_not=28210&meta_taxonomyContentTypeId_not=28216&meta_taxonomyContentTypeId_not=28201
      &num_ranks=${MAX_CARDS}&sort=date&meta_id_not=${
        props.search.currentPage
      }`;

      fallbackFbUrl = `${props.search.endpoint?.replace(
        "search.html",
        "search.json"
      )}?profile=${props.search.profile}&collection=${
        props.search.collection
      }&meta_taxonomyContentTypeId_not=28210&meta_taxonomyContentTypeId_not=28216&meta_taxonomyContentTypeId_not=28201
      &num_ranks=12&sort=date&meta_id_not=${props.search.currentPage}`;
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

      if (data.length < MAX_CARDS) {
        adapter.url = fallbackFbUrl;

        const resultsFallbackData = await adapter.fetch();
        if (resultsFallbackData.response?.resultPacket?.results.length > 0) {
          resultsFallbackData.response.resultPacket.results.forEach((card) => {
            let notDuplicateCard = true;
            data.forEach((item) => {
              if (item.liveUrl === card.liveUrl) notDuplicateCard = false;
            });

            if (notDuplicateCard && data.length < MAX_CARDS) {
              data.push(formatCardDataFunnelback(card));
            }
          });
        }
      }

      // Set our props with the fetched data
      props.data = data;
      element.setAttribute("data-hydration-props", JSON.stringify(props));
    }
  }

  // Hydrate the component
  hydrateComponent({ Component, componentName: "stories-carousel" });
})();
