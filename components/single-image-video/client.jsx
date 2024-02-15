import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";

// (function () {
//   const videoPlayer = document.querySelector(`[data-role="video-player"]`);
//   const videoPlayerControl = document.querySelector(
//     `[data-role="video-control"]`
//   );

//   if (!videoPlayer && !videoPlayerControl) return;

//   const data = { method: "pause" };

//   videoPlayerControl.addEventListener("click", () => {
//     videoPlayer.contentWindow.postMessage(JSON.stringify(data), "*");

//     if (data.method === "pause") {
//       data.method = "play";

//       return;
//     }

//     data.method = "pause";
//   });
// })();

(function () {
  const componentName = "single-image-video";
  const target = document.querySelector(
    `[data-hydration-component="${componentName}"]`
  );

  if (!target) return;
  hydrateComponent({ Component, componentName });
})();
