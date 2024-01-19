import React from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { Container } from "../../packages/grids/Container";
import { LetterA } from "../../packages/SVG-library/SVG";

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
  const variantClasses = new Map();
  variantClasses.set("Featured Story", "[&>*]:su-text-[26px]");
  variantClasses.set(
    "Basic Story",
    "su-story-first-letter [&>*]:su-text-[23px]"
  );

  const letterSvgs = new Map();
  letterSvgs.set("a", <LetterA />);
  letterSvgs.set("t", <LetterA />);

  let formattedContent = content;
  const textContent = formattedContent.replace(/(<([^>]+)>)/gi, "");
  const firstWord = textContent.split(" ")[0];
  const firstLetter = firstWord[0];
  const selectedSvg = letterSvgs.get(firstLetter.toLowerCase());

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

  const hasContent = content !== null && content !== undefined;
  return hasContent ? (
    <Container width="narrow">
      {selectedSvg}
      <XssSafeContent
        className={[
          "su-wysiwyg-content su-mt-[45px]",
          variantClasses.get(variant),
        ].join(" ")}
        elementType="span"
        content={formattedContent}
      />
    </Container>
  ) : (
    ""
  );
}
