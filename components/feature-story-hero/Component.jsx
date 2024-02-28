import React from "react";
import VerticalHero from "../../packages/story-hero-variations/VerticalHero";
import HorizontalHero from "../../packages/story-hero-variations/HorizontalHero";
import FullHero from "../../packages/story-hero-variations/FullHero";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function FeatureStoryHero(props) {
  const { orientation } = props;
  const data = props;

  console.log(orientation);

  switch (orientation) {
    case "vertical":
      return <VerticalHero data={data} />;
    case "full":
      return <FullHero data={data} />;
    default:
      return <HorizontalHero data={data} />;
  }
}
