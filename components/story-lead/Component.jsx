/* eslint-disable no-console */
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

function decodeHtml(str) {
  if (typeof document !== "undefined") {
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    console.log("decodeHTML:", txt.textContent);
    return txt.textContent;
  }
  return str; // Return the original string if not in a browser environment
}

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
    "*:su-text-20 md:*:su-text-25 lg:*:su-text-26 su-font-serif su-font-medium"
  );
  variantClasses.set(
    "Basic Story",
    "su-story-first-letter *:su-text-18 md:*:su-text-23"
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

  let formattedContent = content.replace(/’/g, "'");
  formattedContent = decodeHtml(formattedContent);
  formattedContent = formattedContent.replace("&nbsp;", " ");
  formattedContent = formattedContent.replace(/\s+/g, " ");
  let selectedSvg = null;

  if (hasContent) {
    const textContent = formattedContent.replace(/(<([^>]+)>)/gi, "");
    console.log("textContent:", textContent);
    const firstWord = textContent.trim().split(" ")[0];
    const firstLetter = firstWord[0];
    console.log("firstWord", firstWord);
    console.log("firstLetter: |", firstLetter, "|");
    selectedSvg = letterSvgs.get(firstLetter.toLowerCase());

    if (variant === "Featured Story") {
      const truncatedFirstWord = firstWord.trim().substring(1);
      console.log("truncatedFirstWord: |", truncatedFirstWord, "|");
      formattedContent =
        truncatedFirstWord.length > 0
          ? formattedContent.replace(
              firstWord,
              `<span aria-hidden="true">${truncatedFirstWord}</span><span class="sr-only">${firstWord}</span>`
            )
          : formattedContent.replace(
              firstWord,
              `<span class="sr-only">${firstWord}</span>`
            );
    }
    console.log("formattedContent", formattedContent);
  }
  console.log("content: |", content, "|");

  return hasContent ? (
    <Container width="narrow">
      {variant === "Featured Story" && (
        <span
          data-test="component-story-lead-letter"
          className="su-float-left [&>svg]:su-mt-3 md:[&>svg]:su--mt-2 lg:[&>svg]:su-mt-4 [&>svg]:su-w-41 [&>svg]:su-h-43 md:[&>svg]:su-w-[97px] md:[&>svg]:su-h-[102px] su-mr-8 lg:su-mr-19"
        >
          {selectedSvg}
        </span>
      )}
      <XssSafeContent
        className={["su-wysiwyg-content", variantClasses.get(variant)].join(
          " "
        )}
        elementType="div"
        data-test="component-story-lead"
        content={formattedContent}
      />
    </Container>
  ) : (
    ""
  );
}
