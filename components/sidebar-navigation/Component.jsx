import React, { useState, useEffect, useRef } from "react";
import { cnb } from "cnbuilder";
import { FAIcon } from "../../packages/icons/FAIcon";

// import custom hooks
import useKeypress from "../../packages/utils/useKeypress";
import useOnClickOutside from "../../packages/utils/useOnClickOutside";

// import sub-components
import NavButton from "./Components/NavButton";
import NavContent from "./Components/NavContent";

/**
 * Sidebar Navigation component
 *
 * @param {string} asset_url URL of the parent page asset
 * @param {string} asset_short_name Short name (title) of the parent page asset
 * @param {boolean} active Indicates if the nav item is the current page
 * @param {array} menu An array of nested pages
 *
 * @returns {SidebarNavigation}
 * @constructor
 */

export default function SidebarNavigation({
  asset_url,
  asset_short_name,
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
      <div ref={ref} className="lg:su-hidden">
        <NavButton
          ariaControls="sidebar-navigation"
          ariaLabel="Toggle visibility of section menu"
          ariaExpanded={!!navOpen}
          onClick={() => setNavOpen(!navOpen)}
          className={cnb(
            "lg:su-hidden su-transition-all su-flex su-items-center su-w-full su-h-[5.6rem] su-p-15 su-text-left su-font-semibold su-shadow-[inset_0_0_0_2px_rgba(177,4,14,1)] su-text-digital-red",
            "hocus:su-shadow-[inset_0_0_0_3px_rgba(177,4,14,1)]",
            "dark:su-shadow-[inset_0_0_0_2px_rgba(236,9,9,1)] dark:su-text-dark-mode-red",
            "dark:hocus:su-shadow-[inset_0_0_0_3px_rgba(236,9,9,1)]",
            navOpen &&
              "su-bg-digital-red su-text-white dark:su-bg-dark-mode-red dark:aria-expanded:su-text-black-true"
          )}
          buttonText={navOpen ? "Close" : "Section menu"}
          icon={
            navOpen ? (
              <FAIcon
                icon="xmark"
                set="solid"
                // Add a width to prevent getting a flash of huge icon before the CSS fully loads
                width={24}
                className="su-text-[3rem]"
              />
            ) : (
              <FAIcon
                icon="bars"
                set="solid"
                // Add a width to prevent getting a flash of huge icon before the CSS fully loads
                width={24}
                className="su-text-[3rem]"
              />
            )
          }
        />
        {navOpen && (
          <NavContent
            asset_url={asset_url}
            asset_short_name={asset_short_name}
            active={active}
            menu={menu}
          />
        )}
      </div>
      <div className="su-hidden lg:su-block">
        <NavContent
          asset_url={asset_url}
          asset_short_name={asset_short_name}
          active={active}
          menu={menu}
        />
      </div>
    </>
  );
}
