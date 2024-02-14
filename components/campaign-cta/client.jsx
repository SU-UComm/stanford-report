import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";

(function () {
  const componentName = "campaign-cta";
  const campaignCta = document.querySelector(
    `[data-hydration-component="${componentName}"]`
  );

  if (!campaignCta) return;

  hydrateComponent({ Component, componentName });
})();
