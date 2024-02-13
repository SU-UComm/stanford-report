import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";

(function () {
  const campaignCta = document.querySelector(
    `[data-hydration-component="campaign-cta"]`
  );

  if (!campaignCta) return;

  hydrateComponent({ Component, componentName: "campaign-cta" });
})();
