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

  return (
    <section className="su-border-b-[1px] su-border-solid su-border-b-black-20 su-pt-[32px] su-mb-[32px] md:su-pt-[36px] lg:su-border-b-transparent lg:su-mb-[104px]">
      {authors && authors.length ? (
        <div className="su-border-t-[1px] su-border-solid border-t-black-20">
          <BasicFields title={`Author${authors.length > 1 ? "s" : ""}`}>
            {authors.map(
              (item) =>
                item && (
                  <p
                    className="su-m-0 su-text-[21px] su-leading-[26.25px]"
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
        <div className="su-border-t-[1px] su-border-solid border-t-black-20">
          <BasicFields title={`Producer${producers.length > 1 ? "s" : ""}`}>
            {producers.map(
              (item) =>
                item && (
                  <p
                    className="su-m-0 su-text-[21px] su-leading-[26.25px]"
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
        <div className="su-border-t-[1px] su-border-solid border-t-black-20">
          <BasicFields title={`Writer${writers.length > 1 ? "s" : ""}`}>
            {writers.map(
              (item) =>
                item && (
                  <p
                    className="su-m-0 su-text-[21px] su-leading-[26.25px]"
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
        <div className="su-border-t-[1px] su-border-solid border-t-black-20">
          <BasicFields title={`Editor${editors.length > 1 ? "s" : ""}`}>
            {editors.map(
              (item) =>
                item && (
                  <p
                    className="su-m-0 su-text-[21px] su-leading-[26.25px]"
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
        <div className="su-border-t-[1px] su-border-solid border-t-black-20">
          <BasicFields
            title={`Videographer${videographers.length > 1 ? "s" : ""}`}
          >
            {videographers.map(
              (item) =>
                item && (
                  <p
                    className="su-m-0 su-text-[21px] su-leading-[26.25px]"
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
        <div className="su-border-t-[1px] su-border-solid border-t-black-20">
          <BasicFields
            title={`Photography director${photography.length > 1 ? "s" : ""}`}
          >
            {photography.map(
              (item) =>
                item && (
                  <p
                    className="su-m-0 su-text-[21px] su-leading-[26.25px]"
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
        <div className="su-border-t-[1px] su-border-solid border-t-black-20">
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
                            className="su-no-underline su-leading-[125%] hover:su-underline su-text-digital-red dark:su-text-dark-mode-red dark:hover:su-text-dark-mode-red hover:su-text-digital-red su-text-[18px] su-leading-[26.25px]"
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

      {campus && typeof campus.asset_assetid !== "undefined" ? (
        <div className="su-border-t-[1px] su-border-solid border-t-black-20">
          <BasicFields title="Campus unit">
            <a
              href={campus.asset_url}
              className="su-no-underline su-leading-[125%] hover:su-underline su-text-digital-red dark:su-text-dark-mode-red dark:hover:su-text-dark-mode-red hover:su-text-digital-red su-text-[18px] su-leading-[26.25px]"
            >
              {campus.asset_name}
            </a>
          </BasicFields>
        </div>
      ) : (
        ""
      )}

      {related && related.length ? (
        <div className="su-border-t-[1px] su-border-solid border-t-black-20">
          <BasicFields title="Related topics">
            {related.map(
              (item) =>
                item && (
                  <div className="" key={item.asset_assetid}>
                    <a
                      href={item.asset_url}
                      className="su-no-underline su-leading-[125%] hover:su-underline su-text-digital-red dark:su-text-dark-mode-red dark:hover:su-text-dark-mode-red hover:su-text-digital-red su-text-[18px] su-leading-[26.25px]"
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

      <div className="su-border-t-[1px] su-border-solid border-t-black-20">
        <BasicFields title="Share this story">
          <button
            onClick={copyLink}
            data-role="copy-link"
            type="button"
            className="su-text-digital-blue su-text-[21px] su-font-semibold su-mr-auto su-leading-[26.25px]"
          >
            {copyLinkTitle}

            <span className="[&>*]:su-inline-block [&>*]:su-ml-[8px]">
              <ShareLink />
            </span>
          </button>
        </BasicFields>
      </div>
    </section>
  );
}
