export default class MatrixCardService {
  constructor({ ctx, API_IDENTIFIER }) {
    this.ctx = ctx;
    this.API_IDENTIFIER = API_IDENTIFIER;
  }

  async getCards(cardInfo) {
    const {
      featured: featuredUri,
      supporting1: supportingOneUri,
      supporting2: supportingTwoUri,
    } = cardInfo;

    const featured = this.ctx.resolveUri(featuredUri);
    const supporting1 = this.ctx.resolveUri(supportingOneUri);
    const supporting2 = this.ctx.resolveUri(supportingTwoUri);

    return Promise.all([featured, supporting1, supporting2])
      .catch((error) => {
        throw new Error(`Error fetching Data in Matrix Card Service: ${error}`);
      })
      .then((data) => {
        return {
          featured: data.at(0),
          supporting1: data.at(1),
          supporting2: data.at(2),
        };
      });
  }
}
