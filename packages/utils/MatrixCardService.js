import resolveAssetUri from "./resolveAssetUri";
import formatCardDataMatrix from "./formatCardDataMatrix";

export default class MatrixCardService {
  constructor({ ctx, API_IDENTIFIER }) {
    this.ctx = ctx;
    this.API_IDENTIFIER = API_IDENTIFIER;
  }

  async getCards(cards) {
    const cardsData = [];
    // Resolve the data for each of the cards
    for (let index = 0; index < cards.length; index++) {
      // Get our current card
      const card = cards[index];

      // Reassign the card data as our current card
      cardsData[index] = resolveAssetUri({
        ctx: this.ctx,
        assetUri: card.cardAsset,
        API_IDENTIFIER: this.API_IDENTIFIER,
      });
    }

    return Promise.all(cardsData)
      .then((data) => data.map((cardData) => formatCardDataMatrix(cardData)))
      .catch((error) => {
        throw new Error(
          `There was an error formatting the card data: ${error}`
        );
      });
  }
}
