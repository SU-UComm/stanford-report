import formatMediaCardDataMatrix from "./formatMediaCardDataMatrix";

export default class MatrixMediaCardService {
  constructor({ ctx, API_IDENTIFIER }) {
    this.ctx = ctx;
    this.API_IDENTIFIER = API_IDENTIFIER;
  }

  formatMatrixURItoID(cards) {
    const newCards = [];

    cards.forEach((card) => {
      newCards.push(
        card.cardAsset.replace(`matrix-asset://${this.API_IDENTIFIER}/`, "")
      );
    });

    return newCards;
  }

  formatCardIDsToCSV(cards) {
    return cards.join(",");
  }

  async getCards(cards) {
    const cardIDsArray = this.formatMatrixURItoID(cards);
    const cardIDs = this.formatCardIDsToCSV(cardIDsArray);
    const query = `${this.BASE_DOMAIN}_api/mx/cards?cards=${cardIDs}`;

    const res = await fetch(query).catch((error) => {
      throw new Error(error);
    });

    const json = await res.json();
    console.log(json);
    return Promise.all(json)
      .then((data) => data.map((card) => formatMediaCardDataMatrix(card)))
      .catch((error) => {
        throw new Error(error);
      });
  }
}
