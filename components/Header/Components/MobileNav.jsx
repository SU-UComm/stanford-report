import React from "react";
import { decode } from "html-entities";

/**
 * MajorLinks
 * @returns {JSX.Element}
 */
function MajorLinks({ items }) {
  return (
    items &&
    items.length > 0 && (
      <ul
        className="su-mobile-nav-major su-w-full su-order-2 su-list-none su-flex su-flex-wrap su-gap-11 md:su-gap-19 su-pl-0 su-ml-0"
        data-location="main-nav:a:0"
      >
        {items.map((item) => {
          const title = decode(item.asset_name);
          return (
            <li className="su-mb-0 su-w-full" key={item.asset_assetid}>
              <a
                className="su-text-black hocus:su-underline dark:su-text-white dark:hover:su-text-dark-mode-red su-text-20 md:su-text-26 su-leading-[3.1rem] focus:su-text-digital-red hover:su-text-digital-red su-font-bold su-no-underline su-transition"
                href={item.asset_url}
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
 * MinorLinks
 * @returns {JSX.Element}
 */
function MinorLinks({ items }) {
  return (
    items &&
    items.length > 0 && (
      <ul className="su-w-full su-order-2 su-list-none su-pl-0 su-ml-0">
        {items.map((item, index, arr) => {
          const title = decode(item.asset_name);
          return (
            <li
              className={`${
                arr.length - 1 === index ? "su-mb-0" : "su-mb-6"
              } su-w-full su-leading-[21px]`}
              key={item.asset_assetid}
            >
              <a
                className="su-text-black hocus:su-underline dark:su-text-white dark:hover:su-text-dark-mode-red su-text-16 md:su-text-18 focus:su-text-digital-red hover:su-text-digital-red su-font-semibold su-no-underline su-transition"
                href={item.asset_url}
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
 * ContactLinks
 * @returns {JSX.Element}
 */
function ContactLinks({ items }) {
  return (
    items &&
    items.length > 0 && (
      <ul className="su-w-full su-order-2 su-list-none su-pl-0 su-ml-0">
        {items.map((item, index, arr) => {
          const title = decode(item.asset_name);
          return (
            <li
              className={`${
                arr.length - 1 === index ? "su-mb-0" : "su-mb-6"
              } su-w-full su-leading-[1.6rem]`}
              key={item.asset_assetid}
            >
              <a
                className="su-text-black hocus:su-underline dark:su-text-white dark:hover:su-text-dark-mode-red su-text-14 focus:su-text-digital-red hover:su-text-digital-red su-font-semibold su-no-underline su-transition"
                href={item.asset_url}
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
 * ExternalLinks
 * @returns {JSX.Element}
 */
function ExternalLinks({ items }) {
  return (
    items &&
    items.length > 0 && (
      <ul className="su-w-full su-order-2 su-list-none su-pl-0 su-ml-0">
        {items.map((item, index, arr) => {
          const title = decode(item.asset_name);
          return (
            <li
              className={`${
                arr.length - 1 === index ? "su-mb-0" : "su-mb-3"
              } su-w-full su-leading-[16px]`}
              key={item.asset_assetid}
            >
              <a
                target="_blank"
                className="su-flex hocus:su-underline su-items-center su-text-black dark:su-text-white dark:hover:su-text-dark-mode-red su-text-14 focus:su-text-digital-red hover:su-text-digital-red su-font-semibold su-no-underline su-transition"
                href={item.asset_attribute_redirect_url}
                rel="noreferrer"
              >
                <span className="su-mr-2">{title}</span>
                <svg
                  className="su-stroke-digital-red dark:su-stroke-dark-mode-red"
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <path
                    d="M8.95664 7.07109L15.5563 7.07109M15.5563 7.07109L15.5563 13.6708M15.5563 7.07109L7.07102 15.5564"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
          );
        })}
      </ul>
    )
  );
}

/**
 * Mobile Nav
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function MobileNav({ navigation, search, audience }) {
  const { major, minor, contacts, external, contactsStudent, contactsStaff } =
    navigation;
  const { endpoint, collection, profile, resultPage } = search;

  let externalData = [];
  switch (audience) {
    case "faculty":
      externalData = external.staff;
      break;
    case "student":
      externalData = external.student;
      break;
    default:
      externalData = external.anonymous;
  }

  return (
    <nav
      id="menu"
      aria-label="Primary"
      aria-hidden="true"
      className="report-header__menu-tray su-hidden su-shadow su-z-50 su-fixed su-left-0 su-top-0 su-size-full"
    >
      <span tabIndex="0" data-tp-to="close" />
      <div className="report-header__overlay su-bg-black su-opacity-25 su-size-full" />
      <div className="report-header__primary-nav su-bg-white dark:su-bg-black-true dark:su-text-white su-h-screen su-absolute su-top-0 su-left-0 su-w-full md:su-w-[390px] su-overflow-y-auto su-pb-32 md:su-pb-[64px] su-pt-[115px] md:su-pt-[159px] md:su-pt-[167px] su-px-38">
        <div className="su-flex su-flex-wrap">
          <form
            action={resultPage}
            method="get"
            role="search"
            className="su-mb-32 su--mx-18 md:su-hidden su-grow su-flex su-flex-wrap su-order-1 su-relative"
            data-location="mobile-search:input:3"
          >
            <label className="sr-only" htmlFor="mobile_search_query">
              Search query
            </label>
            <input type="hidden" value={collection} name="collection" />
            <input type="hidden" value={profile} name="profile" />
            <input
              type="search"
              className="su-w-full su-h-50 su-rounded-full su-mb-[3.2rem] dark:su-text-black su-text-20 su-leading-[2.6rem] su-py-10 su-pl-15 su-pr-120 su-border-2 su-border-black-30 dark:su-border-black-60 hover:su-border-black-40 dark:focus:su-border-digital-blue-vivid focus:su-border-digital-blue"
              name="query"
              defaultValue=""
              placeholder="Search"
              id="mobile_search_query"
              data-role="search-query"
              required
            />
            <button
              type="reset"
              className="report-header__clear su-h-48 su-absolute su-top-2 su-right-70 su-text-digital-blue su-text-20"
              data-role="clear-search"
            >
              Clear <span className="sr-only">Search</span>
            </button>

            <hr
              className="!su-absolute !su-z-[1] dark:su-bg-black-60 su-right-60 su-w-2 su-h-32 su-top-10 su-border-none su-bg-black-30"
              aria-hidden="true"
            />
            <button
              className="su-absolute su-size-40 su-right-10 su-top-5"
              type="submit"
            >
              <svg
                aria-hidden="true"
                className="su-size-30 su-mt-2 su-ml-4 su-text-digital-red dark:su-text-dark-mode-red"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path d="M17.4513 4.23242C12.8013 4.23242 9.01885 8.01492 9.01885 12.6662C9.01885 14.4587 9.5851 16.1187 10.5413 17.4862L4.5001 23.5274C3.9876 24.0399 3.9876 24.8699 4.5001 25.3824C4.75635 25.6387 5.0926 25.7674 5.4276 25.7674C5.7626 25.7674 6.1001 25.6387 6.35635 25.3824L12.3638 19.3749C13.7801 20.4512 15.5388 21.0987 17.4513 21.0987C22.1013 21.0987 25.8839 17.3162 25.8839 12.6649C25.8839 8.01367 22.1013 4.23242 17.4513 4.23242ZM17.4513 18.4737C14.2488 18.4737 11.6438 15.8674 11.6438 12.6649C11.6438 9.46242 14.2488 6.85617 17.4513 6.85617C20.6538 6.85617 23.2588 9.46242 23.2588 12.6649C23.2588 15.8674 20.6526 18.4737 17.4513 18.4737Z" />
              </svg>
              <span className="sr-only">Submit search</span>
            </button>
            <hr
              aria-hidden="true"
              className="su-block su-mt-32 su-border-none su-grow su-bg-black-10 dark:su-bg-black su-w-full su-h-2 md:su-h-3"
            />
          </form>

          <MajorLinks items={major} />

          <hr
            aria-hidden="true"
            className="su-block su-order-2 su-my-20 md:su-my-27 su-w-full su-bg-gradient-light-red-h su-h-4 su-border-none md:su-h-3"
          />

          <MinorLinks items={minor} />

          <hr
            aria-hidden="true"
            className="su-block su-order-2 su-my-20 md:su-my-27 su-w-[91px] su-bg-black-10 dark:su-bg-black su-border-none su-h-2"
          />

          {audience === "external" && (
            <>
              <ContactLinks items={contacts} />

              <hr
                aria-hidden="true"
                className="su-block su-order-2 su-my-20 md:su-my-27 su-w-[91px] su-bg-black-10 dark:su-bg-black su-border-none su-h-2"
              />
            </>
          )}

          {audience === "student" && (
            <>
              <ContactLinks items={contactsStudent} />

              <hr
                aria-hidden="true"
                className="su-block su-order-2 su-my-20 md:su-my-27 su-w-[91px] su-bg-black-10 dark:su-bg-black su-border-none su-h-2"
              />
            </>
          )}

          {audience === "faculty" && (
            <>
              <ContactLinks items={contactsStaff} />

              <hr
                aria-hidden="true"
                className="su-block su-order-2 su-my-20 md:su-my-27 su-w-[91px] su-bg-black-10 dark:su-bg-black su-border-none su-h-2"
              />
            </>
          )}

          <ExternalLinks items={externalData} audience={audience} />

          <button
            type="button"
            className="report-header__menu-close su-absolute su-right-20 md:su-right-48 su-top-43 md:su-top-[75px] su-w-32 su-flex su-flex-wrap su-gap-3 su-justify-center hover:su-text-digital-red dark:hover:su-text-dark-mode-red"
            aria-expanded="true"
            aria-controls="menu"
            aria-labelledby="close-menu"
            data-location="close"
          >
            <span className="su-relative su-size-32">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.5607 6.43934C22.9749 5.85355 22.0251 5.85355 21.4393 6.43934L15 12.8787L8.56066 6.43934C7.97487 5.85355 7.02513 5.85355 6.43934 6.43934C5.85355 7.02513 5.85355 7.97487 6.43934 8.56066L12.8787 15L6.43934 21.4393C5.85355 22.0251 5.85355 22.9749 6.43934 23.5607C7.02513 24.1464 7.97487 24.1464 8.56066 23.5607L15 17.1213L21.4393 23.5607C22.0251 24.1464 22.9749 24.1464 23.5607 23.5607C24.1464 22.9749 24.1464 22.0251 23.5607 21.4393L17.1213 15L23.5607 8.56066C24.1464 7.97487 24.1464 7.02513 23.5607 6.43934Z"
                />
              </svg>
            </span>
            <span id="close-menu" hidden>
              Close menu
            </span>
            <span
              className="su-text-[1.433rem] su-block su-font-semibold"
              aria-hidden="true"
            >
              Close
            </span>
          </button>
          <span
            tabIndex="0"
            data-tp-to="mobile-search:input:3"
            className="md:su-hidden"
          />
          <span
            tabIndex="0"
            data-tp-to="main-nav:a:0"
            className="su-hidden md:su-inline"
          />
        </div>
      </div>
    </nav>
  );
}
