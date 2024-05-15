import formatCardDataMatrix from "./formatCardDataMatrix";

export default class MatrixCardService {
  constructor({ BASE_DOMAIN, API_IDENTIFIER }) {
    this.BASE_DOMAIN = BASE_DOMAIN;
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

    return Promise.all(json)
      .then((data) => data.map((card) => formatCardDataMatrix(card)))
      .catch((error) => {
        throw new Error(error);
      });
  }
}
