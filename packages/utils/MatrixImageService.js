import resolveAssetUri from "./resolveAssetUri";
// import formatCardDataMatrix from "./formatCardDataMatrix";

function formatImageData(props) {
  console.log(JSON.stringify(props));
  const { attributes, metadata, url } = props;
  const title = attributes.name;
  const liveUrl = url;

  const returnData = {
    title,
    liveUrl,
  };

  return returnData;
}

export default class MatrixImageService {
  constructor({ ctx, API_IDENTIFIER }) {
    this.ctx = ctx;
    this.API_IDENTIFIER = API_IDENTIFIER;
  }

  async getCards(images) {
    const imagesData = [];
    // Resolve the data for each of the cards
    for (let index = 0; index < images.length; index++) {
      // Get our current card
      const img = images[parseInt(index, 10)];

      console.log(
        JSON.stringify({
          ctx: this.ctx,
          assetUri: img.image,
          API_IDENTIFIER: this.API_IDENTIFIER,
        })
      );

      // Reassign the card data as our current card
      imagesData[parseInt(index, 10)] = resolveAssetUri({
        ctx: this.ctx,
        assetUri: img.image,
        API_IDENTIFIER: this.API_IDENTIFIER,
      });
    }

    console.log(JSON.stringify(imagesData));

    // return Promise.all(imagesData)
    //   .then((data) => data.map((imageData) => formatImageData(imagesData)))
    //   .catch((error) => {
    //     throw new Error(
    //       `There was an error formatting the image data: ${error}`
    //     );
    //   });
  }
}
