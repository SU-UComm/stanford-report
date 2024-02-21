export default class ReportHeader {
  constructor(target) {
    this.parent = target;
    this.menuToggle = this.parent.querySelector('[aria-controls="menu"]');
    this.searchToggle = this.parent.querySelector('[aria-controls="search"]');
    this.preferencesToggle = this.parent.querySelector(
      '[aria-controls="preferences"]'
    );
    this.menuCloseToggle = this.parent.querySelectorAll(
      ".report-header__menu-close,.report-header__menu-tray .report-header__overlay"
    );
    this.searchCloseToggle = this.parent.querySelectorAll(
      ".report-header__search-close,.report-header__search-tray .report-header__overlay"
    );
    this.preferencesCloseToggle = this.parent.querySelectorAll(
      ".report-header__preferences-close,.report-header__preferences-tray .report-header__overlay"
    );
    this.handleHeaderScroll();
    this.handleHeaderToggles();
    this.handleSearchInputs();
  }

  /// /////////////////////////////////
  // focus trapping

  focus(target) {
    if (target.match(/:/g)) {
      const [context, node, child] = target.split(":");

      const focusOn = document
        .querySelector(`[data-location="${target}"]`)
        .querySelectorAll(node)[Number(child)];

      focusOn.focus();

      return;
    }

    document.querySelector(`[data-location="${target}"]`).focus();
  }

  handleTab(trapContext) {
    trapContext.addEventListener("keyup", (e) => {
      const { target, key } = e;

      if (key !== "Tab") return;

      const tpLocation = target.dataset.tpTo ? target.dataset.tpTo : null;

      if (tpLocation) {
        this.focus(tpLocation);
      }
    });
  }

  // end focus trapping
  /// /////////////////////////////////

  // Add typeahead for
  handleSearchInputs() {
    const searchInputs = document.querySelectorAll(
      '.twitter-typeahead input[name="query"]'
    );
    if (searchInputs.length) {
      searchInputs.forEach((input) => {
        input.addEventListener("input", () => {
          if (input.value !== "") {
            input.parentElement.classList.add("input-has-value");
          } else {
            input.parentElement.classList.remove("input-has-value");
          }
        });
      });
    }

    // Clear the class on click
    const searchClear = document.querySelectorAll(".report-header__clear");
    if (searchClear.length) {
      searchClear.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const inputWrapper = btn.parentNode.querySelector(
            `[data-role="search-query"]`
          );

          inputWrapper.value = "";
          // inputWrapper.classList.remove("input-has-value");
        });
      });
    }
  }

  handleHeaderToggles() {
    /**
     * navigation menu
     */
    this.handleTab(document.querySelector(".report-header__main"));

    this.menuToggle.addEventListener("click", () => {
      const menu = this.parent.querySelector("#menu");
      const isToggled = this.menuToggle.getAttribute("aria-expanded");

      // toggle after the menuCloseToggle
      if (isToggled === "true") {
        this.menuToggle.setAttribute("aria-expanded", "false");
        this.parent.classList.remove("report-header--primary-nav-open");
        menu.setAttribute("aria-hidden", "true");

        setTimeout(() => {
          menu.classList.remove("su-hidden");
          menu.classList.add("su-block");
        }, 300);
      } else {
        // initial toggle
        menu.classList.remove("su-hidden");

        setTimeout(() => {
          this.menuCloseToggle[1].focus();
          this.menuToggle.setAttribute("aria-expanded", "true");
          this.parent.classList.add("report-header--primary-nav-open");
          menu.setAttribute("aria-hidden", "false");
        }, 0);
      }
    });

    // close toggle
    this.menuCloseToggle.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const menu = this.parent.querySelector("#menu");
        this.menuToggle.setAttribute("aria-expanded", "false");
        this.parent.classList.remove("report-header--primary-nav-open");
        menu.setAttribute("aria-hidden", "true");
        this.menuToggle.focus();

        setTimeout(() => {
          menu.classList.remove("su-block");
          menu.classList.add("su-hidden");
        }, 300);
      });
    });

    /**
     * search menu
     */
    const searchTrap = document.querySelector(
      `[data-role="search-focus-trap"]`
    );

    this.searchToggle.addEventListener("click", () => {
      const menu = this.parent.querySelector("#search");
      const isToggled = this.searchToggle.getAttribute("aria-expanded");
      if (isToggled === "true") {
        this.searchToggle.setAttribute("aria-expanded", "false");
        this.parent.classList.remove("report-header--search-open");
        menu.setAttribute("aria-hidden", "true");

        setTimeout(() => {
          menu.classList.add("su-hidden");
          menu.classList.remove("su-block");

          searchTrap.classList.add("su-hidden");
          searchTrap.classList.remove("su-block");
        }, 300);
      } else {
        menu.classList.remove("su-hidden");
        searchTrap.classList.remove("su-hidden");

        setTimeout(() => {
          this.searchToggle.setAttribute("aria-expanded", "true");
          this.parent.classList.add("report-header--search-open");
          menu.setAttribute("aria-hidden", "false");
        }, 0);
      }
    });

    this.searchCloseToggle.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const search = this.parent.querySelector("#search");
        this.searchToggle.setAttribute("aria-expanded", "false");
        this.parent.classList.remove("report-header--search-open");
        search.setAttribute("aria-hidden", "true");

        setTimeout(() => {
          menu.classList.remove("su-block");
          menu.classList.add("su-hidden");

          searchTrap.classList.remove("su-block");
          searchTrap.classList.add("su-hidden");
        }, 300);
      });
    });

    /**
     * preferences menu
     */
    this.preferencesToggle.addEventListener("click", () => {
      const preferences = this.parent.querySelector("#preferences");
      const isToggled = this.preferencesToggle.getAttribute("aria-expanded");
      if (isToggled === "true") {
        this.preferencesToggle.setAttribute("aria-expanded", "false");
        this.parent.classList.remove("report-header--preferences-open");
        preferences.setAttribute("aria-hidden", "true");

        setTimeout(() => {
          preferences.classList.remove("su-hidden");
          preferences.classList.add("su-block");
        }, 300);
      } else {
        preferences.classList.remove("su-hidden");
        this.preferencesCloseToggle[1].focus();

        setTimeout(() => {
          this.preferencesToggle.setAttribute("aria-expanded", "true");
          this.parent.classList.add("report-header--preferences-open");
          preferences.setAttribute("aria-hidden", "false");
        }, 0);
      }
    });

    this.preferencesCloseToggle.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const preferences = this.parent.querySelector("#preferences");
        this.preferencesToggle.setAttribute("aria-expanded", "false");
        this.parent.classList.remove("report-header--preferences-open");
        preferences.setAttribute("aria-hidden", "true");
        this.preferencesToggle.focus();

        setTimeout(() => {
          preferences.classList.remove("su-block");
          preferences.classList.add("su-hidden");
        }, 300);
      });
    });
  }

  handleHeaderScroll() {
    window.addEventListener("scroll", (e) => {
      const header = this.parent;
      if (window.scrollY > 32) {
        header.classList.add("report-header--collapsed");
        header.querySelector(".report-header__logo").classList.add("!su-p-0");
        return;
      }
      header.classList.remove("report-header--collapsed");
      header.querySelector(".report-header__logo").classList.remove("!su-p-0");
    });
  }
}
