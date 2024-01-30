export default function formatCardDataMatrix(cardData) {
  const { title } = cardData;
  const liveUrl = cardData.linkUrl?.url;
  const description = cardData.teaserText;
  const imageUrl = cardData.image?.url;
  const imageAlt = cardData.image?.attributes?.alt;
  const taxonomy =
    cardData.cardType === "Book" ? "Featured reading" : "Featured audio";
  const taxonomyUrl = undefined;
  const type = cardData.cardType;
  const { author } = cardData;
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
    author,
    videoUrl,
    date,
  };
}
