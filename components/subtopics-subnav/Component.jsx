import React from "react";
import { decode } from "html-entities";
import { Container } from "../../packages/grids/Container";

function Subnav({ navigation }) {
  let liClass =
    "su-relative after:su-h-[22px] after:su-w-[1px] after:su-bg-black-60 after:su-absolute after:su-right-[-12px] lg:after:su-right-[-18px] after:su-top-[3px]";
  let aClass =
    "su-text-inherit su-text-black su-font-semi-bold su-text-[16px] lg:su-text-[18px] lg:su-leading-[21.6px] su-no-underline hover:su-underline dark:su-text-white";
  return (
    <div className="scrollable-list su-w-[calc(100%+20px)] md:su-justify-center su-flex su-nowrap su-mb-[15px] md:su-mb-[25px] lg:su-mb-[41px]">
      <ul className="scrollable-list__items su-w-[calc(100%+40px)] md:su-w-auto su-flex md:su-justify-center su-mb-0 su-whitespace-nowrap su-flex-nowrap md:su-flex-wrap su-overflow-x-scroll md:su-overflow-visible su-list-none su-gap-[24px] lg:su-gap-[36px] su-mx-[-20px] md:su-mr-0 su-px-[20px] su-mb-0">
        {navigation.map((item, i, row) => {
          const title = decode(item.asset_name);

          if (i + 1 === row.length) {
            // Last one.
            liClass = "su-relative";
            aClass =
              "su-text-inherit su-font-semi-bold su-text-[14px] lg:su-text-[18px] lg:su-leading-[21.6px] su-no-underline hover:su-underline dark:su-text-white";
          }

          return (
            <li className={liClass} key={item.asset_assetid}>
              <a className={aClass} href={item.asset_url}>
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * Subtopics Subnav component
 *
 * @param {string} data The full HTML element to be printed
 * @returns {JSX.Element}
 * @constructor
 */

export default function SubtopicSubnav({
  title,
  parent,
  children,
  isTopLevel,
}) {
  return (
    <Container>
      <section className="listing">
        <div className="listing__header">
          {!isTopLevel && (
            <p className="listing__back-link su-flex su-justify-center su-mb-[15px] md:su-mb-[18px] lg:su-mb-[10px]">
              <a
                href={parent.url}
                className="su-flex su-font-semi-bold su-items-center su-no-underline su-text-[16px] lg:su-text-[18px] su-text-black-60 dark:hover:su-text-dark-mode-red su-ml-[-.5rem] lg:su-ml-[-2rem]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.2485 6.35147C15.7172 6.8201 15.7172 7.5799 15.2485 8.04853L11.2971 12L15.2485 15.9515C15.7172 16.4201 15.7172 17.1799 15.2485 17.6485C14.7799 18.1172 14.0201 18.1172 13.5515 17.6485L8.75147 12.8485C8.28284 12.3799 8.28284 11.6201 8.75147 11.1515L13.5515 6.35147C14.0201 5.88284 14.7799 5.88284 15.2485 6.35147Z"
                  />
                </svg>
                <span>{decode(parent.title)}</span>
              </a>
            </p>
          )}
          {title && (
            <h1 className="su-text-black su-font-bold su-font-serif dark:su-text-white su-text-center su-text-[39px] md:su-text-[54px] lg:su-text-[70px] su-mb-[15px] md:su-mb-[26px] lg:su-mb-[41px]">
              {decode(title)}
            </h1>
          )}
          {children && children.length > 0 && <Subnav navigation={children} />}
        </div>
      </section>
    </Container>
  );
}
