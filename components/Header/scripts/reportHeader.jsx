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
          const inputWrapper =
            btn.parentElement.querySelector(".twitter-typeahead");
          inputWrapper.classList.remove("input-has-value");
        });
      });
    }
  }

  handleHeaderToggles() {
    this.menuToggle.addEventListener("click", () => {
      const menu = this.parent.querySelector("#menu");
      const isToggled = this.menuToggle.getAttribute("aria-expanded");
      if (isToggled === "true") {
        this.menuToggle.setAttribute("aria-expanded", "false");
        this.parent.classList.remove("report-header--primary-nav-open");
        menu.setAttribute("aria-hidden", "true");
      } else {
        this.menuToggle.setAttribute("aria-expanded", "true");
        this.parent.classList.add("report-header--primary-nav-open");
        menu.setAttribute("aria-hidden", "false");
      }
    });
    this.menuCloseToggle.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const menu = this.parent.querySelector("#menu");
        this.menuToggle.setAttribute("aria-expanded", "false");
        this.parent.classList.remove("report-header--primary-nav-open");
        menu.setAttribute("aria-hidden", "true");
      });
    });
    this.searchToggle.addEventListener("click", () => {
      const menu = this.parent.querySelector("#menu");
      const isToggled = this.searchToggle.getAttribute("aria-expanded");
      if (isToggled === "true") {
        this.searchToggle.setAttribute("aria-expanded", "false");
        this.parent.classList.remove("report-header--search-open");
        menu.setAttribute("aria-hidden", "true");
      } else {
        this.searchToggle.setAttribute("aria-expanded", "true");
        this.parent.classList.add("report-header--search-open");
        menu.setAttribute("aria-hidden", "false");
      }
    });
    this.searchCloseToggle.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const search = this.parent.querySelector("#search");
        this.searchToggle.setAttribute("aria-expanded", "false");
        this.parent.classList.remove("report-header--search-open");
        search.setAttribute("aria-hidden", "true");
      });
    });
    this.preferencesToggle.addEventListener("click", () => {
      const preferences = this.parent.querySelector("#preferences");
      const isToggled = this.preferencesToggle.getAttribute("aria-expanded");
      if (isToggled === "true") {
        this.preferencesToggle.setAttribute("aria-expanded", "false");
        this.parent.classList.remove("report-header--preferences-open");
        preferences.setAttribute("aria-hidden", "true");
      } else {
        this.preferencesToggle.setAttribute("aria-expanded", "true");
        this.parent.classList.add("report-header--preferences-open");
        preferences.setAttribute("aria-hidden", "false");
      }
    });
    this.preferencesCloseToggle.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const preferences = this.parent.querySelector("#preferences");
        this.preferencesToggle.setAttribute("aria-expanded", "false");
        this.parent.classList.remove("report-header--preferences-open");
        preferences.setAttribute("aria-hidden", "true");
      });
    });
  }

  handleHeaderScroll() {
    window.addEventListener("scroll", (e) => {
      const header = this.parent;
      if (window.scrollY > 32) {
        header.classList.add("report-header--collapsed");
        return;
      }
      header.classList.remove("report-header--collapsed");
    });
  }
}
