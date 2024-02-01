import React from "react";

import BasicFields from "./BasicField";

export default function BasicMetadata({ data }) {
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

  return (
    <section>
      <BasicFields title={`Author${authors.length > 1 && "s"}`}>
        {authors.map((item) => (
          <p className="su-m-0" key={item.asset_assetid}>
            {item.asset_name}
          </p>
        ))}
      </BasicFields>
    </section>
  );
}
