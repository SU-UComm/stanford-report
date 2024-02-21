import React from "react";

/**
 * Top bar
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function TopBar({ url = "", logo = null }) {
  return (
    <div className="report-header__utility su-w-full su-bg-digital-red su-pt-[30px] su-relative su-z-40">
      <div className="su-max-w-[1412px] su-px-[20px] md:su-px-[49px] su-w-full su-mx-auto">
        <a
          href={url}
          data-ga-action="logo"
          className="su-ml-[-5px] su-inline-block"
        >
          {logo && (
            <img
              alt={logo.alt}
              className="su-inline-block img-responsive"
              width="161"
              height="35"
              src={logo.url}
            />
          )}
        </a>
      </div>
    </div>
  );
}
