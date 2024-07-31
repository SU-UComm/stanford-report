import React, { useState, useEffect } from "react";
import { cnb } from "cnbuilder";

// import specific templates for the component
import BurgerBar from "../../packages/SVG-library/BurgerBar";
import Close from "../../packages/SVG-library/Close";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function sidebarNavigation({
  asset_short_name,
  asset_url,
  menu,
}) {
  const [navOpen, setNavOpen] = useState(false);
  const [showMobileButton, setShowMobileButton] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 767) {
      setShowMobileButton(false);
      setNavOpen(true);
    } else if (window.innerWidth < 767) {
      setShowMobileButton(true);
      setNavOpen(false);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setShowMobileButton(false);
        setNavOpen(true);
      } else if (window.innerWidth < 767) {
        setShowMobileButton(true);
        setNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {showMobileButton && (
        <button
          data-role="sidebar-navigation-toggle"
          data-active="false"
          aria-controls="sidebar-navigation"
          aria-label="sidebar-navigation"
          type="button"
          onClick={() => setNavOpen(!navOpen)}
          className={cnb(
            "md:su-hidden su-flex su-items-center su-w-full su-h-[5.6rem] su-p-10 su-text-left su-font-semibold su-border-digital-red su-text-digital-red su-border-2",
            navOpen && "su-bg-digital-red su-text-white"
          )}
        >
          <span className="su-flex-auto">
            {navOpen ? "Close" : "Section menu"}
          </span>
          {navOpen ? <Close /> : <BurgerBar />}
        </button>
      )}
      {navOpen && (
        <nav className="" data-role="sidebar-navigation-wrapper">
          <ul>
            <li>
              <a href={asset_url}>{asset_short_name}</a>
            </li>
            {menu && menu.length ? (
              <>
                {menu.map(
                  (item) =>
                    item && (
                      <li key={item.asset_assetid}>
                        <a href={item.asset_url}>{item.asset_short_name}</a>
                        {item.asset_children &&
                          item.asset_children !== null && (
                            <ul>
                              {item.asset_children.map(
                                (subitem) =>
                                  item && (
                                    <li key={subitem.asset_assetid}>
                                      <a href={subitem.asset_url}>
                                        {subitem.asset_short_name}
                                      </a>
                                    </li>
                                  )
                              )}
                            </ul>
                          )}
                      </li>
                    )
                )}
              </>
            ) : (
              ""
            )}
          </ul>
        </nav>
      )}
    </>
  );
}
