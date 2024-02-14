import React, { useState, useEffect } from "react";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";
import { Pause, Play } from "../../packages/SVG-library/SVG";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function SingleImageVideo({
  caption,
  credit,
  width,
  imageData,
}) {
  let captionCredit;
  const { url, attributes } = imageData;

  if (caption && credit) {
    captionCredit = `${caption} | ${credit}`;
  } else if (caption || credit) {
    captionCredit = caption || credit;
  }

  // su-h-[234px] md:su-h-[489px] lg:su-h-[871.33px]

  // state
  const [videoPlaying, setVideoPlaying] = useState("play");
  const [pausePlayTitle, setPausePlayTitle] = useState("Pause looping video");
  const [iframeNode, setIframeNode] = useState(null);

  // effects
  useEffect(() => {
    if (iframeNode) {
      console.log(videoPlaying);
      iframeNode?.contentWindow.postMessage(
        JSON.stringify({ method: videoPlaying }),
        "*"
      );
    }

    if (videoPlaying === "pause") setPausePlayTitle("Pause looping video");
    else setPausePlayTitle("Play looping video");
  }, [videoPlaying, iframeNode]);

  // events
  const handleIframeLoad = ({ target }) => {
    setIframeNode(target);
  };

  return (
    <Container width={width}>
      <section className="su-flex su-flex-col su-items-center su-gap-[8px] su-gap-[15px]">
        <div className="su-w-full su-relative">
          <img
            // src="https://picsum.photos/800"
            src={url}
            alt={attributes.alt}
            className="su-w-full su-object-cover"
            // className="su-w-full su-h-full su-absolute su-object-cover su-top-[50%] su-translate-y-[-50%]"
          />

          <iframe
            src="https://player.vimeo.com/video/908030173?autoplay=1&loop=1&autopause=0&background=1"
            className="su-w-full su-absolute su-h-full"
            allow="autoplay; fullscreen"
            data-role="video-player"
            onLoad={handleIframeLoad}
            title="Video Player"
          />
        </div>

        {/* background=1 */}

        <button
          data-role="video-control"
          type="button"
          className="su-fill-black-70"
          onClick={() => {
            if (videoPlaying === "pause") {
              setVideoPlaying("play");

              return;
            }

            setVideoPlaying("pause");
          }}
        >
          <span className="[&>*]:su-fill-black-70 su-flex su-gap-[6px] su-items-center">
            {videoPlaying === "pause" ? <Play /> : <Pause />}
            {pausePlayTitle}
          </span>
        </button>

        <p className="su-m-0 su-text-[14px] su-max-w-[633px] su-leading-[16.72px] su-font-normal su-text-black-70 md:su-text-[16px] su-leading-[19.11px]">
          {captionCredit}
        </p>
      </section>
    </Container>
  );
}
