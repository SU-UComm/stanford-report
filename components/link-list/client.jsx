import { hydrateComponent } from "@squiz/xaccel-component-client-helpers";
import Component from "./Component";

window.pageController = {
  id: 128635,
  title: "DC Test News 1",
  isStory: true,
  mainTopic: "Awards, honors, &amp; appointments",
};

// ${
//         scrollPos >= Math.round((30 / 100) * document.body.clientHeight)
//           ? "su-opacity-[1] su-bottom-0"
//           : "su-opacity-[0] su-bottom-[-100px]"
//       }

// ${
//             drawerState ? "su-rotate-90" : "su-rotate-[-90deg]"
//           }

// ${
//           drawerState ? "su-h-auto" : "su-h-0"
//         }

const linkListWrapper = document.querySelector(
  `[data-role="link-list-wrapper"]`
);
const linkListToggle = document.querySelector(
  `[data-role="link-drawer-toggle"]`
);
const linkList = document.querySelector(`[data-role="link-drawer"]`);

linkListToggle.addEventListener("click", (e) => {
  const { currentTarget } = e;
  const state = currentTarget.dataset.active === "true";

  if (!state) {
    currentTarget.dataset.active = true;

    currentTarget.classList.remove("su-rotate-[-90deg]");
    currentTarget.classList.add("su-rotate-90");

    linkList.classList.remove("su-h-0");
    linkList.classList.add("su-h-auto");

    return;
  }

  currentTarget.dataset.active = false;

  currentTarget.classList.add("su-rotate-[-90deg]");
  currentTarget.classList.remove("su-rotate-90");

  linkList.classList.add("su-h-0");
  linkList.classList.remove("su-h-auto");
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= Math.round((30 / 100) * document.body.clientHeight)) {
    linkListWrapper.classList.remove("su-opacity-[0]");
    linkListWrapper.classList.remove("su-bottom-[-100px]");
    linkListWrapper.classList.add("su-opacity-[1]");
    linkListWrapper.classList.add("su-bottom-0");

    return;
  }

  linkListWrapper.classList.remove("su-opacity-[1]");
  linkListWrapper.classList.remove("su-bottom-0");
  linkListWrapper.classList.add("su-bottom-[-100px]");
  linkListWrapper.classList.add("su-opacity-[0]");
});

hydrateComponent({ Component, componentName: "link-list" });
