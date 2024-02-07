import FetchAdapter from "../../../packages/utils/fetchAdapter";

export default async function relatedStory(search, pageData = null) {
  const adapter = new FetchAdapter();

  if (pageData && search) {
    // `https://dxp-us-search.funnelback.squiz.cloud/s/search.json?profile=stanford-report-push-search&query=%21null&collection=sug~sp-stanford-report-search&meta_taxonomyContentMainTopicText=&meta_taxonomyAudienceText=&num_ranks=10&meta_id_not=`

    console.log(search);

    const fbUrl = `
      ${search.endpoint?.replace(/\.html/g, ".json")}
      ?profile=${search.profile}
      &query=%21null&collection=${search.collection}
      &meta_taxonomyContentMainTopicText=
    `;
  }
}
