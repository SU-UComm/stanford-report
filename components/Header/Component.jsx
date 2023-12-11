import React from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";

/**
 * Header component
 *
 * @param {string} data The full HTML element to be printed
 * @returns {JSX.Element}
 * @constructor
 */

export default function Header({ data }) {
  return <XssSafeContent
    content={data}
    elementType="div"
  />;
}
