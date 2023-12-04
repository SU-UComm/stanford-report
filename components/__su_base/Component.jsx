import React from "react";

<<<<<<< HEAD
// these are our specific templates for the component.
import { LinkedHeading } from "../../packages/headings/LinkedHeading";
=======
// import specific templates for the component
import { LinkedHeading } from "../../packages/headings/Heading";
>>>>>>> develop

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
