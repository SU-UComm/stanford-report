import fetch from "node-fetch";
import formatCardDataFunnelback from "./formatCardDataFunnelback";
import formatCardDataMatrix from "./formatCardDataMatrix";

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

  /**
   * Fetches data from the endpoint one by one and
   * transforms it
   *
   * @param {CallableFunction} callback
   * Transformed data output wrapper
   *
   * @return {array}
   */
  async fetch() {
    const formattedData = [];

    if (this.type === "MX") {
      this.assetIds.forEach(async (assetid) => {
        const url = `${this.url}/${assetid}?data=${this.assetData}`;

        const res = await fetch(url, this.requestProps).catch((error) => {
          throw new Error(error);
        });

        const json = await res.json();

        formattedData.push(formatCardDataMatrix(json));
      });

      return formattedData;
    }

    const res = await fetch(this.url, this.requestProps).catch((error) => {
      throw new Error(error);
    });

    const json = await res.json();

    json.response.resultPacket.results.forEach((result) => {
      formattedData.push(formatCardDataFunnelback(result));
    });

    return formattedData;
  }
}
