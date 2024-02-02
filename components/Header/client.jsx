import cdpSetConsent from "../../packages/utils/cdpSetConsent";
import cdpSetPersona from "../../packages/utils/cdpSetPersona";

const staffPersona = document.getElementById("preference-faculty");
const studentPersona = document.getElementById("preference-student");
const revokeConsent = document.getElementById("preference-reset");

async function setPersona(value) {
  await cdpSetConsent(1);
  await cdpSetPersona("persona-selector", value);
}

staffPersona.addEventListener("click", () => {
  setPersona("staff");
});

studentPersona.addEventListener("click", () => {
  setPersona("student");
});

revokeConsent.addEventListener("click", () => {
  cdpSetConsent(0);
});
