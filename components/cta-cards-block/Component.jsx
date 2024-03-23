import React from "react";
import CtaCard from "../../packages/card/CtaCard";

export default function CtaCardsBlock({ cardsArray }) {
  return (
    <div className="su-relative su-cc su-bg-fog-light">
      <div className="su-relative su-flex su-grid-gap su-flex-col xl:su-flex-row">
        {cardsArray.map((card) => {
          const { eyebrow, title, description, linksDetail, internalLinkUrl } =
            card;
          return (
            <CtaCard
              key={title}
              title={title}
              description={description}
              eyebrow={eyebrow}
              internalUrl={internalLinkUrl}
              externalUrl={linksDetail?.externalUrl}
              isNewWindow={linksDetail?.isNewWindow}
            />
          );
        })}
      </div>
    </div>
  );
}
