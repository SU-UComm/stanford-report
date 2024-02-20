import cdpSetConsent from "../../../packages/utils/cdpSetConsent";
import cdpSetPersona from "../../../packages/utils/cdpSetPersona";
import getCookie from "../../../packages/utils/cookieGet";
import setCookie from "../../../packages/utils/cookieSet";
import clearCookie from "../../../packages/utils/cookieClear";

async function setPersona(value) {
  await cdpSetConsent(1);
  await cdpSetPersona("persona-selector", value);
}

export default function _preferencesSettings() {
  /**
   * Banner wrapper selector.
   * @const {string}
   */
  const LIGHT_TOGGLE_SELECTOR = '[id="light-theme"]';
  const DARK_TOGGLE_SELECTOR = '[id="dark-theme"]';
  const PREFERENCES_RESET_TOGGLE = '[id="preference-reset"]';
  const PREFERENCES_STUDENT_TOGGLE = '[id="preference-student"]';
  const PREFERENCES_FACULTY_TOGGLE = '[id="preference-faculty"]';

  /**
   * How many days dismissal will be stored in cookie.
   * @const {number}
   */
  // const DAYS_TO_EXPIRY = 7;

  const lightToggle = document.querySelector(LIGHT_TOGGLE_SELECTOR);
  const darkToggle = document.querySelector(DARK_TOGGLE_SELECTOR);
  const preferenceReset = document.querySelector(PREFERENCES_RESET_TOGGLE);
  const preferenceStudent = document.querySelector(PREFERENCES_STUDENT_TOGGLE);
  const preferenceFaculty = document.querySelector(PREFERENCES_FACULTY_TOGGLE);

  const htmlTag = document.querySelector("html");
  if (lightToggle && darkToggle) {
    // Theme preferences
    const theme = getCookie("preferences_theme");
    if (
      theme === "dark" ||
      (theme === "" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      htmlTag.classList.add("su-dark");
      darkToggle.checked = true;
      lightToggle.checked = false;
    } else {
      htmlTag.classList.add("su-light");
    }

    lightToggle.addEventListener("keyup", ({ key }) => {
      if ([" ", "Enter"].includes(key)) {
        document.querySelector(`[data-theme="dark-theme"]`).click();
      }
    });

    darkToggle.addEventListener("keyup", ({ key }) => {
      if ([" ", "Enter"].includes(key)) {
        document.querySelector(`[data-theme="light-theme"]`).click();
      }
    });

    /* Set as light theme preference */
    lightToggle.addEventListener("click", () => {
      htmlTag.classList.remove("su-dark");
      htmlTag.classList.add("su-light");

      setCookie(
        "preferences_theme",
        "light",
        process.env.NODE_ENV === "production"
      );
    });

    /* Set as dark theme preference */
    darkToggle.addEventListener("click", () => {
      htmlTag.classList.remove("su-light");
      htmlTag.classList.add("su-dark");

      setCookie(
        "preferences_theme",
        "dark",
        process.env.NODE_ENV === "production"
      );
    });
  }

  if (preferenceReset) {
    // Personalisation preferences
    const currentPersonalisation = getCookie("preferences_personalisation");
    if (currentPersonalisation == "student") {
      htmlTag.classList.add("su-persona--student");
      // preferenceStudent.setAttribute("aria-pressed", "true");
    } else if (currentPersonalisation == "faculty") {
      htmlTag.classList.add("su-persona--faculty");
      // preferenceFaculty.setAttribute("aria-pressed", "true");
    } else {
      htmlTag.classList.add("su-persona--none");
      // preferenceReset.setAttribute("aria-pressed", "true");
    }

    /* Set as no persona */
    preferenceReset.addEventListener("click", () => {
      htmlTag.classList.remove("su-persona--student");
      htmlTag.classList.remove("su-persona--faculty");
      htmlTag.classList.add("su-persona--none");

      preferenceStudent.setAttribute("aria-pressed", "false");
      preferenceFaculty.setAttribute("aria-pressed", "false");
      preferenceReset.setAttribute("aria-pressed", "true");

      cdpSetConsent(0);
      setCookie(
        "preferences_personalisation",
        null,
        process.env.NODE_ENV === "production"
      );
    });

    /* Set as student persona */
    preferenceStudent.addEventListener("click", () => {
      htmlTag.classList.add("su-persona--student");
      htmlTag.classList.remove("su-persona--none");
      htmlTag.classList.remove("su-persona--faculty");

      preferenceStudent.setAttribute("aria-pressed", "true");
      preferenceFaculty.setAttribute("aria-pressed", "false");
      preferenceReset.setAttribute("aria-pressed", "false");
      setPersona("student");
      setCookie(
        "preferences_personalisation",
        "student",
        process.env.NODE_ENV === "production"
      );
    });

    /* Set as faculty persona */
    preferenceFaculty.addEventListener("click", () => {
      htmlTag.classList.remove("su-persona--student");
      htmlTag.classList.remove("su-persona--none");
      htmlTag.classList.add("su-persona--faculty");

      preferenceStudent.setAttribute("aria-pressed", "false");
      preferenceFaculty.setAttribute("aria-pressed", "true");
      preferenceReset.setAttribute("aria-pressed", "false");
      setPersona("staff");
      setCookie(
        "preferences_personalisation",
        "faculty",
        process.env.NODE_ENV === "production"
      );
    });
  }
}
