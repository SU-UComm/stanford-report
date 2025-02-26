import React from "react";
import { cnb } from "cnbuilder";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";

/**
 * Basic hero
 *
 * @param {string} title The props to display the hero
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function BasicHero(props) {
  const {
    title,
    titleAlignment,
    summary,
    updatesPage,
    backgroundColor,
    breadcrumb,
  } = props;
  return updatesPage === "yes" ? (
    <>
      <div
        className={cnb(
          "su-rs-py-5",
          backgroundColor === "cardinal" &&
            "su-bg-gradient-to-t su-from-cardinal-red-dark su-from-5% su-via-cardinal-red su-via-50% su-to-cardinal-red-dark su-to-95%",
          backgroundColor === "digital red" && "su-bg-digital-red",
          breadcrumb ? "su-rs-mb-0" : "su-rs-mb-3"
        )}
      >
        <Container
          width="wide"
          className={cnb(
            "su-grid su-grid-cols-6 su-grid-gap su-gap-y-0 md:su-grid-cols-12",
            "su-text-white"
          )}
        >
          <h1
            className={cnb(
              "su-font-serif su-drop-shadow-md su-mb-0 su-col-span-full lg:su-col-span-10 lg:su-col-start-2",
              titleAlignment === "center" && "su-text-center su-mx-auto"
            )}
          >
            {title}
          </h1>
          {summary && (
            <XssSafeContent
              className={cnb(
                "su-col-span-full lg:su-col-span-10 lg:su-col-start-2 xl:su-col-span-8 xl:su-col-start-3",
                "su-font-serif su-mb-0 su-rs-mt-2 su-text-[1.125em]",
                ""
              )}
              content={summary}
              elementType="div"
            />
          )}
        </Container>
      </div>
      {breadcrumb && (
        /* This feature is to come. Putting this here as placeholder. */
        <Container width="wide" className="su-rs-mb-3">
          <nav className="su-grid su-grid-cols-6 su-grid-gap su-gap-y-0 md:su-grid-cols-12">
            <ul className="su-col-span-8 su-col-start-3 su-p-0">
              <li className="su-inline">Parent page title</li>
              <li className="su-inline">Child page title</li>
            </ul>
          </nav>
        </Container>
      )}
    </>
  ) : (
    <Container>
      <div className="su-flex su-justify-between su-flex-wrap su-rs-mb-5">
        <h1
          className={cnb(
            "su-font-serif su-mb-0",
            titleAlignment === "center" && "su-text-center su-mx-auto"
          )}
        >
          {title}
        </h1>
      </div>
    </Container>
  );
}
