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

  const gridSettings =
    "md:su-grid md:su-grid-cols-3 md:su-gap-x-[20px] md:su-gap-y-[70px] lg:su-gap-x-[40px] lg:su-gap-y-[61px]";

  return (
    <section className="su-flex su-flex-col su-items-center su-pb-[81px]">
      <div className="su-flex su-flex-col su-items-center su-pt-[70px] md:su-flex-row md:su-gap-[20px] lg:su-gap-[40px]">
        <hr
          aria-hidden="true"
          className="su-border-none su-w-[70px] su-h-[2px] su-bg-gradient-to-r su-from-digital-red su-to-plum dark:su-from-palo-verde dark:su-to-olive md:su-w-[73.5px] md:su-h-[3px] lg:su-w-[129px]"
        />

        <div
          className={`su-flex su-flex-col su-gap-[32px] su-pt-[38px] ${gridSettings}`}
        >
          {authors && authors.length && (
            <div>
              <FeaturedField
                title={`Author${authors.length > 1 ? "s" : ""}`}
                alignment="center"
              >
                {authors.map((item) => (
                  <p
                    className="su-m-0 su-text-[16px] su-leading-[19.1px] su-font-normal md:su-text-[21px] md:su-leading-[26.25px]"
                    key={item.asset_assetid}
                  >
                    {item.asset_name}
                  </p>
                ))}
              </FeaturedField>
            </div>
          )}

          {producers && producers.length && (
            <div>
              <FeaturedField
                title={`Producer${producers.length > 1 ? "s" : ""}`}
                alignment="center"
              >
                {producers.map((item) => (
                  <p
                    className="su-m-0 su-text-[16px] su-leading-[19.1px] su-font-normal md:su-text-[21px] md:su-leading-[26.25px]"
                    key={item.asset_assetid}
                  >
                    {item.asset_name}
                  </p>
                ))}
              </FeaturedField>
            </div>
          )}

          {writers && writers.length && (
            <div>
              <FeaturedField
                title={`Writer${writers.length > 1 ? "s" : ""}`}
                alignment="center"
              >
                {writers.map((item) => (
                  <p
                    className="su-m-0 su-text-[16px] su-leading-[19.1px] su-font-normal md:su-text-[21px] md:su-leading-[26.25px]"
                    key={item.asset_assetid}
                  >
                    {item.asset_name}
                  </p>
                ))}
              </FeaturedField>
            </div>
          )}

          {videographers && videographers.length && (
            <div>
              <FeaturedField
                title={`Videographer${videographers.length > 1 ? "s" : ""}`}
                alignment="center"
              >
                {videographers.map((item) => (
                  <p
                    className="su-m-0 su-text-[16px] su-leading-[19.1px] su-font-normal md:su-text-[21px] md:su-leading-[26.25px]"
                    key={item.asset_assetid}
                  >
                    {item.asset_name}
                  </p>
                ))}
              </FeaturedField>
            </div>
          )}

          {editors && editors.length && (
            <div>
              <FeaturedField
                title={`Editor${editors.length > 1 ? "s" : ""}`}
                alignment="center"
              >
                {editors.map((item) => (
                  <p
                    className="su-m-0 su-text-[16px] su-leading-[19.1px] su-font-normal md:su-text-[21px] md:su-leading-[26.25px]"
                    key={item.asset_assetid}
                  >
                    {item.asset_name}
                  </p>
                ))}
              </FeaturedField>
            </div>
          )}

          {photography && photography.length && (
            <div>
              <FeaturedField
                title={`Photography director${
                  photography.length > 1 ? "s" : ""
                }`}
                alignment="center"
              >
                {photography.map((item) => (
                  <p
                    className="su-m-0 su-text-[16px] su-leading-[19.1px] su-font-normal md:su-text-[21px] md:su-leading-[26.25px]"
                    key={item.asset_assetid}
                  >
                    {item.asset_name}
                  </p>
                ))}
              </FeaturedField>
            </div>
          )}

          {campus && typeof campus.asset_assetid !== "undefined" && (
            <FeaturedField title="Campus unit" alignment="center">
              <a
                href={campus.asset_url}
                className="su-m-0 su-text-[16px] su-leading-[19.1px] su-font-normal md:su-text-[21px] md:su-leading-[26.25px]"
              >
                {campus.asset_name}
              </a>
            </FeaturedField>
          )}
        </div>

        <hr
          aria-hidden="true"
          className="su-hidden su-border-none su-w-[70px] su-h-[2px] su-bg-gradient-to-r su-from-digital-red su-to-plum dark:su-from-palo-verde dark:su-to-olive md:su-block md:su-w-[73.5px] md:su-h-[3px] lg:su-w-[129px]"
        />
      </div>

      <div className="su-pb-[49px] su-pt-[38px] md:su-py-[58px]">
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
                {media.map((item) => (
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
                ))}
              </div>
            </FeaturedField>
          </div>
        )}
      </div>

      <hr
        aria-hidden="true"
        className="su-border-none su-w-[70px] su-h-[2px] su-bg-gradient-to-r su-from-digital-red su-to-plum su-mb-[45px] dark:su-from-palo-verde dark:su-to-olive md:su-hidden"
      />

      {related && related.length && (
        <div className="su-text-center su-flex su-flex-col su-gap-[20px] md:su-gap-[26px]">
          <h3 className="su-text-[18px] su-font-bold su-leading-[22.5px] su-font-sans su-m-0">
            Related topics
          </h3>

          <div className="su-flex su-gap-[20px] su-max-w-[719px] su-flex-col md:su-gap-x-[27px] md:su-gap-y-[12px] md:su-flex-row md:su-flex-wrap md:su-justify-center">
            {related.map((item) => (
              <div key={item.asset_assetid}>
                <a
                  href={item.asset_url}
                  className="su-no-underline su-leading-[125%] hover:su-underline su-text-digital-red dark:su-text-dark-mode-red dark:hover:su-text-dark-mode-red hover:su-text-digital-red su-text-[19px] su-font-semibold"
                >
                  {item.asset_name}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={copyLink}
        type="button"
        data-role="copy-link"
        className="su-text-digital-blue su-text-[21px] su-font-semibold su-mx-auto su-mt-[58px]"
      >
        {copyLinkTitle}

        <span className="[&>*]:su-inline-block [&>*]:su-ml-[8px]">
          <ShareLink />
        </span>
      </button>
    </section>
  );
}
