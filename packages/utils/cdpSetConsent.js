import fetch from "node-fetch";

/**
 * CDP Set Consent
 *
 * @param {number} consented The component title
 * @returns {object}
 */
export default async function setConsent(consented) {
  const call = await fetch(`/__dxp/cdp/setConsent`, {
    method: `POST`,
    headers: {
      [`Content-Type`]: `application/json`,
    },
    body: JSON.stringify({
      CDPConsent: consented,
      documentVersion: "1.0",
    }),
    redirect: `follow`,
  }).catch((error) => {
    throw new Error(error);
  });

  const resp = await call.text();
  return resp;
}
