import React, { useState, useEffect, useRef } from "react";
import { cnb } from "cnbuilder";
import useKeypress from "../../packages/utils/useKeypress";
import useOnClickOutside from "../../packages/utils/useOnClickOutside";

// import specific templates for the component
import BurgerBar from "../../packages/SVG-library/BurgerBar";
import Close from "../../packages/SVG-library/Close";
import NavContent from "./Components/NavContent";
import NavButton from "./Components/NavButton";

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
    <div ref={ref}>
      <NavButton
        ariaControls="sidebar-navigation"
        ariaLabel="Toggle visibility of section menu"
        ariaExpanded={!!navOpen}
        onClick={() => setNavOpen(!navOpen)}
        className={cnb(
          "lg:su-hidden su-flex su-items-center su-w-full su-h-[5.6rem] su-p-10 su-text-left su-font-semibold su-border-2 su-border-digital-red su-text-digital-red dark:su-border-dark-mode-red dark:su-text-dark-mode-red",
          navOpen &&
            "su-bg-digital-red su-text-white dark:su-bg-dark-mode-red dark:aria-expanded:su-text-black-true"
        )}
        buttonText={navOpen ? "Close" : "Section menu"}
        icon={navOpen ? <Close /> : <BurgerBar />}
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
  );
}
