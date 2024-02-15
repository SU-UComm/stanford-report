import React from "react";
import { decode } from "html-entities";

/**
 * Footer Primary Links
 *
 * @returns {JSX.Element}
 * @constructor
 */
function PrimaryLinks({ navigation }) {
  return (
    navigation &&
    navigation.length > 0 && (
      <ul className="su-flex su-gap-[9px] md:su-gap-x-24 md:su-gap-x-31 md:su-text-center">
        {navigation.map((item) => {
          const title = decode(item.asset_name);
          return (
            <li className="su-mb-0" key={item.asset_assetid}>
              <a
                className="su-no-underline focus:su-text-white hover:su-text-white hover:su-underline su-text-white dark:su-text-white"
                href={item.asset_attribute_redirect_url}
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    )
  );
}

/**
 * Footer Secondary Links
 *
 * @returns {JSX.Element}
 * @constructor
 */
function SecondaryLinks({ navigation }) {
  return (
    navigation &&
    navigation.length > 0 && (
      <ul className="su-flex su-gap-[9px] md:su-gap-x-24 md:su-gap-x-[29px] md:su-text-center">
        {navigation.map((item) => {
          const title = decode(item.asset_name);
          return (
            <li className="su-mb-0" key={item.asset_assetid}>
              <a
                className="su-no-underline focus:su-text-white hover:su-text-white hover:su-underline su-font-semibold md:su-font-normal su-text-white dark:su-text-white"
                href={item.asset_attribute_redirect_url}
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    )
  );
}

/**
 * Footer - Bottom bar
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function BottomBar({ site, navigation }) {
  const { footerPrimary, footerSecondary } = navigation;
  return (
    <div className="su-flex lg:su-items-center  su-text-white su-bg-digital-red">
      <div className="su-text-white su-flex su-pl-20 su-pr-20 md:su-pl-50 md:su-pr-50 su-mx-auto su-w-full su-max-w-[1412px]">
        <div className="bottom-footer su-pb-12 md:su-pb-[25px] lg:su-pb-32 su-grow su-flex su-flex-col lg:su-flex-row lg:su-gap-42">
          <div className="su-flex su-mx-auto">
            <a href={site.url}>
              <img
                className="su-mt-12 md:su-mt-10 lg:su-mt-[19.5px] su-mb-auto"
                src={site?.logoFooter?.url}
                alt={site?.logoFooter?.alt}
              />
            </a>
          </div>

          <div className="su-flex lg:su-flex-col footer-links-wrapper su-flex-wrap lg:su-grow">
            <div className="footer-top-links su-font-sans su-font-semibold su-text-14 md:su-text-18 lg:su-text-17 lg:su-mt-31 su-mx-auto md:su-mb-11 lg:su-mb-8 lg:su-ml-0 lg:su-mr-0">
              <PrimaryLinks navigation={footerPrimary} />
            </div>
            <div className="footer-bottom-links su-mx-auto lg:su-ml-0 lg:su-mr-0 su-font-normal su-text-14 md:su-text-16 md:su-mb-10 lg:su-mb-[9px] lg:su-text-15">
              <SecondaryLinks navigation={footerSecondary} />
            </div>
            <div className="footer-bottom-copyright su-w-full su-text-white su-font-source-sans-pro su-text-15 su-font-normal su-tracking-normal su-mt-17 lg:su-mt-0 su-mx-auto lg:su-mx-0">
              <p className="su-mb-0 su-text-center lg:su-text-left su-w-full">
                &copy;
                <span className="su-hidden md:su-inline su-mr-2">
                  Copyright
                </span>
                {site.copyright}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
