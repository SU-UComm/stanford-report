import React from "react";

// these are our specific templates for the component.
import { LinkedHeading } from "../../packages/headings/LinkedHeading";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function Base({ title }) {
  return <LinkedHeading title={title} />;
}
