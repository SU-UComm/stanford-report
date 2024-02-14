import React from "react";

/**
 * Subtopics Subnav component
 *
 * @param {string} data The full HTML element to be printed
 * @returns {JSX.Element}
 * @constructor
 */

export default function SubtopicSubnav({
  title,
  isTopLevel,
  parent,
  children,
}) {
  return <div className="subtopics">{title && <h1>{title}</h1>}</div>;
}
