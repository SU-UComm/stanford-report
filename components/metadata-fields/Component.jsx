import React from "react";

// these are our specific templates for the component.
import { Container } from "../../packages/grids/Container";
import BasicMetadata from "../../packages/metadata-fields/BasicMetadata";
import FeaturedMetadata from "../../packages/metadata-fields/FeaturedMetadata";

/**
 * Metadata fields component
 *
 * @param {object} data JSON data for content
 * @returns {JSX.Element}
 * @constructor
 */

export default function MetadataFields(data) {
  const { type } = data;

  // switch (type) {
  switch ("Featured") {
    case "Basic":
      return (
        <Container width="narrow" data-component="metadata-fields">
          <BasicMetadata data={data} />
        </Container>
      );
    default:
      return (
        <Container width="large" data-component="metadata-fields">
          <FeaturedMetadata data={data} />
        </Container>
      );
  }
}
