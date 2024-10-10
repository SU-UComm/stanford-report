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
  // For local dev, set navURL to navURL = `https://news.stanford.edu/_api/dev/mx/menu?loc=${parent}`;
  // the /dev in the URL avoids CORS errors locally.
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

  // Combine props and navData
  props.navData = navData;

  base.setAttribute("data-hydration-props", JSON.stringify(props));

  // Hydrate the component
  hydrateComponent({ Component, componentName });
})();
