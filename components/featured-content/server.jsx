import fetch from "node-fetch";
import { renderComponent } from "@squiz/xaccel-component-server-helpers";
import Component from "./Component";

export default async (args, info) => {
  const { CONTENT_API, CONTENT_API_KEY, FB_JSON_URL } = info.set.environment;
  let data = null;

  // check what data source "Search" or "Select"
  if (args.source.toLowerCase() === "search") {
    // compose and fetch the FB search results
    const searchUrl = `${args.searchUrl}${args.searchQuery}`;
    const fetchData = await fetch(searchUrl);
    data = await fetchData.json();

    // WE NEED A UTIL that can return formatted JSON data
    // eg returns array of formatted results suitable for cards formatCardDataFunnelback( data);
  }
  // When Select, use Matix Content API
  else if (args.source.toLowerCase() === "select") {
    // get our data from the Content API
    // args.featured
    // arg.supporting_01
    // arg.supporting_02

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
