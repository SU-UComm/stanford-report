import hydrateComponent from "../../packages/utils/hydrate-component";
import Component from "./Component";
import getCookie from "../../packages/utils/cookieGet";
import relatedStoryData from "./scripts/relatedStory";

// eslint-disable-next-line func-names
(async function () {
  const target = "header-component";
  const element = document.querySelector(
    `[data-hydration-component="${target}"]`
  );
  if (!element) return;

  const props = {};

  const pageData =
    typeof window.pageController !== "undefined" ? window.pageController : null;
  props.pageData = pageData;

  const cdpConsentCookie = JSON.parse(getCookie("squiz.cdp.consent"));
  // do we have consent data
  props.consentData = cdpConsentCookie?.CDPConsent;

  const audienceData = getCookie("preferences_personalisation");
  props.audienceData = audienceData;
  if (audienceData === "null" || !audienceData) {
    props.audienceData = "external";
  }
  if (pageData?.isStory) {
    // const fbStoryData = await relatedStoryData(pageData, audienceData);
    // props.relatedStoryData = fbStoryData;
  }
  // set the props we need, to a window variable
  window.suHeaderProps = props;

  // Hydrate the component
  hydrateComponent({ Component, componentName: target });
})();
