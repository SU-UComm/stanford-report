import React, { useState, useEffect } from "react";
// import smaller header components
import TopBar from "./Components/TopBar";
import MobileNav from "./Components/MobileNav";
import PreferencesTray from "./Components/PreferencesTray";
import Search from "./Components/Search";
import MainNav from "./Components/MainNav";
import SiteLogo from "./Components/SiteLogo";
import CurrentStoryHeadline from "./Components/currentStoryHeadline";
import CookieConsentBanner from "./Components/CookieConsentBanner";

import cdpSetConsent from "../../packages/utils/cdpSetConsent";
import cdpSetPersona from "../../packages/utils/cdpSetPersona";
import setCookie from "../../packages/utils/cookieSet";

// SVG icons
import BurgerBar from "../../packages/SVG-library/BurgerBar";
import MobileBurgerBar from "../../packages/SVG-library/MobileBurgerBar";
import SearchIcon from "../../packages/SVG-library/Search";
import CloseIcon from "../../packages/SVG-library/Close";

/**
 * Header component
 *
 * @param {string} data The full HTML element to be printed
 * @returns {JSX.Element}
 * @constructor
 */

export default function Header({
  site,
  navigation,
  search,
  pageData = null,
  audienceData = null,
  relatedStoryData = null,
  consentData = true,
}) {
  // has the user given consent?
  const [consent, setConsent] = useState(false);
  // has the user given consent?
  const [displayConsentBanner, setDisplayConsentBanner] = useState(false);
  // if any, what audience value is set
  const [audience, setAudience] = useState(null);
  // page specific data
  const [pageControls, setPageControls] = useState(null);
  // related story display
  const [relatedStory, setRelatedStoryData] = useState(null);

  const handleConsent = async (given) => {
    if (given) {
      await cdpSetConsent(1);
    } else {
      await cdpSetConsent(0);
    }
    // tell the front end that we have interacted with Consent
    setConsent(true);
    // hide consent banner
    setDisplayConsentBanner(false);
  };
  const handlePersona = async (personaVal) => {
    // check if we have consent first, if not, we need to set it
    let persona = null;
    if (
      typeof window.suHeaderProps?.consentData === "undefined" ||
      window.suHeaderProps?.consentData === 0
    ) {
      // if no consent previously given
      await cdpSetConsent(1);
      setConsent(true);
    }
    if (personaVal) {
      persona = personaVal;
    }
    await cdpSetPersona("persona-selector", persona);
    setCookie("preferences_personalisation", persona);
    setDisplayConsentBanner(false);
    setAudience(persona);
  };

  useEffect(() => {
    if (typeof window.suHeaderProps !== "undefined") {
      setRelatedStoryData(window.suHeaderProps?.relatedStoryData);
      setPageControls(window.suHeaderProps?.pageData);
      setAudience(window.suHeaderProps?.audienceData);
      setConsent(!!Number(window.suHeaderProps?.consentData));
      setDisplayConsentBanner(
        typeof window.suHeaderProps?.consentData === "undefined"
      );
    }
  }, []);

  return (
    <>
      <header
        className={`${
          pageControls?.isStory ? "report-header--story" : ""
        } report-header su-pb-[13.9rem] md:su-pb-[16.6rem] lg:su-pb-[18.9rem]`}
      >
        <div className="su-shadow dark:su-shadow-[0_3px_6px_0_rgba(46,45,41,0.5)] su-fixed su-top-0 su-left-0 su-w-full su-bg-white dark:su-bg-black-true su-z-50">
          <TopBar
            // url={site?.url}
            url="https://www.stanford.edu/"
            logo={site?.logoTopBar}
          />

          <div className="su-w-full su-max-w-[141.2rem] su-px-20 md:su-px-49 su-mx-auto">
            {/* <div className="report-header__main su-flex su-items-center su-justify-between su-gap-20"> */}
            <div className="report-header__main su-flex su-items-center lg:su-items-end su-justify-between md:su-pb-[10px] lg:su-pb-[11px]">
              <div className="su-flex su-items-center su-gap-20 lg:su-gap-27 su-w-32 md:su-w-85 lg:su-w-[9.1rem]">
                <button
                  className="su-w-32 su-flex su-flex-wrap su-gap-3 su-justify-center hover:su-text-digital-red dark:hover:su-text-dark-mode-red"
                  aria-controls="menu"
                  aria-expanded="false"
                  aria-labelledby="toggle-menu"
                  type="button"
                >
                  <span className="su-relative su-size-32">
                    <BurgerBar />
                    <MobileBurgerBar />
                  </span>
                  <span id="toggle-menu" hidden>
                    Menu
                  </span>
                  <span
                    className="su-text-12 su-hidden md:su-block"
                    aria-hidden="true"
                  >
                    Menu
                  </span>
                </button>

                <MobileNav
                  site={site}
                  navigation={navigation}
                  search={search}
                  audience={audience}
                />

                <span className="su-absolute">
                  <span
                    data-tp-to="submit-btn"
                    data-role="search-focus-trap"
                    tabIndex="0"
                    className="su-hidden"
                  />
                </span>

                <button
                  type="button"
                  className="su-hidden su-relative su-z-40 su-order-3 su-w-32 md:su-flex su-flex-wrap su-gap-3 su-justify-center hover:su-text-digital-red dark:hover:su-text-dark-mode-red"
                  aria-controls="search"
                  aria-expanded="false"
                  aria-labelledby="toggle-search"
                  data-location="close-search"
                >
                  <span className="icon-search su-relative su-size-32">
                    <SearchIcon />
                  </span>
                  <span className="icon-close su-hidden su-relative su-size-32">
                    <CloseIcon />
                  </span>
                  <span id="toggle-search" hidden>
                    Toggle Search
                  </span>
                  <span
                    className="text-search su-text-12 su-hidden md:su-block"
                    aria-hidden="true"
                  >
                    Search
                  </span>
                  <span
                    className="text-close su-text-12 su-hidden"
                    aria-hidden="true"
                  >
                    Close
                  </span>
                </button>
                <Search
                  endpoint={search?.endpoint}
                  collection={search?.collection}
                  profile={search?.profile}
                  resultPage={search?.resultPage}
                />
              </div>

              <SiteLogo
                url={site?.url}
                logo={site?.logo}
                logoLight={site?.logoLight}
              />

              {pageControls?.isStory && (
                <CurrentStoryHeadline
                  title={pageControls?.title}
                  story={relatedStory}
                />
              )}

              <PreferencesTray
                audience={audience}
                personaClickHandler={handlePersona}
              />
            </div>
            <MainNav
              major={navigation?.major}
              currentPage={pageControls?.id ? pageControls.id : null}
            />
          </div>
        </div>
      </header>

      {displayConsentBanner && (
        <CookieConsentBanner
          consentClickHandler={handleConsent}
          statement={site?.cookieStatement}
        />
      )}
    </>
  );
}
