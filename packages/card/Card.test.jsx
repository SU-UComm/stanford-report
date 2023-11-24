import { render } from "@testing-library/react";
import React from "react";
import Card from "./Card";

const testData = {
    title: null,
    description: null,
    url: null,
    imageUrl: null,
    imageAlt: null,
    taxonomy: null,
    taxonomyUrl: null,
    type: null,
};

describe("Card", () => {
    it("should render the component", () => {
        render(<Card data={testData} />);
        const article = document.querySelector("article");
        expect(article).toBeInTheDocument();
    });
});
