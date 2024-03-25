import React from "react";
import CtaCard from "../../packages/card/CtaCard";

export default function CtaCardsBlock({ cardsArray }) {
  return (
    <div className="su-relative su-cc su-flex su-grid-gap su-flex-col 2xl:su-flex-row su-py-10">
      {cardsArray.map((card) => {
        const { eyebrow, title, description, linkDetails, internalLinkUrl } =
          card;
        return (
          <CtaCard
            key={title}
            title={title}
            description={description}
            eyebrow={eyebrow}
            internalUrl={internalLinkUrl}
            externalUrl={linkDetails?.externalUrl}
            isNewWindow={linkDetails?.isNewWindow}
          />
        );
      })}
    </div>
  );
}
