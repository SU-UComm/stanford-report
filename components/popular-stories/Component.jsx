import React from "react";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";
import { SidebarHeading } from "../../packages/headings/Heading";
/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function PopularStories() {
  return (
    <div className="su-flex su-gap-[1.8rem] su-flex-col">
      <SidebarHeading title="Popular stories" icon="trendingup" />

      <div>
        <ol className="su-text-[2.0rem] su-font-normal su-leading-[2.4rem]">
          <li>
            <a
              href="#"
              className="su-no-underline su-font-normal dark:su-text-[white]"
            >
              Stanford engineers create perching bird-like robot
            </a>
          </li>

          <li>
            <a
              href="#"
              className="su-no-underline su-font-normal dark:su-text-[white]"
            >
              Introducing MARTY, Stanford's self-driving, electric, drifting
              DeLorean
            </a>
          </li>

          <li>
            <a
              href="#"
              className="su-no-underline su-font-normal dark:su-text-[white]"
            >
              OceanOneK, Stanford's underwater humanoid robot, swins to new
              depths
            </a>
          </li>

          <li>
            <a
              href="#"
              className="su-no-underline su-font-normal dark:su-text-[white]"
            >
              New model helps fill gaps in African American ancestry
            </a>
          </li>

          <li>
            <a
              href="#"
              className="su-no-underline su-font-normal dark:su-text-[white]"
            >
              Consortium brings students together for conversations across
              policical divides
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
