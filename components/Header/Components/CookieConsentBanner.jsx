import React from "react";
/**
 * Cookie Consent Banner
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function CookieConsentBanner({
  consentClickHandler,
  statement,
}) {
  return (
    <div className="cookie-banner">
      <div>
        <p>{statement}</p>
      </div>
      <button
        type="button"
        id="accept-cdp-cookie"
        className=""
        onClick={() => consentClickHandler(1)}
      >
        Accept
      </button>
      <button
        type="button"
        id="reject-cdp-cookie"
        className=""
        onClick={() => consentClickHandler(0)}
      >
        Reject
      </button>
    </div>
  );
}
