import React, { useState, useEffect } from "react";
import { decode } from "html-entities";
import { Container } from "../../packages/grids/Container";

function removeDuplicates(arr) {
  return arr.filter(
    (obj, index) =>
      index ===
      arr.findIndex(
        (topic) =>
          topic.taxonomyFeaturedUnitText?.[0] ===
          obj.taxonomyFeaturedUnitText?.[0]
      )
  );
}

const topicFormatter = async (topics) => {
  if (!topics || topics.length === 0) {
    return null;
  }
  // Remove all duplicates
  const uniqueTopics = removeDuplicates(topics);
  const formatted = [];
  uniqueTopics.forEach((obj) => {
    const dataset = obj;
    if (dataset && dataset.taxonomyFeaturedUnitText?.[0]) {
      formatted.push({
        asset_name: dataset.taxonomyFeaturedUnitText?.[0],
        asset_url: dataset.taxonomyFeaturedUnitLandingPageUrl?.[0] || "",
      });
    }
  });
  return formatted;
};

function Subnav({ navigation }) {
  let liClass =
    "scrollable-list__item su-mb-0 su-relative after:su-h-22 after:su-w-[1px] after:su-bg-black-60 after:su-mx-12 lg:after:su-mx-18";
  const aClass =
    "su-text-inherit su-text-black su-font-semi-bold su-text-16 lg:su-text-18 lg:su-leading-[21.6px] su-no-underline hover:su-underline dark:su-text-white hover:su-text-digital-red dark:hover:su-text-dark-mode-red";
  return (
    <div className="scrollable-list su-w-full md:su-justify-center su-flex su-nowrap su-mt-15 md:su-mt-26 lg:su-mt-19">
      <ul className="scrollable-list__items su-w-[calc(100%+40px)] md:su-w-auto su-flex md:su-justify-center su-mb-0 su-whitespace-nowrap su-flex-nowrap md:su-flex-wrap su-overflow-x-scroll md:su-overflow-visible su-list-none su-mx-[-20px] md:su-mr-0 su-px-20 su-mb-0 su-pb-12 lg:su-pb-0">
        {navigation.map((item, i, row) => {
          const title = decode(item.asset_name);

          if (i + 1 === row.length) {
            // Last one.
            liClass = "su-relative su-mb-0";
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
  title = null,
  parent = null,
  children = null,
  isTopLevel = null,
}) {
  const [topics, setTopics] = useState(children);
  const [isClient, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
    document.addEventListener(
      "topicLoader",
      async (evt) => {
        // set topic state
        if (evt.detail) {
          const newTopics = await topicFormatter(evt.detail.cards);
          setTopics(newTopics);
        }
      },
      false
    );
  }, []);

  return (
    isClient && (
      <Container width="large">
        <section className="listing su-rs-mb-4">
          <div className="listing__header">
            {!isTopLevel && (
              <p className="listing__back-link su-flex su-justify-center su-mb-15 md:su-mb-18 lg:su-mb-10">
                <a
                  href={parent.url}
                  className="su-flex su-font-semi-bold su-items-center su-no-underline su-text-16 lg:su-text-18 su-text-black-60 hover:su-underline hover:su-text-digital-red dark:hover:su-text-dark-mode-red su-ml-[-.5rem] lg:su-ml-[-2rem]"
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
              <h1 className="su-text-black su-font-bold su-font-serif dark:su-text-white su-text-center su-text-[39px] md:su-text-[54px] lg:su-text-[70px] su-leading-[46.57px] md:su-leading-[64.8px] lg:su-leading-[84px] su-mb-0">
                {decode(title)}
              </h1>
            )}
            {topics && topics.length > 0 && <Subnav navigation={topics} />}
          </div>
        </section>
      </Container>
    )
  );
}
