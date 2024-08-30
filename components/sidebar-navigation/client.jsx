import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";
import FetchAdapter from "../../packages/utils/fetchAdapter";

(async function () {
  const componentName = "sidebar-navigation";
  const base = document.querySelector(`[data-component="${componentName}"]`);

  if (!base) return;

  // Get our current props
  const props = JSON.parse(base.getAttribute("data-hydration-props"));

  // Construct call to menu API
  let navURL = "";
  const parent = props.root;
  if (props.root) {
    navURL = `https://news.stanford.edu/_api/dev/mx/menu?loc=${parent}`;
  }

  const adapter = new FetchAdapter();

  if (parent !== "") {
    adapter.url = navURL;
  }

  const navData = await adapter.fetch();

  props.navData = navData;

  base.setAttribute("data-hydration-props", JSON.stringify(props));

  console.log(props);

  // Hydrate the component
  hydrateComponent({ Component, componentName: "sidebar-navigation" });
})();
