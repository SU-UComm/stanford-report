/**
 * Date formatter for some cards
 *
 * @param {object} prop.time
 * The timestamp, comes from the date prop of the main component
 *
 * @returns {string} The formatted date
 */
export default function formatNewsDate(dateString) {
  if (!dateString) return null;

  const sDate = new Date(dateString);
  const formattedDate = new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(sDate);
  return `${formattedDate}`;
}
