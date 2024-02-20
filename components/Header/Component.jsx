import React, { useState, useEffect } from "react";
// import smaller header components
import TopBar from "./Components/TopBar";
import MobileNav from "./Components/MobileNav";
import PreferencesTray from "./Components/PreferencesTray";
import Search from "./Components/Search";
import MainNav from "./Components/MainNav";
import SiteLogo from "./Components/SiteLogo";
import getCookie from "../../packages/utils/cookieGet";
import CurrentStoryHeadline from "./Components/currentStoryHeadline";
import relatedStoryData from "./scripts/relatedStory";

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

export default function Header({ site, navigation, search }) {
  const [audience, setAudience] = useState(null);
  const [pageControls, setPageControls] = useState(null);
  const [relatedStory, setRelatedStory] = useState(null);

  useEffect(() => {
    const audienceCookie = getCookie("preferences_personalisation");
    const isClient = typeof window !== "undefined";

    const pageData =
      isClient && typeof window.pageController !== "undefined"
        ? window.pageController
        : null;

    const getFb = async () => {
      const data = await relatedStoryData(pageData, search, audience);
      setRelatedStory(data);
    };
    if (audienceCookie) {
      setAudience(audienceCookie);
    }
    setPageControls(pageData);
    getFb();
  }, [audience, pageControls]);

  return (
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

            {pageControls?.isStory ? (
              <CurrentStoryHeadline
                title={pageControls.title}
                story={relatedStory}
              />
            ) : (
              ""
            )}

            <PreferencesTray audience={audience} />
          </div>
          <MainNav
            major={navigation.major}
            currentPage={pageControls?.id ? pageControls.id : null}
          />
        </div>
      </div>
    </header>
  );
}
