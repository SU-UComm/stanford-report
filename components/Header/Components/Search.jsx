import React from "react";

/**
 * Search
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function Search({ endpoint, collection, profile }) {
  return (
    <div
      id="search"
      aria-label="Search"
      aria-hidden="true"
      className="report-header__search-tray su-z-30 su-fixed su-left-0 su-top-0 su-w-full su-h-screen"
    >
      <div className="report-header__overlay su-bg-black su-opacity-25 su-size-full" />
      <form
        action={endpoint}
        method="get"
        role="search"
        className="report-header__search su-bg-white dark:su-bg-black-true su-shadow su-shadow-black-60/50 su-absolute su-top-0 su-left-0 su-w-full su-px-50 su-pt-[249px] su-pb-[171px]"
      >
        <div className="su-max-w-[1026px] su-mx-auto su-relative">
          <label className="sr-only" htmlFor="desktop_search_query">
            Search query
          </label>
          <input type="hidden" value={collection} name="collection" />
          <input type="hidden" value={profile} name="profile" />
          <input
            type="search"
            className="su-w-full su-h-50 dark:su-text-black su-rounded-full su-text-20 su-leading-[26px] su-py-10 su-pl-15 su-pr-[120px] su-bg-white su-border-2 su-border-black-30 hover:su-border-black-40 focus:su-border-digital-blue"
            name="query"
            defaultValue=""
            placeholder="Search"
            id="desktop_search_query"
            required
          />
          <button
            type="submit"
            className="report-header__clear su-h-48 su-absolute su-top-2 su-right-70 su-text-digital-blue su-text-20"
          >
            Clear <span className="sr-only">Search</span>
          </button>
          <hr
            className="su-absolute su-right-60 su-w-2 su-h-32 su-top-10 su-border-none su-bg-black-30"
            aria-hidden="true"
          />
          <button
            className="su-absolute su-size-40 su-right-10 su-top-5"
            type="submit"
          >
            <svg
              aria-hidden="true"
              className="su-size-30 su-mt-2 su-ml-4 su-text-digital-red"
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
        </div>
      </form>
    </div>
  );
}
