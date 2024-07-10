import React from "react";

// import specific templates for the component
import BurgerBar from "../../packages/SVG-library/BurgerBar";

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
  console.log(menu);
  return (
    <>
      <button
        data-role="sidebar-navigation-toggle"
        data-active="false"
        aria-controls="sidebar-navigation"
        aria-label="sidebar-navigation"
        type="button"
      >
        <span>Section menu</span>
        <BurgerBar />
      </button>
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
                    {item.asset_children && item.asset_children !== null && (
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
    </>
  );
}
