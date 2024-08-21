import React from "react";
import LinkItem from "./LinkItem";

/**
 * Constructs the nav item list for Sidebar Navigation
 * @param {string} asset_url URL of the parent page asset
 * @param {string} asset_short_name Short name (title) of the parent page asset
 * @param {boolean} active Indicates if the nav item is the current page
 * @param {array} menu An array of nested pages
 *
 * @returns {NavContent}
 * @constructor
 */

export default function NavContent({
  id,
  asset_url,
  asset_short_name,
  asset_assetid,
  menu,
}) {
  return (
    <nav id="sidebar-navigation" aria-label="Sidebar menu">
      <ul className="su-list-none su-p-0">
        <li className="su-m-0">
          <LinkItem
            level="one"
            url={asset_url}
            shortName={asset_short_name}
            active={id === asset_assetid ? "page" : ""}
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
                      active={id === item.asset_assetid ? "page" : ""}
                    />
                    {item.asset_children && item.asset_children !== null && (
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
                                  active={
                                    id === subitem.asset_assetid ? "page" : ""
                                  }
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
  );
}
