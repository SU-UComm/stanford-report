import React from "react";

/**
 * Site Logo
 *
 * @returns {JSX.Element}
 * @constructor
 */
//
export default function SiteLogo({ url = "", logo = null, logoLight = null }) {
  return (
    <div className="report-header__logo su-py-20 md:su-pt-21 md:su-pb-16 lg:su-pt-27 lg:su-pb-16 su-z-40 su-relative">
      <a href={url} className="dark:su-hidden" data-ga-action="logo">
        <img
          className="img-responsive su-w-[22.6rem] md:su-w-[27.8rem] lg:su-w-[40.6rem]"
          width="406"
          height="62"
          src={logo.url}
          alt={logo.alt}
        />
      </a>

      <a href={url} className="su-hidden dark:su-flex" data-ga-action="logo">
        <img
          className="img-responsive su-w-[22.6rem] md:su-w-[27.8rem] lg:su-w-[40.6rem]"
          width="406"
          height="62"
          src={logoLight.url}
          alt={logoLight.alt}
        />
      </a>
    </div>
  );
}
