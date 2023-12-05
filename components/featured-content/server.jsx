import { renderComponent } from "@squiz/xaccel-component-server-helpers";
import Component from "./Component";
import CardDataAdapter from "../../packages/utils/CardDataAdapter";

export default async (args, info) => {
  const { CONTENT_API, CONTENT_API_KEY, FB_JSON_URL } = info.set.environment;
  // console.log(`######${JSON.stringify(info)}`);
  let data = null;

  // check what data source "Search" or "Select"
  if (args.source.toLowerCase() === "search") {
    // compose and fetch the FB search results
    const adapter = new CardDataAdapter(FB_JSON_URL + args.searchQuery, "FB");

    data = await adapter.fetch();
  }
  // When Select, use Matix Content API
  else if (args.source.toLowerCase() === "select") {
    // get our data from the Content API
    const adapter = new CardDataAdapter(CONTENT_API, "MX");

    adapter
      .assets(args.featured, args.supporting_01, args.supporting_02)
      .data("metadata", "attributes", "urls", "thumbnail")
      .request({
        headers: {
          Authorization: CONTENT_API_KEY,
        },
      });

    data = await adapter.fetch();

    data = [
      {
        title: "Seeing the oceans in a new light",
        description:
          "Halleh Balch, an experimental physicist in the Dionne lab at Stanford, has developed a thumbnail-sized optical sensor that can track the health of marine ecosystems in near-real time through quick detection of environmental DNA. It could be a critical tool for natural resource managers in the face of climate change impacts like coral bleaching, warming seas, and migration of species.",
        liveUrl: "#",
        imageUrl: "https://picsum.photos/500/330",
        imageAlt: "Lorem ipsum dolor sit amet",
        taxonomy: "Earth & Climate",
        taxonomyUrl: "#",
        type: "Article",
      },
      {
        title: "Jenny Martinez, Stanford's new provost, on work and whimsy",
        liveUrl: "#",
        imageUrl: "https://picsum.photos/500/330",
        imageAlt: "Lorem ipsum dolor sit amet",
        taxonomy: "Leadership & Governance",
        taxonomyUrl: "#",
        type: "Q & A",
      },
      {
        title: "Meet the robot that can sort your random stuff",
        liveUrl: "#",
        imageUrl: "https://picsum.photos/500/330",
        imageAlt: "Lorem ipsum dolor sit amet",
        taxonomy: "Science & Engineering",
        taxonomyUrl: "#",
        type: "Article",
      },
    ];
  }

  const fbArgs = {
    ...args,
    data,
  };

  return renderComponent({
    Component,
    componentName: "featured-content",
    args: fbArgs,
  });
};
