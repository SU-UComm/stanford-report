import React from "react";

import Article from "./Article";
import Book from "./Book";
import Podcast from "./Podcast";
import QuestionAnswer from "./QuestionAnswer";
import Video from "./Video";
import ChevronRight from "./ChevronRight.jsx";

/**
* This function orchestrates which SVG
* to render out
*
* @param {string} type
* The type is one of the following:
* - article
* - q & a
* - video
* - book
* - podcast
*
* @return {JSX.Element}
*/
export default function SVG ({ type }) {
    switch (type.toLowerCase()) {
        case "article":
            return (
                <Article />
            );
        case "q & a":
            return (
                <QuestionAnswer />
            );
        case "video":
            return (
                <Video />
            );
        case "podcast":
            return (
                <Podcast />
            );
        case "book":
            return (
                <Book />
            );
        case "chevron-right":
            return (
                <ChevronRight />
            );
        default:
            // prevent render errors.
            return(<></>);
    }
}
