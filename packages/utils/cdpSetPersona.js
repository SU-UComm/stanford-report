import fetch from "node-fetch";

/**
 * CDP Set Persona
 *
 * @param {string} id The CDP custom event ID. Eg "persona-selector"
 * @param {string} val The value to pass to the event. eg "staff" or "student"
 * @returns {object}
 */
export default async function setPersona(id, val) {
  const call = await fetch(`/__dxp/events/custom`, {
    method: `POST`,
    headers: {
      [`Content-Type`]: `application/json`,
    },
    body: JSON.stringify({
      source: "custom",
      action: id,
      event: {
        type: val,
      },
    }),
    redirect: `follow`,
  }).catch((error) => {
    throw new Error(error);
  });

  const resp = await call.text();
  return resp;
}
