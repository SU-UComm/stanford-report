import fetch from "node-fetch";
import formatCardDataFunnelback from "./formatCardDataFunnelback";

export default class FunnelbackCardService {
  constructor({ FB_JSON_URL, query }) {
    this.FB_JSON_URL = FB_JSON_URL;
    this.query = query;
  }

  /**
   * will be injected into the adapter's instance
   * to get all card data
   *
   * @returns {array}
   */
  async getCards() {
    const res = await fetch(this.FB_JSON_URL + this.query).catch((error) => {
      throw new Error(error);
    });

    const json = await res.json();

    return Promise.all(json.response.resultPacket.results)
      .then((data) => data.map((card) => formatCardDataFunnelback(card)))
      .catch((error) => {
        throw new Error(error);
      });
  }
}
