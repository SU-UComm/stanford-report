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
    <div className="report-header__logo su-py-20 su-relative su-flex md:su-pt-21 md:su-ml-19 md:su-mr-13 lg:su-ml-26 lg:su-mr-36 md:su-pb-20 lg:su-pb-[8.75px] lg:su-pt-27 su-z-40">
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
