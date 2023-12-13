import resolveAssetUri from "./assetResolver";
import formatCardDataMatrix from "./formatCardDataMatrix";

export default class MatrixCardService {
  constructor({ ctx, API_IDENTIFIER }) {
    this.ctx = ctx;
    this.API_IDENTIFIER = API_IDENTIFIER;
  }

  async getCards(cards) {
    // Resolve the data for each of the cards
    for (let index = 0; index < cards.length; index++) {
      const card = cards[index];

      card.data = await resolveAssetUri({ctx: this.ctx, assetUri: card });

      // After we have done all our data fetching transform the card data to the shape we expect
      card.data = formatCardDataMatrix(card.data);
    }

    return cards.map(({data}) => data);
  }
}
