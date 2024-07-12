import React from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { Container } from "../../packages/grids/Container";

/**
 * Single Text Block component
 *
 * @param {string} title The title of the text card
 * @param {string} eyebrow The eyebrow/superheading of the text card
 * @param {string} content The content on the flip side of the text card
 * @returns {JSX.Element}
 * @constructor
 */

export default function SingleTextBlock({ title, eyebrow, content }) {
  return (
    <Container>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <XssSafeContent
        data-test="single-text-block-content"
        className="su-big-paragraph su-grow"
        content={content}
      />
    </Container>
  );
}
