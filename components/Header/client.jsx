import hydrateComponent from "../../packages/utils/hydrate-component";
import Component from "./Component";
import getCookie from "../../packages/utils/cookieGet";
import relatedStoryData from "./scripts/relatedStory";

import _preferencesSettings from "./scripts/preferenceSettings";
import ReportHeader from "./scripts/reportHeader";

(async function () {
  const target = "header-component";
  const element = document.querySelector(
    `[data-hydration-component="${target}"]`
  );
  if (!element) return;

  // const props = JSON.parse(element.getAttribute("data-hydration-props"));
  const props = {};

  const pageData =
    typeof window.pageController !== "undefined" ? window.pageController : null;
  props.pageData = pageData;

  const cdpConsentCookie = JSON.parse(getCookie("squiz.cdp.consent"));
  // do we have consent data
  props.consentData = cdpConsentCookie?.CDPConsent;

  const audienceData = getCookie("preferences_personalisation");
  props.audienceData = audienceData;
  if (audienceData === "null") {
    props.audienceData = null;
  }
  if (pageData?.isStory) {
    const fbStoryData = await relatedStoryData(pageData, audienceData);
    props.relatedStoryData = fbStoryData;
  }
  // set the props we need, to a window variable
  window.suHeaderProps = props;
  // update the props
  // element.setAttribute("data-hydration-props", JSON.stringify(props));

  // Hydrate the component
  hydrateComponent({ Component, componentName: target });

  setTimeout(() => {
    console.log("setTimeout ran");
    const headerDom = document.querySelector(".report-header");
    const initHeader = new ReportHeader(headerDom);
    _preferencesSettings();
  }, "100");
})();
