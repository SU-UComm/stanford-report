import React from "react";

/**
 * Header component
 *
 * @param {string} data The full HTML element to be printed
 * @returns {JSX.Element}
 * @constructor
 */

export default function Header({ data }) {
  const markup = { __html: data };
  return <div dangerouslySetInnerHTML={markup} />;
}
