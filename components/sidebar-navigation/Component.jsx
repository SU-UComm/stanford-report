import React, { useState, useEffect, useRef } from "react";
import { cnb } from "cnbuilder";
import useKeypress from "../../packages/utils/useKeypress";
import useOnClickOutside from "../../packages/utils/useOnClickOutside";

// import specific templates for the component
import BurgerBar from "../../packages/SVG-library/BurgerBar";
import Close from "../../packages/SVG-library/Close";
import LinkItem from "./Components/LinkItem";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function sidebarNavigation({
  asset_assetid,
  asset_short_name,
  asset_url,
  active,
  menu,
}) {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 991) {
      setNavOpen(true);
    } else if (window.innerWidth < 991) {
      setNavOpen(false);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setNavOpen(true);
      } else if (window.innerWidth < 991) {
        setNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useKeypress("Escape", () => {
    if (setNavOpen) {
      setNavOpen(false);
    }
  });

  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    setNavOpen(false);
  });

  return (
    <>
      <button
        aria-controls="sidebar-navigation"
        aria-label="Toggle visibility of section menu"
        aria-expanded={!!navOpen}
        type="button"
        onClick={() => setNavOpen(!navOpen)}
        className={cnb(
          "lg:su-hidden su-flex su-items-center su-w-full su-h-[5.6rem] su-p-10 su-text-left su-font-semibold su-border-2 su-border-digital-red su-text-digital-red dark:su-border-dark-mode-red dark:su-text-dark-mode-red",
          navOpen &&
            "su-bg-digital-red su-text-white dark:su-bg-dark-mode-red dark:aria-expanded:su-text-black-true"
        )}
      >
        <span className="su-flex-auto">
          {navOpen ? "Close" : "Section menu"}
        </span>
        {navOpen ? <Close /> : <BurgerBar />}
      </button>

      {navOpen && (
        <nav ref={ref} id="sidebar-navigation" aria-label="Sidebar menu">
          <ul className="su-list-none su-p-0">
            <li className="su-m-0">
              <LinkItem
                level="one"
                url={asset_url}
                shortName={asset_short_name}
                active={active}
              />
            </li>
            {menu && menu.length ? (
              <>
                {menu.map(
                  (item) =>
                    item && (
                      <li key={item.asset_assetid} className="su-m-0">
                        <LinkItem
                          level="one"
                          url={item.asset_url}
                          shortName={item.asset_short_name}
                          active={item.active}
                        />
                        {item.asset_children &&
                          item.asset_children !== null && (
                            <ul className="su-list-none su-p-0">
                              {item.asset_children.map(
                                (subitem) =>
                                  item && (
                                    <li
                                      key={subitem.asset_assetid}
                                      className="su-m-0"
                                    >
                                      <LinkItem
                                        level="two"
                                        url={subitem.asset_url}
                                        shortName={subitem.asset_short_name}
                                        active={subitem.active}
                                      />
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
