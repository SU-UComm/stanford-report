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
    // <div className="report-header__logo su-py-20 md:su-pt-21 md:su-pb-16 lg:su-pt-27 lg:su-pb-16 su-z-40 su-relative">
    <div className="report-header__logo su-pb-[20px] su-pt-[20px] su-relative su-flex md:su-pt-[21px] md:su-ml-[19px] md:su-mr-[13px] lg:su-ml-[26px] lg:su-mr-[36px] md:su-pb-[20.05px] lg:su-pb-[8.75px] lg:su-pt-[27px]">
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
