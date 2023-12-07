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
