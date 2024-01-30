import React from "react";

import { createRoot } from "react-dom/client";
import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import CardDataAdapter from "../../packages/utils/CardDataAdapter";
import FunnelbackCardService from "../../packages/utils/FunnelbackCardService";
import { Carousel } from "../../packages/carousels/Carousel";
import Card from "../../packages/card/Card";
import Component from "./Component";

const initMe = async () => {
  const adapter = new CardDataAdapter();
  let data = null;

  // TODO: update this so its specific to this component
  const jsonData = JSON.parse(
    document.querySelector("[data-hydration-props]").dataset.hydrationProps
  );

  const FB_JSON_URL = jsonData.data.fbJsonUrl;
  const query = jsonData.data.fbQuery;

  // check what data source "Search" or "Select"
  // eslint-disable-next-line no-empty
  // compose and fetch the FB search results
  const service = new FunnelbackCardService({ FB_JSON_URL, query });
  adapter.setCardService(service);
  data = await adapter.getCards();
  const cards = [];
  data.forEach((card) => {
    cards.push(<Card data={card} displayDescription={false} />);
  });

  const root = createRoot(document.querySelector("#FB-CHANGE-ME"));
  root.render(<Carousel variant="cards" slides={cards} />);
};

hydrateComponent({ Component, componentName: "stories-carousel" });
initMe();
