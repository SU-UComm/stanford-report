import React, { useState } from "react";
import hash from "object-hash";
import { Container } from "../grids/Container";
import ChevronRight from "../SVG-library/ChevronRight";
import ChevronLeft from "../SVG-library/ChevronLeft";

function PaginationButtons({ offsetNum, pageNumber, index, onPaginate }) {
  const activeClass = "su-bg-digital-red su-rounded-[100px] su-text-white";
  const nonActiveClass = "su-text-black ";

  return (
    <button
      data-offset={offsetNum}
      className={`su-size-24 su-font-serif su-flex su-items-center su-justify-center su-text-18 dark:su-text-white ${
        offsetNum === pageNumber ? activeClass : nonActiveClass
      }`}
      disabled={offsetNum === pageNumber}
      type="button"
      onClick={onPaginate}
    >
      {index}
    </button>
  );
}

export default function Pagination({
  pageNumber,
  allResults,
  resultsPerPage,
  paginationRange,
  onPageChange,
}) {
  const pages = Math.ceil(allResults / resultsPerPage);

  // const forwardRangeNum = pageNumber + paginationRange * resultsPerPage;
  // const backwardRangeNum = pageNumber - paginationRange * resultsPerPage;
  const initialRange = paginationRange;
  // const activeClass = "su-bg-digital-red su-rounded-[100px] su-text-white";
  // const nonActiveClass = "su-text-black ";

  const prevRange = pageNumber - 10 * (paginationRange * 0.5);
  const nextRange = pageNumber + 10 * (paginationRange * 0.5);

  const prevPage = pageNumber - resultsPerPage;
  const nextPage = pageNumber + resultsPerPage;
  const finalPageClass = "su-text-black-50";
  const buttons = [];
  const offsets = [];

  // state
  const [currentPage, setCurrentPage] = useState(1);

  for (let i = 0; i < pages; i++) {
    const offsetNum = i * resultsPerPage + 1;

    offsets.push(offsetNum);
  }

  let rangeNextOffset = [...offsets];
  let rangePrevOffset = [...offsets];
  const currentIndex = offsets.indexOf(currentPage);
  const rangeBuffer = Math.floor(initialRange * 0.5);

  // if the current page index is less than the rage buffer (half the inital range)
  // and if the number of pages matches the initial range
  if (currentIndex < rangeBuffer || pages === initialRange) {
    rangeNextOffset = rangeNextOffset.filter(
      (item, i) => item > currentPage && i < initialRange
    );
    rangePrevOffset = rangePrevOffset.filter((item) => item < currentPage);
  }

  // if the current page index is greater than the range buffer (2)
  // and if the number of pages do not match the initial range
  if (currentIndex >= rangeBuffer && pages !== initialRange) {
    rangeNextOffset = rangeNextOffset.filter(
      (item, i) => item > currentPage && i <= currentIndex + rangeBuffer
    );

    if (rangeNextOffset.length === rangeBuffer) {
      rangePrevOffset = rangePrevOffset.filter(
        (item, i) => item < currentPage && i >= currentIndex - rangeBuffer
      );
    } else {
      /**
       * check how many items are in the range next offset and
       * subtract the innitialRange by the number of range next items
       *
       * if there are no range next items left, we're going to provide
       * the entire inital range to the previous range offset
       */
      const endBuffer = rangeNextOffset.length
        ? initialRange - rangeNextOffset.length
        : initialRange;

      // if the current page item is less than the page in the filter
      // and i is less than the current page index - the end buffer
      // - we need to retain the same pagination range
      rangePrevOffset = rangePrevOffset.filter(
        (item, i) => item < currentPage && i > currentIndex - endBuffer
      );
    }
  }

  const buttonRange = [...rangePrevOffset, currentPage, ...rangeNextOffset];
  const buttonItems = buttonRange.map((item) => {
    return { offset: item, index: offsets.indexOf(item) + 1 };
  });

  buttonItems.forEach(({ offset, index }, i) => {
    buttons.push(
      <PaginationButtons
        offsetNum={offset}
        pageNumber={pageNumber}
        index={index}
        key={hash.MD5(offset)}
        onPaginate={() => {
          onPageChange(offset);
          setCurrentPage(offset);
        }}
      />
    );
  });

  return pages > 1 ? (
    <Container>
      <div className="su-flex su-gap-9 su-items-center su-justify-center su-rs-mt-4 lg:su-rs-mt-7">
        <button
          type="button"
          className={`su-size-24 su-font-serif su-flex su-items-center su-justify-center dark:su-text-white ${
            prevPage < 1 ? finalPageClass : ""
          }`}
          disabled={prevPage < 1}
          data-offset={prevPage < 1 ? 1 : prevPage}
          onClick={({ currentTarget }) => {
            setCurrentPage(prevPage < 1 ? 1 : prevPage);
            onPageChange(currentTarget.dataset.offset);
          }}
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
          onClick={({ currentTarget }) => {
            setCurrentPage(
              nextPage > offsets[offsets.length - 1]
                ? offsets[offsets.length - 1]
                : nextPage
            );
            onPageChange(currentTarget.dataset.offset);
          }}
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
