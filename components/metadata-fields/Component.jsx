import React from "react";

// these are our specific templates for the component.
import { Container } from "../../packages/grids/Container";
/**
 * Metadata fields component
 *
 * @param {object} data JSON data for content
 * @returns {JSX.Element}
 * @constructor
 */

export default function MetadataFields({ data }) {
  const {
    type,
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

  console.log(data);

  // when basic story, left aligned content
  // type === Basic

  // when feature story, centre aligned content
  // type === Featured

  // light / dark mode

  return (
    data && (
      <Container width="large" data-component="metadata-fields">
        {authors && authors.length > 0 && (
          <div className="">
            <h3 className="">Author{authors.length > 1 && "s"}</h3>
            {authors.map((item) => (
              <div className="" key={item.asset_assetid}>
                {item.asset_name}
              </div>
            ))}
          </div>
        )}

        {producers && producers.length > 0 && (
          <div className="">
            <h3 className="">Producer{producers.length > 1 && "s"}</h3>
            {producers.map((item) => (
              <div className="" key={item.asset_assetid}>
                {item.asset_name}
              </div>
            ))}
          </div>
        )}

        {writers && writers.length > 0 && (
          <div className="">
            <h3 className="">Writer{writers.length > 1 && "s"}</h3>
            {writers.map((item) => (
              <div className="" key={item.asset_assetid}>
                {item.asset_name}
              </div>
            ))}
          </div>
        )}

        {editors && editors.length > 0 && (
          <div className="">
            <h3 className="">Editor{editors.length > 1 && "s"}</h3>
            {editors.map((item) => (
              <div className="" key={item.asset_assetid}>
                {item.asset_name}
              </div>
            ))}
          </div>
        )}

        {videographers && videographers.length > 0 && (
          <div className="">
            <h3 className="">Videographer{videographers.length > 1 && "s"}</h3>
            {videographers.map((item) => (
              <div className="" key={item.asset_assetid}>
                {item.asset_name}
              </div>
            ))}
          </div>
        )}

        {photography && photography.length > 0 && (
          <div className="">
            <h3 className="">
              Photography director{photography.length > 1 && "s"}
            </h3>
            {photography.map((item) => (
              <div className="" key={item.asset_assetid}>
                {item.asset_name}
              </div>
            ))}
          </div>
        )}

        {media && media.length > 0 && (
          <div className="">
            <h3 className="">Media contact{videographers.length > 1 && "s"}</h3>
            {media.map((item) => (
              <div className="" key={item.asset_assetid}>
                {item.asset_name}
                {item.asset_metadata_personEmail &&
                  item.asset_metadata_personEmail.length > 0 && (
                    <>
                      <br />
                      <a
                        href={`mailto:${item.asset_metadata_personEmail}`}
                        className="su-no-underline su-leading-[125%] hover:su-underline su-text-digital-red dark:su-text-dark-mode-red dark:hover:su-text-dark-mode-red hover:su-text-digital-red su-text-[18px]"
                      >
                        {item.asset_metadata_personEmail}
                      </a>
                    </>
                  )}
              </div>
            ))}
          </div>
        )}

        {campus && typeof campus.asset_assetid !== "undefined" && (
          <div className="">
            <h3 className="">Campus unit</h3>
            <div className="">
              <a
                href={campus.asset_url}
                className="su-no-underline su-leading-[125%] hover:su-underline su-text-digital-red dark:su-text-dark-mode-red dark:hover:su-text-dark-mode-red hover:su-text-digital-red su-text-[18px]"
              >
                {campus.asset_name}
              </a>
            </div>
          </div>
        )}

        {related && related.length > 0 && (
          <div className="">
            <h3 className="">Related topics</h3>
            {related.map((item) => (
              <div className="" key={item.asset_assetid}>
                <a
                  href={item.asset_url}
                  className="su-no-underline su-leading-[125%] hover:su-underline su-text-digital-red dark:su-text-dark-mode-red dark:hover:su-text-dark-mode-red hover:su-text-digital-red su-text-[18px]"
                >
                  {item.asset_name}
                </a>
              </div>
            ))}
          </div>
        )}
      </Container>
    )
  );
}
