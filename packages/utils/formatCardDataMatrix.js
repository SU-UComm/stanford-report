/**
 * Utility to check for the presence of data.
 *
 * @param {array} arr A matrix metadata field array. Eg: "featuredVideo": [],
 * @returns {string|null}
 */
function dataChecker(arr) {
  return typeof arr !== "undefined" && arr.length > 0 && arr[0] !== ""
    ? arr[0]
    : null;
}

function dataStringChecker(str) {
  return typeof str !== "undefined" && str.length > 0 && str[0] !== ""
    ? str
    : null;
}

/**
 * Card Data formatter - Matrix
 *
 * @param {object} attributes Matrix asset attributes object
 * @param {object} metadata Matrix asset metadata object
 * @param {string} url Matrix asset url
 * @param {object} thumbnail Matrix asset thumbnail object
 * @returns {object}
 */
export default function formatCardDataMatrix(props) {
  const { attributes, metadata, url } = props;
  const title = attributes.name;
  const liveUrl = url;
  const description = dataChecker(metadata.teaser);
  const imageUrl = dataChecker(metadata.featuredImage)?.url;
  const imageAlt = dataChecker(metadata.featuredImage)?.attributes?.alt;
  const taxonomy = dataStringChecker(
    metadata.srContentMainTopic[0]?.short_name
  );
  const taxonomyUrl = dataStringChecker(metadata.taxonomyPageData[0]?.url);
  const type = dataChecker(metadata.srContentType)?.name;
  const videoUrl = dataChecker(metadata.featuredVideo);
  const date = dataChecker(metadata.publishedDate);
  const source = dataChecker(metadata.storySource);
  const author = dataChecker(metadata.contributorsAuthors);
  const returnData = {
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
    source,
    authorName: null,
    authorEmail: null,
  };

  if (author) {
    const avatar = dataChecker(author?.metadata?.personHeadshot?.url);
    const avatarAlt = dataChecker(
      author?.metadata?.personHeadshot[0]?.attributes?.alt
    );
    const name = dataStringChecker(author?.name);

    const email = dataStringChecker(author?.metadata?.personEmail);

    returnData.imageUrl = avatar || imageUrl;
    returnData.imageAl = avatarAlt || imageAlt;
    returnData.authorName = name;
    returnData.authorEmail = email;
  }

  return returnData;
}
