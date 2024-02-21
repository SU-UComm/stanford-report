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
  const [consent, setConsent] = useState(consentData);
  // if any, what audience value is set
  const [audience, setAudience] = useState(audienceData);
  // page specific data
  const [pageControls, setPageControls] = useState(pageData);
  // related story display
  const [relatedStory, setRelatedStory] = useState(relatedStoryData);

  const handleConsent = async (val) => {
    if (val) {
      await cdpSetConsent(1);
      setConsent(true);
      console.log("cookie consent accepted");
    } else {
      await cdpSetConsent(0);
      setConsent(false);
      console.log("cookie consent NOT accepted");
      // set consent CDP = 0
    }
  };
  const handlePersona = async (personaVal) => {
    // check if we have consent first, if not, we need to set it
    if (!consent) {
      await cdpSetConsent(1);
      setConsent(true);
    }
    await cdpSetPersona("persona-selector", personaVal);
    setCookie("preferences_personalisation", personaVal);
    setAudience(personaVal);
  };

  return (
    <>
      <header
        className={`${
          pageControls?.isStory ? "report-header--story" : ""
        } report-header su-pb-[139px] md:su-pb-[166px] lg:su-pb-[189px]`}
      >
        <div className="su-shadow su-fixed su-top-0 su-left-0 su-w-full su-bg-white dark:su-bg-black-true su-z-50">
          <TopBar url={site.url} logo={site.logoTopBar} />

          <div className="su-w-full su-max-w-[1412px] su-px-[20px] md:su-px-[49px] su-mx-auto">
            <div className="report-header__main su-flex su-items-center su-justify-between su-gap-[20px]">
              <div className="su-flex su-items-center su-gap-[20px] lg:su-gap-[27px] su-w-[32px] md:su-w-[85px] lg:su-w-[91px]">
                <button
                  className="su-w-[32px] su-flex su-flex-wrap su-gap-[3px] su-justify-center hover:su-text-digital-red dark:hover:su-text-dark-mode-red"
                  aria-controls="menu"
                  aria-expanded="false"
                  aria-labelledby="toggle-menu"
                  type="button"
                >
                  <span className="su-relative su-h-[32px] su-w-[32px]">
                    <BurgerBar />
                    <MobileBurgerBar />
                  </span>
                  <span id="toggle-menu" hidden>
                    Menu
                  </span>
                  <span
                    className="su-text-[12px] su-hidden md:su-block"
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
                  className="su-hidden su-relative su-z-40 su-order-3 su-w-[32px] md:su-flex su-flex-wrap su-gap-[3px] su-justify-center hover:su-text-digital-red dark:hover:su-text-dark-mode-red"
                  aria-controls="search"
                  aria-expanded="false"
                  aria-labelledby="toggle-search"
                  data-location="close-search"
                >
                  <span className="icon-search su-relative su-h-[32px] su-w-[32px]">
                    <SearchIcon />
                  </span>
                  <span className="icon-close su-hidden su-relative su-h-[32px] su-w-[32px]">
                    <CloseIcon />
                  </span>
                  <span id="toggle-search" hidden>
                    Toggle Search
                  </span>
                  <span
                    className="text-search su-text-[12px] su-hidden md:su-block"
                    aria-hidden="true"
                  >
                    Search
                  </span>
                  <span
                    className="text-close su-text-[12px] su-hidden"
                    aria-hidden="true"
                  >
                    Close
                  </span>
                </button>
                <Search
                  endpoint={search.endpoint}
                  collection={search.collection}
                  profile={search.profile}
                />
              </div>

              <SiteLogo
                url={site.url}
                logo={site.logo}
                logoLight={site.logoLight}
              />

              {pageControls?.isStory && relatedStoryData ? (
                <CurrentStoryHeadline
                  title={pageControls.title}
                  story={relatedStory}
                />
              ) : (
                ""
              )}

              <PreferencesTray
                audience={audience}
                personaClickHandler={handlePersona}
              />
            </div>
            <MainNav
              major={navigation.major}
              currentPage={pageControls?.id ? pageControls.id : null}
            />
          </div>
        </div>
      </header>

      {!consent && (
        <CookieConsentBanner
          consentClickHandler={handleConsent}
          statement={site.cookieStatement}
        />
      )}
    </>
  );
}
