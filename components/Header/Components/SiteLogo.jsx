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
    <div className="report-header__logo lg:su-pt-[27px] lg:su-pb-[16px] su-z-40 su-relative">
      <a href={url} className="dark:su-hidden" data-ga-action="logo">
        <img
          className="img-responsive su-w-[226px] md:su-w-[278px] lg:su-w-[406px]"
          width="406"
          height="62"
          src={logo.url}
          alt={logo.alt}
        />
      </a>

      <a href={url} className="su-hidden dark:su-flex" data-ga-action="logo">
        <img
          className="img-responsive su-w-[226px] md:su-w-[278px] lg:su-w-[406px]"
          width="406"
          height="62"
          src={logoLight.url}
          alt={logoLight.alt}
        />
      </a>
    </div>
  );
}
