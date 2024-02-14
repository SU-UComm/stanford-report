import React, { useState } from "react";
import FeaturedField from "./FeaturedField";
import { ShareLink } from "../SVG-library/SVG";

export default function FeaturedMetadata({ data }) {
  const {
    authors,
    producers,
    writers,
    editors,
    videographers,
    photography,
    media,
    campus,
    related,
  } = data;

  const [copyLinkTitle, setCopyLinkTitle] = useState("Copy link");

  const copyLink = () => {
    const { origin, pathname } = window.location;
    const url = origin + pathname;

    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
      if (result.state === "granted" || result.state === "propmp") {
        setCopyLinkTitle(() => "Copied");

        navigator.clipboard.writeText(url);

        setTimeout(() => {
          setCopyLinkTitle(() => "Copy link");
        }, 3000);
      }
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

  if (videographers && videographers.length) {
    metaMap.push({
      name: videographers.length > 1 ? "Videographers" : "Videographer",
      items: videographers,
    });
  }

  if (editors && editors.length) {
    metaMap.push({
      name: editors.length > 1 ? "Editors" : "Editor",
      items: editors,
    });
  }

  if (photography && photography.length) {
    metaMap.push({
      name:
        photography.length > 1
          ? "Photography directors"
          : "Photography director",
      items: photography,
    });
  }

  if (campus && typeof campus.asset_assetid !== "undefined") {
    metaMap.push({
      name: "Campus unit",
      items: campus,
    });
  }

  const firstRow = metaMap.slice(0, metaMap.length > 3 ? 3 : metaMap.length);
  const otherRows = metaMap.slice(3, metaMap.length);

  const gridSettings =
    "md:su-gap-x-[20px] md:su-gap-y-[70px] lg:su-gap-x-[40px] lg:su-gap-y-[61px]";

  return (
    <section className="su-flex su-flex-col su-items-center">
      {firstRow.length > 0 && (
        <div className="su-flex su-w-full su-flex-col su-justify-center su-items-center md:su-flex-row md:su-gap-[20px] lg:su-gap-[40px]">
          <hr
            aria-hidden="true"
            className="su-border-none su-flex-grow su-w-[70px] su-h-[2px] su-bg-gradient-to-r su-from-digital-red su-to-plum dark:su-from-palo-verde dark:su-to-olive md:su-w-auto md:su-h-[3px] su-mb-[38px] md:su-mb-0"
          />

          <div
            className={`su-flex su-flex-col md:su-flex-row su-gap-[32px] su-pt-0 ${gridSettings}`}
          >
            {firstRow.map((meta) => (
              <div className="su-w-full md:su-w-auto md:su-min-w-[170px]">
                <FeaturedField title={meta.name} alignment="center">
                  {meta.name !== "Campus unit" ? (
                    meta.items.map(
                      (item) =>
                        item && (
                          <p
                            className="su-m-0 su-text-[16px] su-leading-[19.1px] su-font-normal md:su-text-[21px] md:su-leading-[26.25px]"
                            key={item.asset_assetid}
                          >
                            {item.asset_name}
                          </p>
                        )
                    )
                  ) : (
                    <a
                      href={meta.items.asset_url}
                      className="su-no-underline su-leading-[125%] hover:su-underline su-text-digital-red dark:su-text-dark-mode-red dark:hover:su-text-dark-mode-red hover:su-text-digital-red su-text-[18px] su-leading-[26.25px]"
                    >
                      {meta.items.asset_name}
                    </a>
                  )}
                </FeaturedField>
              </div>
            ))}
          </div>

          <hr
            aria-hidden="true"
            className="su-hidden su-flex-grow su-rotate-180 su-border-none su-w-[70px] su-w-auto su-h-[2px] su-bg-gradient-to-r su-from-digital-red su-to-plum dark:su-from-palo-verde dark:su-to-olive md:su-block md:su-h-[3px]"
          />
        </div>
      )}
      {otherRows.length > 0 && (
        <div className="su-flex su-w-full su-flex-col su-justify-center su-items-center su-mt-[32px] md:su-mt-[61px] md:su-flex-row md:su-gap-[20px] lg:su-gap-[40px]">
          <hr
            aria-hidden="true"
            className="su-border-none su-w-[70px] su-h-[2px] su-bg-transparent md:su-w-auto su-flex-grow md:su-h-[3px]"
          />

          <div
            className={`su-flex su-flex-col md:su-flex-row su-gap-[32px] ${gridSettings}`}
          >
            {otherRows.map((meta) => (
              <div className="su-w-full md:su-w-auto md:su-min-w-[170px]">
                <FeaturedField title={meta.name} alignment="center">
                  {meta.name !== "Campus unit" ? (
                    meta.items.map(
                      (item) =>
                        item && (
                          <p
                            className="su-m-0 su-text-[16px] su-leading-[19.1px] su-font-normal md:su-text-[21px] md:su-leading-[26.25px]"
                            key={item.asset_assetid}
                          >
                            {item.asset_name}
                          </p>
                        )
                    )
                  ) : (
                    <a
                      href={meta.items.asset_url}
                      className="su-no-underline su-leading-[125%] hover:su-underline su-text-digital-red dark:su-text-dark-mode-red dark:hover:su-text-dark-mode-red hover:su-text-digital-red su-text-[18px] su-leading-[26.25px]"
                    >
                      {meta.items.asset_name}
                    </a>
                  )}
                </FeaturedField>
              </div>
            ))}
          </div>
          <hr
            aria-hidden="true"
            className="su-hidden su-border-none su-w-[70px] su-h-[2px] su-bg-transparent md:su-w-auto su-flex-grow md:su-h-[3px] md:su-block"
          />
        </div>
      )}

      <div
        className={`su-flex su-w-full su-flex-col su-justify-center su-items-center md:su-flex-row md:su-gap-[20px] lg:su-gap-[40px] ${
          firstRow.length > 0 ? "su-mt-[32px] md:su-mt-[61px]" : ""
        }`}
      >
        {firstRow.length === 0 && (
          <hr
            aria-hidden="true"
            className="su-border-none su-flex-grow su-w-[70px] su-h-[2px] su-bg-gradient-to-r su-from-digital-red su-to-plum dark:su-from-palo-verde dark:su-to-olive md:su-w-auto md:su-h-[3px] su-mb-[38px] md:su-mb-0"
          />
        )}
        <div
          className={`su-flex su-flex-col md:su-flex-row su-gap-[32px] su-pt-0 ${gridSettings}`}
        >
          {media && media.length && (
            <div>
              <FeaturedField
                title={`Media contact${media.length > 1 ? "s" : ""}`}
                alignment="center"
              >
                <div
                  className={`md:su-grid ${
                    media >= 3
                      ? gridSettings
                      : "su-flex su-gap-[10px] su-flex-col md:su-gap-[20px]"
                  }`}
                >
                  {media.map(
                    (item) =>
                      item && (
                        <div
                          className="su-m-0 su-text-[16px] su-leading-[19.1px] su-font-normal su-flex su-flex-col su-gap-[10px] md:su-text-[21px] md:su-leading-[26.25px]"
                          key={item.asset_assetid}
                        >
                          {item.asset_name}
                          {item.asset_metadata_personEmail &&
                            item.asset_metadata_personEmail.length > 0 && (
                              <>
                                <br />
                                <a
                                  href={`mailto:${item.asset_metadata_personEmail}`}
                                  className="su-m-0 su-text-[16px] su-leading-[19.1px] su-font-semibold su-mt-[13px] md:su-text-[21px] md:su-leading-[23.75px]"
                                >
                                  {item.asset_metadata_personEmail}
                                </a>
                              </>
                            )}
                        </div>
                      )
                  )}
                </div>
              </FeaturedField>
            </div>
          )}
        </div>

        {firstRow.length === 0 && (
          <hr
            aria-hidden="true"
            className="su-border-none su-flex-grow su-w-[70px] su-h-[2px] su-bg-gradient-to-r su-from-digital-red su-to-plum dark:su-from-palo-verde dark:su-to-olive md:su-w-auto md:su-h-[3px] su-mt-[38px] md:su-mt-0"
          />
        )}
      </div>

      {firstRow.length > 0 && (
        <hr
          aria-hidden="true"
          className="su-border-none su-flex-grow su-w-[70px] su-h-[2px] su-bg-gradient-to-r su-from-digital-red su-to-plum dark:su-from-palo-verde dark:su-to-olive md:su-w-auto md:su-h-[3px] su-mt-[38px] md:su-mt-0"
        />
      )}

      {related && related.length && (
        <div className="su-text-center su-mt-[34px] md:su-mt-[58px] lg:su-mt-[61px] su-flex su-flex-col su-gap-[20px] md:su-gap-[26px]">
          <h3 className="su-text-[18px] su-font-bold su-leading-[22.5px] su-font-sans su-m-0">
            Related topics
          </h3>

          <div className="su-flex su-gap-[20px] su-max-w-[719px] su-flex-col md:su-gap-x-[27px] md:su-gap-y-[12px] md:su-flex-row md:su-flex-wrap md:su-justify-center">
            {related.map(
              (item) =>
                item && (
                  <div key={item.asset_assetid}>
                    <a
                      href={item.asset_url}
                      className="su-no-underline su-leading-[125%] hover:su-underline su-text-digital-red dark:su-text-dark-mode-red dark:hover:su-text-dark-mode-red hover:su-text-digital-red su-text-[19px] su-font-semibold"
                    >
                      {item.asset_name}
                    </a>
                  </div>
                )
            )}
          </div>
        </div>
      )}

      <div className="su-text-center su-mt-[34px] md:su-mt-[58px] lg:su-mt-[61px] su-flex su-flex-col su-gap-[20px] md:su-gap-[26px]">
        <h3 className="su-text-[18px] su-font-bold su-leading-[22.5px] su-font-sans su-m-0">
          Share this story
        </h3>

        <button
          onClick={copyLink}
          type="button"
          data-role="copy-link"
          className="su-text-digital-blue su-text-[21px] su-font-semibold su-mx-auto"
        >
          {copyLinkTitle}

          <span className="[&>*]:su-inline-block [&>*]:su-ml-[8px]">
            <ShareLink />
          </span>
        </button>
      </div>
    </section>
  );
}
