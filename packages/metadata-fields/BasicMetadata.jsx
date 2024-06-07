import React, { useState } from "react";

import BasicFields from "./BasicField";
import { ShareLink } from "../SVG-library/SVG";

export default function BasicMetadata({ data }) {
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
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopyLinkTitle(() => "Copied");

      setTimeout(() => {
        setCopyLinkTitle(() => "Copy link");
      }, 3000);
    });
  };

  const relatedTopics = [];

  const relatedFiltered = related.filter((item) => {
    if (!relatedTopics.includes(item.asset_name)) {
      relatedTopics.push(item.asset_name);

      return item;
    }

    return null;
  });

  return (
    <section className="su-border-b su-border-b-black-20 su-pt-32 su-mb-32 md:su-pt-36 lg:su-border-b-transparent lg:su-mb-[104px]">
      {authors && authors.length ? (
        <div className="su-border-t border-t-black-20">
          <BasicFields title={`Author${authors.length > 1 ? "s" : ""}`}>
            {authors.map(
              (item) =>
                item && (
                  <p
                    className="!su-m-0 su-text-21 su-leading-[1.25]"
                    key={item.asset_assetid}
                  >
                    {item.asset_name}
                  </p>
                )
            )}
          </BasicFields>
        </div>
      ) : (
        ""
      )}

      {producers && producers.length ? (
        <div className="su-border-t border-t-black-20">
          <BasicFields title={`Producer${producers.length > 1 ? "s" : ""}`}>
            {producers.map(
              (item) =>
                item && (
                  <p
                    className="!su-m-0 su-text-21 su-leading-[1.25]"
                    key={item.asset_assetid}
                  >
                    {item.asset_name}
                  </p>
                )
            )}
          </BasicFields>
        </div>
      ) : (
        ""
      )}

      {writers && writers.length ? (
        <div className="su-border-t border-t-black-20">
          <BasicFields title={`Writer${writers.length > 1 ? "s" : ""}`}>
            {writers.map(
              (item) =>
                item && (
                  <p
                    className="!su-m-0 su-text-21 su-leading-[1.25]"
                    key={item.asset_assetid}
                  >
                    {item.asset_name}
                  </p>
                )
            )}
          </BasicFields>
        </div>
      ) : (
        ""
      )}

      {editors && editors.length ? (
        <div className="su-border-t border-t-black-20">
          <BasicFields title={`Editor${editors.length > 1 ? "s" : ""}`}>
            {editors.map(
              (item) =>
                item && (
                  <p
                    className="!su-m-0 su-text-21 su-leading-[1.25]"
                    key={item.asset_assetid}
                  >
                    {item.asset_name}
                  </p>
                )
            )}
          </BasicFields>
        </div>
      ) : (
        ""
      )}

      {videographers && videographers.length ? (
        <div className="su-border-t border-t-black-20">
          <BasicFields
            title={`Videographer${videographers.length > 1 ? "s" : ""}`}
          >
            {videographers.map(
              (item) =>
                item && (
                  <p
                    className="!su-m-0 su-text-21 su-leading-[1.25]"
                    key={item.asset_assetid}
                  >
                    {item.asset_name}
                  </p>
                )
            )}
          </BasicFields>
        </div>
      ) : (
        ""
      )}

      {photography && photography.length ? (
        <div className="su-border-t border-t-black-20">
          <BasicFields
            title={`Photography director${photography.length > 1 ? "s" : ""}`}
          >
            {photography.map(
              (item) =>
                item && (
                  <p
                    className="!su-m-0 su-text-21 su-leading-[1.25]"
                    key={item.asset_assetid}
                  >
                    {item.asset_name}
                  </p>
                )
            )}
          </BasicFields>
        </div>
      ) : (
        ""
      )}

      {media && media.length ? (
        <div className="su-border-t border-t-black-20">
          <BasicFields title={`Media contact${media.length > 1 ? "s" : ""}`}>
            {media.map(
              (item) =>
                item && (
                  <div className="" key={item.asset_assetid}>
                    {item.asset_name}
                    {item.asset_metadata_personEmail &&
                      item.asset_metadata_personEmail.length > 0 && (
                        <>
                          <br />
                          <a
                            href={`mailto:${item.asset_metadata_personEmail}`}
                            className="su-no-underline su-leading-[125%] hover:su-underline su-text-digital-red dark:su-text-dark-mode-red dark:hover:su-text-dark-mode-red hover:su-text-digital-red su-text-18 su-leading-[26.25px]"
                          >
                            {item.asset_metadata_personEmail}
                          </a>
                        </>
                      )}
                  </div>
                )
            )}
          </BasicFields>
        </div>
      ) : (
        ""
      )}

      {campus &&
      !["undefined", undefined, null, ""].includes(campus.asset_assetid) ? (
        <div className="su-border-t border-t-black-20">
          <BasicFields title="Campus unit">
            <a
              href={campus.asset_url}
              className="su-no-underline su-leading-[22.5px] hover:su-underline su-text-digital-red dark:su-text-dark-mode-red dark:hover:su-text-dark-mode-red hover:su-text-digital-red su-text-18 su-leading-[26.25px]"
            >
              {campus.asset_name}
            </a>
          </BasicFields>
        </div>
      ) : (
        ""
      )}

      {relatedFiltered && relatedFiltered.length ? (
        <div className="su-border-t border-t-black-20">
          <BasicFields
            title="Related topics"
            contentCSS="md:su-flex-row md:su-gap-27 md:su-flex-wrap"
          >
            {relatedFiltered.map(
              (item) =>
                item && (
                  <div className="" key={item.asset_assetid}>
                    <a
                      href={item.asset_url}
                      className="su-no-underline su-leading-[125%] hover:su-underline su-text-digital-red dark:su-text-dark-mode-red dark:hover:su-text-dark-mode-red hover:su-text-digital-red su-text-18 su-leading-[26.25px]"
                    >
                      {item.asset_name}
                    </a>
                  </div>
                )
            )}
          </BasicFields>
        </div>
      ) : (
        ""
      )}

      <div className="su-border-t border-t-black-20">
        <BasicFields title="Share this story">
          <button
            onClick={copyLink}
            data-role="copy-link"
            type="button"
            className="su-text-digital-blue dark:su-text-digital-blue-vivid su-text-21 su-font-semibold su-mr-auto hocus:su-underline su-leading-[125%]"
          >
            {copyLinkTitle}

            <span className="*:su-inline-block *:su-ml-8">
              <ShareLink />
            </span>
          </button>
        </BasicFields>
      </div>
    </section>
  );
}
