import React, { useState } from "react";
import FeaturedField from "./FeaturedField";
import { ShareLink } from "../SVG-library/SVG";

export default function FeaturedMetadata({ data }) {
  const {
    authors,
    producers,
    writers,
    editors,
    photographers,
    videographers,
    photography,
    media,
    campus,
    related,
  } = data;

  const [copyLinkTitle, setCopyLinkTitle] = useState("Copy link");

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopyLinkTitle(() => "Copied");

      setTimeout(() => {
        setCopyLinkTitle(() => "Copy link");
      }, 3000);
    });
  };

  const metaMap = [];
  if (authors && authors.length) {
    metaMap.push({
      name: authors.length > 1 ? "Authors" : "Author",
      items: authors,
    });
  }

  if (producers && producers.length) {
    metaMap.push({
      name: producers.length > 1 ? "Producers" : "Producer",
      items: producers,
    });
  }

  if (writers && writers.length) {
    metaMap.push({
      name: writers.length > 1 ? "Writers" : "Writer",
      items: writers,
    });
  }

  if (editors && editors.length) {
    metaMap.push({
      name: editors.length > 1 ? "Editors" : "Editor",
      items: editors,
    });
  }

  if (photographers && photographers.length) {
    metaMap.push({
      name: photographers.length > 1 ? "Photographers" : "Photographer",
      items: photographers,
    });
  }

  if (videographers && videographers.length) {
    metaMap.push({
      name: videographers.length > 1 ? "Videographers" : "Videographer",
      items: videographers,
    });
  }

  if (photography && photography.length) {
    metaMap.push({
      name:
        photography.length > 1
          ? "Directors of Photography"
          : "Director of Photography",
      items: photography,
    });
  }

  // if (
  //   campus &&
  //   ![null, undefined, "undefined", ""].includes(campus.asset_assetid)
  // ) {
  //   metaMap.push({
  //     name: "Campus unit",
  //     items: campus,
  //   });
  // }

  const relatedTopics = [];

  const relatedFiltered = related.filter((item) => {
    if (!relatedTopics.includes(item.asset_name)) {
      relatedTopics.push(item.asset_name);

      return item;
    }

    return null;
  });

  const firstRow = metaMap.slice(0, metaMap.length > 3 ? 3 : metaMap.length);
  const otherRows = metaMap.slice(3, metaMap.length);

  const gridSettings =
    "md:su-gap-x-20 md:su-gap-y-70 lg:su-gap-x-40 lg:su-gap-y-[6.1rem]";

  return (
    <section className="su-flex su-flex-col su-items-center">
      {firstRow.length > 0 ? (
        <div className="su-flex su-w-full su-flex-col su-justify-center su-items-center md:su-flex-row md:su-gap-20 lg:su-gap-40">
          <div
            aria-hidden="true"
            className="su-border-none su-grow su-w-70 su-h-2 su-bg-gradient-to-r su-from-digital-red-light su-to-digital-red-dark dark:su-from-palo-verde dark:su-to-olive md:su-w-auto md:su-h-3 su-mb-38 md:su-mb-0"
          />

          <div
            className={`su-flex su-flex-col md:su-flex-row su-gap-32 su-pt-0 ${gridSettings}`}
          >
            {firstRow.map((meta) => (
              <div className="su-w-full md:su-w-auto md:su-min-w-[17rem]">
                <FeaturedField title={meta.name} alignment="center">
                  {meta.name !== "Campus unit" ? (
                    meta.items.map((item) => (
                      <p
                        className="!su-m-0 su-text-16 su-leading-snug su-font-normal md:su-text-21"
                        key={item.asset_assetid}
                      >
                        {item.asset_name}
                      </p>
                    ))
                  ) : (
                    <a
                      href={meta.items.asset_url}
                      className="su-no-underline su-leading-snug hover:su-underline su-text-digital-red dark:su-text-dark-mode-red dark:hover:su-text-dark-mode-red hover:su-text-digital-red su-text-18"
                    >
                      {meta.items.asset_name}
                    </a>
                  )}
                </FeaturedField>
              </div>
            ))}
          </div>

          <div
            aria-hidden="true"
            className="su-border-none su-grow su-w-70 su-h-2 su-bg-gradient-to-r su-from-digital-red-dark su-to-digital-red-light dark:su-from-palo-verde dark:su-to-olive md:su-w-auto md:su-h-3 su-mt-38 md:su-mt-0"
          />
        </div>
      ) : (
        ""
      )}
      {otherRows.length > 0 ? (
        <div className="su-flex su-w-full su-flex-col su-justify-center su-items-center su-rs-mt-4 md:su-flex-row md:su-gap-20 lg:su-gap-40">
          <div
            aria-hidden="true"
            className="su-border-none su-w-70 su-h-2 su-bg-transparent md:su-w-auto su-grow md:su-h-3"
          />

          <div
            className={`su-flex su-flex-col md:su-flex-row su-gap-32 ${gridSettings}`}
          >
            {otherRows.map((meta) => (
              <div className="su-w-full md:su-w-auto md:su-min-w-[170px]">
                <FeaturedField title={meta.name} alignment="center">
                  {meta.name !== "Campus unit" ? (
                    meta.items.map((item) => (
                      <p
                        className="!su-m-0 su-text-16 su-leading-snug su-font-normal md:su-text-21"
                        key={item.asset_assetid}
                      >
                        {item.asset_name}
                      </p>
                    ))
                  ) : (
                    <a
                      href={meta.items.asset_url}
                      className="su-no-underline su-leading-snug hover:su-underline su-text-digital-red dark:su-text-dark-mode-red dark:hover:su-text-dark-mode-red hover:su-text-digital-red su-text-18"
                    >
                      {meta.items.asset_name}
                    </a>
                  )}
                </FeaturedField>
              </div>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="su-hidden su-border-none su-w-70 su-h-2 su-bg-transparent md:su-w-auto su-grow md:su-h-3 md:su-block"
          />
        </div>
      ) : (
        ""
      )}
      {media && media.length > 0 ? (
        <div
          className={`media-contacts su-flex su-w-full su-flex-col su-justify-center su-items-center md:su-flex-row md:su-gap-20 lg:su-gap-40 ${
            firstRow.length > 0 ? "su-rs-mt-4" : ""
          }`}
        >
          {firstRow.length === 0 ? (
            <div
              aria-hidden="true"
              className="su-border-none su-grow su-w-70 su-h-2 su-bg-gradient-to-r su-from-digital-red-light su-to-digital-red-dark dark:su-from-palo-verde dark:su-to-olive md:su-w-auto md:su-h-3 su-mb-38 md:su-mb-0"
            />
          ) : (
            ""
          )}

          <div
            className={`su-flex su-flex-col md:su-flex-row su-gap-32 su-pt-0 ${gridSettings}`}
          >
            <div>
              <FeaturedField
                title={`Media contact${media.length > 1 ? "s" : ""}`}
                alignment="center"
              >
                <div
                  className={`md:su-grid ${
                    media >= 3
                      ? gridSettings
                      : "su-flex su-gap-15 su-flex-col md:su-gap-25"
                  }`}
                >
                  {media.map((item) => (
                    <div
                      className="su-m-0 su-text-16 su-leading-snug su-font-normal su-flex su-flex-col su-gap-3 md:su-text-21"
                      key={item.asset_assetid}
                    >
                      {item.asset_name}
                      {item.asset_metadata_personEmail &&
                        item.asset_metadata_personEmail.length > 0 && (
                          <>
                            <br />
                            <a
                              href={`mailto:${item.asset_metadata_personEmail}`}
                              className="hocus:su-no-underline"
                            >
                              {item.asset_metadata_personEmail}
                            </a>
                          </>
                        )}
                    </div>
                  ))}
                </div>
              </FeaturedField>
            </div>
          </div>

          {firstRow.length === 0 ? (
            <div
              aria-hidden="true"
              className="su-border-none su-grow su-w-70 su-h-2 su-bg-gradient-to-r su-from-digital-red-dark su-to-digital-red-light dark:su-from-palo-verde dark:su-to-olive md:su-w-auto md:su-h-3 su-mt-38 md:su-mt-0"
            />
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      {campus &&
      ![null, undefined, "undefined", ""].includes(campus.asset_assetid) ? (
        <div className="su-text-center su-rs-mt-4 su-flex su-flex-col su-gap-20 md:su-gap-26">
          <h3 className="su-text-18 su-font-bold su-leading-snug su-font-sans !su-m-0">
            Campus unit
          </h3>

          {!campus.asset_url ? (
            <div className="su-flex su-gap-20 su-max-w-[71.9rem] su-flex-col md:su-gap-x-27 md:su-gap-y-12 md:su-flex-row md:su-flex-wrap md:su-justify-center">
              {campus.asset_name}
            </div>
          ) : (
            <a
              href={campus.asset_url}
              className="su-leading-snug hocus:su-no-underline su-text-black hocus:su-text-digital-red dark:su-text-white dark:hocus:su-text-dark-mode-red su-text-19 su-font-semibold"
            >
              <div className="su-flex su-gap-20 su-max-w-[71.9rem] su-flex-col md:su-gap-x-27 md:su-gap-y-12 md:su-flex-row md:su-flex-wrap md:su-justify-center">
                {campus.asset_name}
              </div>
            </a>
          )}
        </div>
      ) : (
        ""
      )}

      {relatedFiltered && relatedFiltered.length ? (
        <div className="su-text-center su-rs-mt-4 su-flex su-flex-col su-gap-20 md:su-gap-26">
          <h3 className="su-text-18 su-font-bold su-leading-snug su-font-sans !su-m-0">
            Related topics
          </h3>

          <div className="su-flex su-gap-20 su-max-w-[71.9rem] su-flex-col md:su-gap-x-27 md:su-gap-y-12 md:su-flex-row md:su-flex-wrap md:su-justify-center">
            {relatedFiltered.map((item) =>
              item ? (
                <div key={item.asset_assetid}>
                  <a
                    href={item.asset_url}
                    className="su-leading-snug hocus:su-no-underline su-text-black hocus:su-text-digital-red dark:su-text-white dark:hocus:su-text-dark-mode-red su-text-19 su-font-semibold"
                  >
                    {item.asset_name}
                  </a>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="su-text-center su-rs-mt-4 su-flex su-flex-col su-gap-20 md:su-gap-26">
        <h3 className="su-text-18 su-font-bold su-leading-snug !su-m-0 su-font-sans">
          Share this story
        </h3>

        <button
          onClick={copyLink}
          type="button"
          data-role="copy-link"
          className="su-group su-text-digital-blue dark:su-text-digital-blue-vivid su-text-21 su-font-semibold su-mx-auto hocus:su-underline hocus:su-text-black dark:hocus:su-text-white su-transition-colors"
        >
          {copyLinkTitle}

          <span className="*:su-inline-block *:su-ml-8 group-hocus:*:*:su-fill-current">
            <ShareLink />
          </span>
        </button>
      </div>
    </section>
  );
}
