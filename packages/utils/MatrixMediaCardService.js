import basicAssetUri from "./basicAssetUri";

function formatMediaCardDataMatrix(cardData) {
  const { title } = cardData;
  const liveUrl = cardData.linkUrl?.url;
  const description = cardData.teaserText;
  const imageUrl = cardData.image?.url;
  const imageAlt = cardData.image?.attributes?.alt;
  const taxonomy =
    cardData.cardType === "Book" ? "Featured reading" : "Featured audio";
  const taxonomyUrl = undefined;
  const type = cardData.cardType;
  const videoUrl = undefined;
  const date = undefined;

  return {
    title,
    liveUrl,
    description,
    imageUrl,
    imageAlt,
    taxonomy,
    taxonomyUrl,
    type,
    videoUrl,
    date,
  };
}

export default async function MatrixMediaCardService(ctx, cards) {
  const cardsData = [];
  // Resolve the data for each of the cards
  for (let index = 0; index < cards.length; index++) {
    const newCardData = {};

    // Get our current card
    const card = cards[parseInt(index, 10)];

    newCardData.cardType = card.cardType;
    newCardData.title = card.title;
    newCardData.author = card.author;
    newCardData.teaserText = card.teaserText;

    if (card.image !== undefined && card.image !== "") {
      // Reassign the card data image
      newCardData.image = basicAssetUri({
        ctx: this.ctx,
        assetUri: card.image,
        API_IDENTIFIER: this.API_IDENTIFIER,
      });
    } else {
      newCardData.image = undefined;
    }

    if (card.linkUrl !== undefined && card.linkUrl !== "") {
      // Reassign the card data image
      newCardData.linkUrl = basicAssetUri({
        ctx: this.ctx,
        assetUri: card.linkUrl,
        API_IDENTIFIER: this.API_IDENTIFIER,
      });
    } else {
      newCardData.linkUrl = undefined;
    }

    console.log(newCardData);

    cardsData.push(newCardData);
  }

  return Promise.all(cardsData)
    .then((data) => data.map((cardData) => formatMediaCardDataMatrix(cardData)))
    .catch((error) => {
      throw new Error(`There was an error formatting the card data: ${error}`);
    });
}
