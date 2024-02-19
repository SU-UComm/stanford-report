import hydrateComponent from "../../packages/utils/hydrate-component";
import Component from "./Component";
import _preferencesSettings from "./scripts/preferenceSettings";
import ReportHeader from "./scripts/reportHeader";

(function () {
  const componentName = "header-component";
  const target = document.querySelector(
    `[data-hydration-component="${componentName}"]`
  );

  if (!target) return;

  const headerDom = document.querySelector(".report-header");
  const initHeader = new ReportHeader(headerDom);
  _preferencesSettings();
  hydrateComponent({ Component, componentName });
})();
