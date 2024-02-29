import React, { useState, useEffect } from "react";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";
import Card from "../../packages/card/Card";
import { HorizontalCardGrid } from "../../packages/grids/Grids";
import Pagination from "../../packages/pagination/Pagination";
import formatCardDataFunnelback from "../../packages/utils/formatCardDataFunnelback";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function TopicSubtopicListing({
  data,
  resultsSummary,
  pageNumber,
  displayConfiguration,
  endpoint,
}) {
  let cards = [];
  const { searchQuery } = displayConfiguration;

  // state
  const [pageNo, setPageNo] = useState(pageNumber);
  const [results, setResults] = useState([]);
  const [cache, setCache] = useState({});

  // pagiation & caching
  useEffect(() => {
    const pagedSearchQuery = `${searchQuery}&start_rank=${pageNo}`;

    if (!cache[pageNo]) {
      // hit the FB endpoint and format the data
      fetch(endpoint + pagedSearchQuery)
        .then((res) => res.json())
        .then((resData) => {
          cards = [];

          resData.response.resultPacket.results.forEach((cardItem) => {
            cards.push(formatCardDataFunnelback(cardItem));
          });

          const visitedPage = {};

          visitedPage[pageNo] = cards;

          // update card data state
          setResults(() => cards);

          // save the current page's data in cache
          setCache((visited) => ({ ...visited, ...visitedPage }));

          window.scrollTo({ top: 0, behavior: "smooth" });
        })
        .catch((err) => {
          throw new Error(err);
        });

      return;
    }

    // if the paginated page is cached, get the cached page
    setResults(cache[pageNo]);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pageNo]);

  results.forEach((card) => {
    cards.push(<Card data={card} cardType="horizontal" cardSize="large" />);
  });

  return (
    <Container>
      <HorizontalCardGrid
        orientation="vertical"
        items={cards}
        maximumItems={10}
      />
      <Pagination
        pageNumber={Number(pageNo)}
        allResults={resultsSummary.totalMatching}
        resultsPerPage={resultsSummary.numRanks}
        paginationRange={4}
        onPageChange={(number) => {
          setPageNo(number);
        }}
      />
    </Container>
  );
}
