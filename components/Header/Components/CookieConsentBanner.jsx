import React from "react";
import { decode } from "html-entities";
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
  const markup = { __html: decode(statement) };
  return (
    <div
      id="cookie-consent-banner"
      className="su-fixed su-z-50 su-bottom-0 su-left-0 su-right-0 su-top-auto su-bg-white dark:su-bg-black-true"
    >
      <div className="su-mx-auto su-component-container su-container-large su-container-px md:su-flex md:su-gap-45 su-my-20">
        <div className="su-text-[14px] md:su-text-[16px] su-leading-[17.5px] md:su-leading-[20px] su-mb-20 md:su-mb-0">
          <p dangerouslySetInnerHTML={markup} className="su-mb-0" />
        </div>

        <div className="su-text-[14px] md:su-text-[16px] su-flex su-items-center su-justify-center su-gap-15">
          <button
            type="button"
            id="accept-cdp-cookie"
            className="su-text-white su-shadow-[0px_3px_6px_0px_rgba(0,0,0,0.1)] su-transition su-border su-border-digital-green-dark su-bg-digital-green-dark hocus:su-bg-digital-green-bright hocus:su-border-digital-green-bright su-py-10 md:su-py-15 su-px-30 su-leading-[20px]"
            onClick={() => consentClickHandler(1)}
          >
            Accept
          </button>
          <button
            type="button"
            id="reject-cdp-cookie"
            className="su-transition su-border su-border-digital-red su-bg-transparent su-text-digital-red hocus:su-text-white hocus:su-border-digital-red hocus:su-bg-digital-red su-py-10 md:su-py-15 su-px-30 su-leading-[20px] dark:su-text-dark-mode-red dark:su-border-dark-mode-red dark:hocus:su-bg-dark-mode-red dark:hocus:su-text-white"
            onClick={() => consentClickHandler(0)}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
