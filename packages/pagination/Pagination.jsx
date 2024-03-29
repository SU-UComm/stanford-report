import React from "react";
import hash from "object-hash";
import { Container } from "../grids/Container";
import ChevronRight from "../SVG-library/ChevronRight";
import ChevronLeft from "../SVG-library/ChevronLeft";

export default function Pagination({
  pageNumber,
  allResults,
  resultsPerPage,
  paginationRange,
  onPageChange,
}) {
  const pages = Math.ceil(allResults / resultsPerPage);
  const forwardRangeNum = pageNumber + paginationRange * resultsPerPage;
  const backwardRangeNum = pageNumber - paginationRange * resultsPerPage;
  const activeClass = "su-bg-digital-red su-rounded-[100px] su-text-white";
  const nonActiveClass = "su-text-black ";
  const prevPage = pageNumber - resultsPerPage;
  const nextPage = pageNumber + resultsPerPage;
  const finalPageClass = "su-text-black-50";
  const buttons = [];
  const offsets = [];

  for (let i = 0; i < pages; i++) {
    const offsetNum = i * resultsPerPage + 1;

    offsets.push(offsetNum);

    if (offsetNum >= backwardRangeNum && offsetNum <= forwardRangeNum) {
      buttons.push(
        <button
          data-offset={offsetNum}
          className={`su-size-24 su-font-serif su-flex su-items-center su-justify-center su-text-18 dark:su-text-white ${
            offsetNum === pageNumber ? activeClass : nonActiveClass
          }`}
          disabled={offsetNum === pageNumber}
          key={hash.MD5(offsetNum)}
          type="button"
          onClick={({ target }) => onPageChange(target.dataset.offset)}
        >
          {i + 1}
        </button>
      );
    }
  }

  return pages > 1 ? (
    <Container>
      <div className="su-flex su-gap-9 su-items-center su-justify-center su-my-38 md:su-my-72 lg:su-my-76">
        <button
          type="button"
          className={`su-size-24 su-font-serif su-flex su-items-center su-justify-center dark:su-text-white ${
            prevPage < 1 ? finalPageClass : ""
          }`}
          disabled={prevPage < 1}
          data-offset={prevPage < 1 ? 1 : prevPage}
          onClick={({ currentTarget }) =>
            onPageChange(currentTarget.dataset.offset)
          }
          aria-label="Previous page"
          title="Previous page"
        >
          <ChevronLeft />
        </button>

        {buttons}

        <button
          type="button"
          className={`su-size-24 su-font-serif su-flex su-items-center su-justify-center dark:su-text-white ${
            nextPage > offsets[offsets.length - 1] ? finalPageClass : ""
          }`}
          disabled={nextPage > offsets[offsets.length - 1]}
          data-offset={
            nextPage > offsets[offsets.length - 1]
              ? offsets[offsets.length - 1]
              : nextPage
          }
          onClick={({ currentTarget }) =>
            onPageChange(currentTarget.dataset.offset)
          }
          aria-label="Next page"
          title="Next page"
        >
          <ChevronRight />
        </button>
      </div>
    </Container>
  ) : (
    ""
  );
}
