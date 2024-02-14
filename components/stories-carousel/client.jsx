import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";
import FetchAdapter from "../../packages/utils/fetchAdapter";
import translatePersonalisationProfile from "../../packages/utils/translatePersonalisationProfile";
import formatCardDataFunnelback from "../../packages/utils/formatCardDataFunnelback";

(async function () {
  const element = document.querySelector(
    `[data-hydration-component="stories-carousel"]`
  );
  if (!element) return;

  const props = JSON.parse(element.getAttribute("data-hydration-props"));

  // Check if we're rendering frontend, rather than backend
  if (props.data === undefined) {
    const adapter = new FetchAdapter();

    // if (pageData && search) {
    // const fbUrl = `${search.endpoint?.replace(
    //   "search.html",
    //   "search.json"
    // )}?profile=${search.profile}&query=%21null&collection=${
    //   search.collection
    // }&meta_taxonomyContentMainTopicText=${
    //   pageData.mainTopic
    // }&meta_taxonomyAudienceText=${translatePersonalisationProfile(
    //   audience
    // )}&num_ranks=1&meta_id_not=${pageData.id}`;

    // }

    const fbUrl =
      "https://dxp-us-search.funnelback.squiz.cloud/s/search.json?collection=sug~sp-stanford-report-search&profile=stanford-report-push-search_preview&log=false&query=!null";
    adapter.url = fbUrl;

    const resultsData = await adapter.fetch();
    const data = [];
    if (resultsData.response?.resultPacket?.results.length > 0) {
      resultsData.response.resultPacket.results.forEach((card) => {
        data.push(formatCardDataFunnelback(card));
      });
    }
    props.data = data;
    element.setAttribute("data-hydration-props", JSON.stringify(props));

    hydrateComponent({ Component, componentName: "stories-carousel" });
  }
})();
