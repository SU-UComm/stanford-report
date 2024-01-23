import React from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { Container } from "../../packages/grids/Container";
import {
  LetterA,
  LetterB,
  LetterC,
  LetterD,
  LetterE,
  LetterF,
  LetterG,
  LetterH,
  LetterI,
  LetterJ,
  LetterK,
  LetterL,
  LetterM,
  LetterN,
  LetterO,
  LetterP,
  LetterQ,
  LetterR,
  LetterS,
  LetterT,
  LetterU,
  LetterV,
  LetterW,
  LetterX,
  LetterY,
  LetterZ,
} from "../../packages/SVG-library/SVG";

/**
 * Renders out the Story Lead component
 *
 * @param {string} content
 * the lead paragraph
 *
 * @param {string} variant
 * the variant to display as
 *
 * @returns {JSX.Element}
 */
export default function StoryLead({ content, variant }) {
  const hasContent = content !== null && content !== undefined;
  const variantClasses = new Map();
  variantClasses.set(
    "Featured Story",
    "[&>*]:su-text-[20px] md:[&>*]:su-text-[25px] lg:[&>*]:su-text-[26px] su-font-serif su-font-medium"
  );
  variantClasses.set(
    "Basic Story",
    "su-story-first-letter [&>*]:su-text-[18px] md:[&>*]:su-text-[23px]"
  );

  const letterSvgs = new Map();
  letterSvgs.set("a", <LetterA />);
  letterSvgs.set("b", <LetterB />);
  letterSvgs.set("c", <LetterC />);
  letterSvgs.set("d", <LetterD />);
  letterSvgs.set("e", <LetterE />);
  letterSvgs.set("f", <LetterF />);
  letterSvgs.set("g", <LetterG />);
  letterSvgs.set("h", <LetterH />);
  letterSvgs.set("i", <LetterI />);
  letterSvgs.set("j", <LetterJ />);
  letterSvgs.set("k", <LetterK />);
  letterSvgs.set("l", <LetterL />);
  letterSvgs.set("m", <LetterM />);
  letterSvgs.set("n", <LetterN />);
  letterSvgs.set("o", <LetterO />);
  letterSvgs.set("p", <LetterP />);
  letterSvgs.set("q", <LetterQ />);
  letterSvgs.set("r", <LetterR />);
  letterSvgs.set("s", <LetterS />);
  letterSvgs.set("t", <LetterT />);
  letterSvgs.set("u", <LetterU />);
  letterSvgs.set("v", <LetterV />);
  letterSvgs.set("w", <LetterW />);
  letterSvgs.set("x", <LetterX />);
  letterSvgs.set("y", <LetterY />);
  letterSvgs.set("z", <LetterZ />);

  let formattedContent = content;
  let selectedSvg = null;

  if (hasContent) {
    const textContent = formattedContent.replace(/(<([^>]+)>)/gi, "");
    const firstWord = textContent.split(" ")[0];
    const firstLetter = firstWord[0];
    selectedSvg = letterSvgs.get(firstLetter.toLowerCase());

    if (variant === "Featured Story") {
      const truncatedFirstWord = firstWord.substring(1);
      formattedContent =
        truncatedFirstWord.length > 0
          ? content.replace(
              firstWord,
              `<span aria-hidden="true">${truncatedFirstWord}</span><span class="sr-only">${firstWord}</span>`
            )
          : content.replace(
              firstWord,
              `<span class="sr-only">${firstWord}</span>`
            );
    }
  }

  return hasContent ? (
    <Container width="narrow">
      {variant === "Featured Story" && (
        <span
          data-test="component-story-lead-letter"
          className="su-float-left [&>svg]:su-mt-[3px] md:[&>svg]:su-mt-[-2px] lg:[&>svg]:su-mt-[4px] [&>svg]:su-w-[41px] [&>svg]:su-h-[43px] md:[&>svg]:su-w-[97px] md:[&>svg]:su-h-[102px] su-mr-[8px] lg:su-mr-[19px]"
        >
          {selectedSvg}
        </span>
      )}
      <XssSafeContent
        className={[
          "su-wysiwyg-content su-mt-[45px]",
          variantClasses.get(variant),
        ].join(" ")}
        elementType="div"
        data-test="component-story-lead"
        content={formattedContent}
      />
    </Container>
  ) : (
    ""
  );
}
