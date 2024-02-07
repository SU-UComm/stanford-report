import React from "react";

import { Container } from "../../packages/grids/Container";

/**
 * Interactive Photo Card component
 *
 * @param {string} title The title of the text card
 * @param {string} eyebrow The eyebrow/superheading of the text card
 * @returns {JSX.Element}
 * @constructor
 */

export default function InteractivePhotoCard({
  title,
  eyebrow,
  content,
  imageUrl,
  imageAlignment,
}) {
  return <Container>{title}</Container>;
}
