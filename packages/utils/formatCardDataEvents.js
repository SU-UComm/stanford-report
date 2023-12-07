/**
 *
 * @param {object} event
 * the event object
 *
 * @param {string} event.title
 * the event's title
 *
 * @param {string} event.description
 * the event's description
 *
 * @param {array} event.event_instances
 * the event instances is where the start and end dates
 * will be pulled out from
 *
 * @param {string} event.localist_url
 * the event's URL
 *
 * @param {string} event.photo_url
 * the event's photo URL
 *
 * @param {array} event.departments
 * assumed to be the location of the image's alt text (best candidate thus far)
 *
 * @param {object} event.filters
 * location for the event types
 *
 * @returns {object}
 */
export default function formatCardDataEvents({
  event: {
    title,
    description,
    event_instances,
    localist_url,
    photo_url,
    departments,
    filters,
  },
}) {
  // start date (date) and end date
  const [instance] = event_instances;
  const endDate = instance.end;
  const date = instance.start;

  // liveUrl
  const liveUrl = localist_url;

  // image
  const [department] = departments;
  const imageAlt = department.name;
  const imageUrl = photo_url;

  // taxonomy
  const taxonomy = null;
  const taxonomyUrl = null;

  // type
  const type = filters.event_types.name;

  const videoUrl = null;

  return {
    title,
    description,
    liveUrl,
    imageUrl,
    imageAlt,
    taxonomy,
    taxonomyUrl,
    type,
    videoUrl,
    date,
    endDate,
  };
}
