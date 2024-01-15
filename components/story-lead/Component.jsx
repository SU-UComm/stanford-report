import React from "react";
import hash from "object-hash";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";
import { Container } from "../../packages/grids/Container";

/**
 * Renders out the In Brief component
 *
 * @param {string} title
 * the title of the component
 *
 * @param {string} points
 * the bullet points items
 *
 * @returns {JSX.Element}
 */
export default function StoryLead({ content }) {
  const hasContent = content !== null && content !== undefined;
  return hasContent ? (
    <Container width="narrow">
      <div className="su-border-b-[1px] su-border-black-20">
        <div className="su-relative su-overflow-hidden">
          <h2 className="su-font-serif su-inline su-bg-white dark:su-bg-black-true !su-text-[23px] su-pr-[10px] su-m-0">
            In Brief
          </h2>
          <span className="su-w-full su-bg-black-20 su-h-[1px] su-absolute su-bottom-[4px]" />
        </div>
        <div className="su-wysiwyg-content">
          <XssSafeContent
            elementType="div"
            className={[""].join(" ")}
            content={content}
          />
        </div>
      </div>
    </Container>
  ) : (
    ""
  );
}
