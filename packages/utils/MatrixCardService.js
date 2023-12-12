import formatCardDataMatrix from "./formatCardDataMatrix";

export default class MatrixCardService {
  constructor({ ctx, API_IDENTIFIER }) {
    this.ctx = ctx;
    this.API_IDENTIFIER = API_IDENTIFIER;
  }

  async getCards(cards) {
    // Get the API Identifier
    const identifier = cards.at(0).cardAsset.split('/').at(2);

    // Resolve the data for each of the cards
    for (let index = 0; index < cards.length; index++) {
      const card = cards[index];

      // Resolve the data for the card
      card.data = await this.ctx.resolveUri(card.cardAsset);

      // Resolve the image asset id
      const imageIds = card?.data?.metadata?.featuredImage;
      const imageUris = imageIds.map((imageId) => `matrix-asset://${identifier}/${imageId}`);
      const imageData = await Promise.all(imageUris.map((uri) => this.ctx.resolveUri(uri)));
      card.data.metadata.featuredImage = imageData;

      // After we have done all our data fetching transform the card data to the shape we expect
      card.data = formatCardDataMatrix(card.data);
    }

    return cards.map(({data}) => data);
  }
}
