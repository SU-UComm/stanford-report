import React from "react";

/**
 * Footer component
 *
 * @param {string} data The full HTML element to be printed
 * @returns {JSX.Element}
 * @constructor
 */

export default function Footer({ data }) {
  const markup = { __html: data };
  return <div dangerouslySetInnerHTML={markup} />;
}
