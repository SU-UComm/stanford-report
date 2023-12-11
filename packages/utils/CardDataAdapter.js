import fetch from "node-fetch";
import formatCardDataFunnelback from "./formatCardDataFunnelback";
import formatCardDataMatrix from "./formatCardDataMatrix";
import formatCardDataEvents from "./formatCardDataEvents";

/**
 * Orchestrates the transformation of data from
 * various endpoints
 */
export default class CardDataAdapter {
  constructor(url, type) {
    this.url = url;
    this.type = type;

    this.assetData = "";
    this.assetIds = [];
    this.requestProps = {};
  }

  /**
   * A collection of Matrix asset ids
   *
   * @param  {...any} assets
   * a list of asset ids
   *
   * @returns {self}
   */
  assets(...assets) {
    this.assetIds = assets;

    return this;
  }

  /**
   * The data to return from the Matrix
   * endpoint: "thumbnail", "metadata", etc...
   *
   * @param  {...string} data
   *
   * @returns {self}
   */
  data(...data) {
    this.assetData = data.join(",");
    return this;
  }

  /**
   * What props to pass to the fetch request
   *
   * @param {object} props
   *
   * @returns {self}
   */
  request(props) {
    this.requestProps = props;

    return this;
  }

  _noResponse() {
    return {
      title: "",
      description: "",
      liveUrl: null,
      imageUrl: null,
      imageAlt: null,
      taxonomy: null,
      taxonomyUrl: null,
      type: null,
      videoUrl: null,
      date: null,
    };
  }

  /**
   * Fetches card data from selected endpoints, transforms
   * it and then outputs an array of transformed data
   *
   * @return {array}
   */
  async fetch() {
    const formattedData = [];

    if (this.type === "MX") {
      const promises = this.assetIds.map(async (assetid) => {
        const url = `${this.url}/${assetid}?data=${this.assetData}`;

        const res = await fetch(url, this.requestProps).catch((error) => {
          throw new Error(error);
        });

        const json = await res.json();
        return formatCardDataMatrix(json);
      });

      // Wait for all promises to resolve before continuing
      return Promise.all(promises);
    }

    if (this.type === "FB") {
      const res = await fetch(this.url, this.requestProps).catch((error) => {
        throw new Error(error);
      });

      const json = await res.json();

      if (!json.response.resultPacket.results.length) {
        return formattedData;
      }

      json.response.resultPacket.results.forEach((result) => {
        formattedData.push(formatCardDataFunnelback(result));
      });
    }

    if (this.type === "Events") {
      const res = await fetch(this.url, this.requestProps).catch((error) => {
        throw new Error(error);
      });

      const json = await res.json();

      json.events.forEach((event) => {
        formattedData.push(formatCardDataEvents(event));
      });
    }

    return formattedData;
  }
}
