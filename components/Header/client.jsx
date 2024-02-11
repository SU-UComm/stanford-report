import hydrateComponent from "../../packages/utils/hydrate-component";
import Component from "./Component";

import _preferencesSettings from "./scripts/preferenceSettings";
import ReportHeader from "./scripts/reportHeader";

console.log("Header clientside");

const headerDom = document.querySelector(".report-header");
const initHeader = new ReportHeader(headerDom);
_preferencesSettings();

hydrateComponent({ Component, componentName: "header-component" });
