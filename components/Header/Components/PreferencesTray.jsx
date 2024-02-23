import React from "react";

/**
 * Preferences Tray
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function PreferencesTray({ audience }) {
  return (
    <div className="su-flex su-items-center su-justify-end su-w-32 md:su-w-[85px] lg:su-w-[91px]">
      <button
        type="button"
        className="su-w-[58px] su-flex su-flex-wrap su-gap-3 su-justify-center hover:su-text-digital-red dark:hover:su-text-dark-mode-red"
        aria-controls="preferences"
        aria-expanded="false"
        aria-labelledby="toggle-preferences"
      >
        <span className="icon-preferences">
          <span className="su-relative su-h-32 su-w-32 su-block su-mx-auto">
            <svg
              aria-hidden="true"
              focusable="false"
              className="su-absolute su-top-1/2 su-left-1/2 -su-translate-x-1/2 -su-translate-y-1/2"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.0723 3.66094C13.8789 3.73398 13.75 3.91875 13.75 4.125C13.75 4.33125 13.8789 4.51602 14.0723 4.58906L16.5 5.5L17.4109 7.92773C17.484 8.12109 17.6688 8.25 17.875 8.25C18.0812 8.25 18.266 8.12109 18.3391 7.92773L19.25 5.5L21.6777 4.58906C21.8711 4.51602 22 4.33125 22 4.125C22 3.91875 21.8711 3.73398 21.6777 3.66094L19.25 2.75L18.3391 0.322266C18.266 0.128906 18.0812 0 17.875 0C17.6688 0 17.484 0.128906 17.4109 0.322266L16.5 2.75L14.0723 3.66094ZM8.81289 3.14961C8.70117 2.90469 8.45625 2.75 8.18984 2.75C7.92344 2.75 7.67852 2.90469 7.5668 3.14961L5.29805 8.04805L0.399609 10.3125C0.154688 10.4242 0 10.6691 0 10.9398C0 11.2105 0.154688 11.4512 0.399609 11.5629L5.30234 13.8273L7.5625 18.7258C7.67422 18.9707 7.91914 19.1254 8.18555 19.1254C8.45195 19.1254 8.69687 18.9707 8.80859 18.7258L11.073 13.823L15.9758 11.5586C16.2207 11.4469 16.3754 11.202 16.3754 10.9355C16.3754 10.6691 16.2207 10.4242 15.9758 10.3125L11.0773 8.05234L8.81289 3.14961ZM16.5 16.5L14.0723 17.4109C13.8789 17.484 13.75 17.6688 13.75 17.875C13.75 18.0812 13.8789 18.266 14.0723 18.3391L16.5 19.25L17.4109 21.6777C17.484 21.8711 17.6688 22 17.875 22C18.0812 22 18.266 21.8711 18.3391 21.6777L19.25 19.25L21.6777 18.3391C21.8711 18.266 22 18.0812 22 17.875C22 17.6688 21.8711 17.484 21.6777 17.4109L19.25 16.5L18.3391 14.0723C18.266 13.8789 18.0812 13.75 17.875 13.75C17.6688 13.75 17.484 13.8789 17.4109 14.0723L16.5 16.5Z" />
            </svg>
          </span>
          <span id="toggle-preferences" hidden>
            Preferences
          </span>
          <span className="su-text-12 su-hidden md:su-block" aria-hidden="true">
            Show me...
          </span>
        </span>
        <span className="icon-faculty">
          <span className="su-relative su-h-32 su-w-32 su-block su-mx-auto">
            <svg
              className="dark:su-hidden su-absolute su-top-1/2 su-left-1/2 -su-translate-x-1/2 -su-translate-y-1/2"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                d="M8.99989 9.5C10.3088 9.5 11.564 8.99956 12.4895 8.10876C13.415 7.21796 13.935 6.00978 13.935 4.75C13.935 3.49022 13.415 2.28204 12.4895 1.39124C11.564 0.500445 10.3088 0 8.99989 0C7.69103 0 6.43578 0.500445 5.51027 1.39124C4.58477 2.28204 4.06482 3.49022 4.06482 4.75C4.06482 6.00978 4.58477 7.21796 5.51027 8.10876C6.43578 8.99956 7.69103 9.5 8.99989 9.5ZM7.23792 11.2812C3.44023 11.2812 0.363525 14.2426 0.363525 17.8979C0.363525 18.5064 0.87631 19 1.50861 19H16.4912C17.1235 19 17.6363 18.5064 17.6363 17.8979C17.6363 14.2426 14.5595 11.2812 10.7619 11.2812H7.23792Z"
                fill="url(#paint0_linear_2047_2390)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2047_2390"
                  x1="17.6363"
                  y1="0"
                  x2="-3.69767"
                  y2="11.3996"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#E50808" />
                  <stop offset="1" stopColor="#820000" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              className="su-hidden dark:su-block su-absolute su-top-1/2 su-left-1/2 -su-translate-x-1/2 -su-translate-y-1/2"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                d="M8.99989 9.5C10.3088 9.5 11.564 8.99956 12.4895 8.10876C13.415 7.21796 13.935 6.00978 13.935 4.75C13.935 3.49022 13.415 2.28204 12.4895 1.39124C11.564 0.500445 10.3088 0 8.99989 0C7.69103 0 6.43578 0.500445 5.51027 1.39124C4.58477 2.28204 4.06482 3.49022 4.06482 4.75C4.06482 6.00978 4.58477 7.21796 5.51027 8.10876C6.43578 8.99956 7.69103 9.5 8.99989 9.5ZM7.23792 11.2812C3.44023 11.2812 0.363525 14.2426 0.363525 17.8979C0.363525 18.5064 0.87631 19 1.50861 19H16.4912C17.1235 19 17.6363 18.5064 17.6363 17.8979C17.6363 14.2426 14.5595 11.2812 10.7619 11.2812H7.23792Z"
                fill="url(#paint0_linear_2047_1550)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2047_1550"
                  x1="17.6363"
                  y1="0"
                  x2="-3.69767"
                  y2="11.3996"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#8F993E" />
                  <stop offset="1" stopColor="#279989" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span
            className="su-text-12 su-hidden md:su-block su-text-digital-red dark:su-text-palo-verde"
            id="toggle-preferences-faculty"
          >
            Faculty/Staff
          </span>
        </span>
        <span className="icon-student">
          <span className="su-relative su-h-32 su-w-32 su-block su-mx-auto">
            <svg
              className="dark:su-hidden su-absolute su-top-1/2 su-left-1/2 -su-translate-x-1/2 -su-translate-y-1/2"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                d="M8.82864 0.0167009C8.94217 -0.00556695 9.05937 -0.00556695 9.1729 0.0167009L16.4977 1.50122C16.9078 1.58287 17.2045 1.95029 17.2045 2.37338C17.2045 2.79646 16.9078 3.16388 16.4977 3.24553L13.6886 3.81707V5.93622C13.6886 8.56011 11.5901 10.6867 9.00077 10.6867C6.41147 10.6867 4.31292 8.56011 4.31292 5.93622V3.81707L2.55498 3.46079V5.87684L3.12998 8.7865C3.16294 8.96093 3.11899 9.14279 3.00912 9.28011C2.89925 9.41742 2.73078 9.49907 2.55498 9.49907H1.38302C1.20723 9.49907 1.04242 9.42113 0.928886 9.28011C0.815352 9.13908 0.771404 8.96093 0.808028 8.7865L1.38302 5.87684V3.21213C1.0351 3.08966 0.79704 2.75564 0.79704 2.37338C0.79704 1.95029 1.09369 1.58287 1.50388 1.50122L8.82864 0.0167009ZM4.89524 12.1601C5.27979 12.0339 5.69364 12.1749 5.97198 12.4755L8.57227 15.2776C8.803 15.5262 9.19488 15.5262 9.42561 15.2776L12.0259 12.4755C12.3042 12.1749 12.7181 12.0339 13.1026 12.1601C15.4832 12.9357 17.2045 15.1922 17.2045 17.8606C17.2045 18.4916 16.6991 19 16.0802 19H1.92139C1.30245 19 0.79704 18.4878 0.79704 17.8606C0.79704 15.1922 2.51836 12.9357 4.89524 12.1601Z"
                fill="url(#paint0_linear_2047_30)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2047_30"
                  x1="17.2045"
                  y1="0"
                  x2="-3.51134"
                  y2="10.5159"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#E50808" />
                  <stop offset="1" stopColor="#820000" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              className="su-hidden dark:su-block su-absolute su-top-1/2 su-left-1/2 -su-translate-x-1/2 -su-translate-y-1/2"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                d="M8.82864 0.0167009C8.94217 -0.00556695 9.05937 -0.00556695 9.1729 0.0167009L16.4977 1.50122C16.9078 1.58287 17.2045 1.95029 17.2045 2.37338C17.2045 2.79646 16.9078 3.16388 16.4977 3.24553L13.6886 3.81707V5.93622C13.6886 8.56011 11.5901 10.6867 9.00077 10.6867C6.41147 10.6867 4.31292 8.56011 4.31292 5.93622V3.81707L2.55498 3.46079V5.87684L3.12998 8.7865C3.16294 8.96093 3.11899 9.14279 3.00912 9.28011C2.89925 9.41742 2.73078 9.49907 2.55498 9.49907H1.38302C1.20723 9.49907 1.04242 9.42113 0.928886 9.28011C0.815352 9.13908 0.771404 8.96093 0.808028 8.7865L1.38302 5.87684V3.21213C1.0351 3.08966 0.79704 2.75564 0.79704 2.37338C0.79704 1.95029 1.09369 1.58287 1.50388 1.50122L8.82864 0.0167009ZM4.89524 12.1601C5.27979 12.0339 5.69364 12.1749 5.97198 12.4755L8.57227 15.2776C8.803 15.5262 9.19488 15.5262 9.42561 15.2776L12.0259 12.4755C12.3042 12.1749 12.7181 12.0339 13.1026 12.1601C15.4832 12.9357 17.2045 15.1922 17.2045 17.8606C17.2045 18.4916 16.6991 19 16.0802 19H1.92139C1.30245 19 0.79704 18.4878 0.79704 17.8606C0.79704 15.1922 2.51836 12.9357 4.89524 12.1601Z"
                fill="url(#paint0_linear_2047_809)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2047_809"
                  x1="17.2045"
                  y1="0"
                  x2="-3.51134"
                  y2="10.5159"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#8F993E" />
                  <stop offset="1" stopColor="#279989" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span
            className="su-text-12 su-hidden md:su-block su-text-digital-red dark:su-text-palo-verde"
            id="toggle-preferences-student"
          >
            Student
          </span>
        </span>
      </button>

      <div
        id="preferences"
        aria-label="Preferences"
        aria-hidden="true"
        className="su-hidden report-header__preferences-tray su-shadow su-z-50 su-fixed su-right-0 su-top-0 su-size-full"
      >
        <div className="report-header__overlay su-bg-black su-opacity-25 su-size-full" />
        <div className="report-header__preferences su-h-screen su-bg-white dark:su-bg-black-true su-absolute su-top-0 su-right-0 su-w-full md:su-w-[398px] su-flex su-flex-wrap su-overflow-y-auto su-pb-32 md:su-pb-[64px] su-pt-[115px] md:su-pt-[167px] su-px-38">
          <div className="report-header__preference-content su-transition su-text-black dark:su-text-white">
            <div className="su-gap-27 su-flex su-flex-wrap">
              <h2 className="su-text-18 su-font-semibold su-mb-0">
                Along with Stanford news and stories, show me:
              </h2>
              <ul className="su-flex su-list-none su-pl-0 su-gap-18 su-w-full">
                <li className="su-mb-0 su-w-1/2">
                  <span tabIndex="0" data-tp-to="close-prefs" />

                  <button
                    type="button"
                    id="preference-student"
                    aria-pressed={audience === "student" ? "true" : "false"}
                    className="report-header__pref-toggle hover:su-text-white su-w-full su-h-full aria-pressed:su-text-white group su-bg-white dark:aria-pressed:su-text-white dark:aria-pressed:su-bg-transparent dark:hover:su-bg-transparent aria-pressed:su-bg-transparent hover:su-bg-transparent dark:su-bg-black-true &[aria-pressed=“true”]:dark:su-bg-transparent before:su-rounded-inherit after:su-rounded-inherit before:su-bg-gradient-light-red after:su-transition-none su-transition before:su-transition after:su-bg-gradient-light-red dark:after:su-rotate-180 before:su-absolute before:-su-z-10 before:-su-m-2 after:su-absolute after:-su-z-10 before:su-top-0 before:su-bottom-0 before:su-right-0 before:su-left-0 after:su-top-0 after:su-bottom-0 after:su-right-0 after:su-left-0 su-relative su-py-26 su-px-18 su-bg-transparent su-text-center"
                    data-location="student-info"
                  >
                    <span className="icon-add su-block su-mx-auto su-relative su-w-[44px] su-h-[44px] su-text-digital-red dark:su-text-dark-mode-red">
                      <svg
                        className="su-absolute su-top-1/2 su-left-1/2 -su-translate-x-1/2 -su-translate-y-1/2 su-w-[44px] su-h-[44px] su-fill-none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                      >
                        <path
                          fill="transparent"
                          d="M22 16.5V22M22 22V27.5M22 22H27.5M22 22H16.5M38.5 22C38.5 31.1127 31.1127 38.5 22 38.5C12.8873 38.5 5.5 31.1127 5.5 22C5.5 12.8873 12.8873 5.5 22 5.5C31.1127 5.5 38.5 12.8873 38.5 22Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="icon-remove su-block su-mx-auto su-relative su-w-[44px] su-h-[44px]">
                      <svg
                        className="su-absolute su-top-1/2 su-left-1/2 -su-translate-x-1/2 -su-translate-y-1/2 su-w-[44px] su-h-[44px] su-fill-none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="icon-detail su-block su-mb-6 su-mt-18 su-mx-auto su-relative su-size-30">
                      <svg
                        className="su-absolute su-top-1/2 su-left-1/2 -su-translate-x-1/2 -su-translate-y-1/2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <path d="M9.80822 0.0184588C9.93538 -0.00615295 10.0666 -0.00615295 10.1938 0.0184588L18.3977 1.65924C18.8572 1.74949 19.1894 2.15558 19.1894 2.62321C19.1894 3.09083 18.8572 3.49692 18.3977 3.58717L15.2515 4.21887V6.56109C15.2515 9.46118 12.9011 11.8116 10.001 11.8116C7.10093 11.8116 4.7505 9.46118 4.7505 6.56109V4.21887L2.78156 3.82508V6.49546L3.42557 9.7114C3.46249 9.90419 3.41326 10.1052 3.2902 10.257C3.16714 10.4087 2.97845 10.499 2.78156 10.499H1.46893C1.27204 10.499 1.08745 10.4128 0.960288 10.257C0.833127 10.1011 0.783903 9.90419 0.824923 9.7114L1.46893 6.49546V3.55025C1.07924 3.41488 0.812617 3.04571 0.812617 2.62321C0.812617 2.15558 1.14488 1.74949 1.6043 1.65924L9.80822 0.0184588ZM5.40271 13.4401C5.83342 13.3006 6.29694 13.4565 6.60869 13.7887L9.52108 16.8857C9.77951 17.1606 10.2184 17.1606 10.4768 16.8857L13.3892 13.7887C13.701 13.4565 14.1645 13.3006 14.5952 13.4401C17.2615 14.2974 19.1894 16.7914 19.1894 19.7407C19.1894 20.438 18.6233 21 17.9301 21H2.07192C1.37869 21 0.812617 20.4339 0.812617 19.7407C0.812617 16.7914 2.74054 14.2974 5.40271 13.4401Z" />
                      </svg>
                    </span>
                    <span className="su-block su-text-18 su-leading-[22px] su-w-full">
                      Student information
                    </span>
                  </button>
                </li>
                <li className="su-mb-0 su-w-1/2">
                  <button
                    type="button"
                    id="preference-faculty"
                    aria-pressed={audience === "faculty" ? "true" : "false"}
                    className="report-header__pref-toggle hover:su-text-white su-w-full su-h-full aria-pressed:su-text-white group su-bg-white dark:aria-pressed:su-text-white dark:aria-pressed:su-bg-transparent dark:hover:su-bg-transparent aria-pressed:su-bg-transparent hover:su-bg-transparent dark:su-bg-black-true &[aria-pressed=“true”]:dark:su-bg-transparent before:su-rounded-inherit after:su-rounded-inherit before:su-bg-gradient-light-red after:su-transition-none su-transition before:su-transition after:su-bg-gradient-light-red dark:after:su-rotate-180 before:su-absolute before:-su-z-10 before:-su-m-2 after:su-absolute after:-su-z-10 before:su-top-0 before:su-bottom-0 before:su-right-0 before:su-left-0 after:su-top-0 after:su-bottom-0 after:su-right-0 after:su-left-0 su-relative su-py-26 su-px-18 su-bg-transparent su-text-center"
                  >
                    <span className="icon-add su-block su-mx-auto su-relative su-w-[44px] su-h-[44px] su-text-digital-red dark:su-text-dark-mode-red">
                      <svg
                        className="su-absolute su-top-1/2 su-left-1/2 -su-translate-x-1/2 -su-translate-y-1/2 su-w-[44px] su-h-[44px] su-fill-none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                      >
                        <path
                          fill="transparent"
                          d="M22 16.5V22M22 22V27.5M22 22H27.5M22 22H16.5M38.5 22C38.5 31.1127 31.1127 38.5 22 38.5C12.8873 38.5 5.5 31.1127 5.5 22C5.5 12.8873 12.8873 5.5 22 5.5C31.1127 5.5 38.5 12.8873 38.5 22Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="icon-remove su-block su-mx-auto su-relative su-w-[44px] su-h-[44px]">
                      <svg
                        className="su-absolute su-top-1/2 su-left-1/2 -su-translate-x-1/2 -su-translate-y-1/2 su-w-[44px] su-h-[44px] su-fill-none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="icon-detail su-block su-mb-6 su-mt-18 su-mx-auto su-relative su-size-30">
                      <svg
                        className="su-absolute su-top-1/2 su-left-1/2 -su-translate-x-1/2 -su-translate-y-1/2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <path d="M10 10.5C11.4145 10.5 12.7711 9.94688 13.7713 8.96231C14.7715 7.97774 15.3334 6.64239 15.3334 5.25C15.3334 3.85761 14.7715 2.52226 13.7713 1.53769C12.7711 0.553123 11.4145 0 10 0C8.58553 0 7.22898 0.553123 6.22879 1.53769C5.22859 2.52226 4.66669 3.85761 4.66669 5.25C4.66669 6.64239 5.22859 7.97774 6.22879 8.96231C7.22898 9.94688 8.58553 10.5 10 10.5ZM8.09586 12.4688C3.99169 12.4688 0.666687 15.7418 0.666687 19.7818C0.666687 20.4545 1.22085 21 1.90419 21H18.0959C18.7792 21 19.3334 20.4545 19.3334 19.7818C19.3334 15.7418 16.0084 12.4688 11.9042 12.4688H8.09586Z" />
                      </svg>
                    </span>
                    <span className="su-block su-text-18 su-leading-[22px] su-w-full">
                      Faculty/Staff information
                    </span>
                  </button>
                </li>
              </ul>
              <div className="su-flex su-flex-wrap su-gap-[9px]">
                <p className="su-mb-0 su-text-16 su-font-normal">
                  We want to provide announcements, events, leadership messages
                  and resources that are relevant to you. Your selection is
                  stored in a browser cookie which you can remove at any time
                  using “Clear selection” below.
                </p>
                <button
                  type="button"
                  id="preference-reset"
                  className="report-header__preferences-clear su-text-black-40 su-underline"
                >
                  Clear selection
                </button>
              </div>
            </div>

            <hr className="su-h-2 su-bg-black-10 dark:su-bg-black su-w-full su-border-none su-my-38" />
            <form className="su-gap-27 su-flex su-flex-wrap su-pt-38 su-cursor-pointer">
              <fieldset
                className="su-border-none su-p-0 su-whitespace-nowrap"
                role="radiogroup"
              >
                <legend className="su-text-18 su-font-semibold su-mb-27">
                  Appearance preference:
                </legend>
                <input
                  className="su-opacity-0 su-absolute su-peer/light"
                  defaultChecked
                  type="radio"
                  name="ui-theme"
                  id="light-theme"
                />
                <label
                  className="su-inline-block su-leading-2 su-relative su-pr-50 su-z-20 after:su-border-palo-verde peer-checked/light:after:su-border-digital-red peer-checked/light:su-text-digital-red su-text-black-50 peer-checked/light:su-z-10 before:su-w-42 before:su-h-15 su-bg-gradient-before before:su-bg-gradient-light-red-h peer-checked/light:before:su-rotate-180 before:su-rounded-[12px] before:su-absolute before:su-right-0 before:su-top-[6px] after:su-transition after:su-top-2 after:su-shadow-sm after:su-bg-white after:su-border-2 after:su-bg-digital-red after:su-rounded-full after:su-size-24 after:su-translate-x-0 after:su-absolute after:su-right-0 peer-checked/light:after:su-translate-x-[-2rem]"
                  htmlFor="light-theme"
                  data-theme="light-theme"
                >
                  <span className="su-inline-block su-align-middle">Light</span>
                  <span
                    aria-hidden="true"
                    className="su-inline-block su-align-middle su-relative su-w-[28px] su-h-[28px] peer-checked/light:su-hidden"
                  >
                    <svg
                      className="su-absolute su-top-1/2 su-left-1/2 -su-translate-x-1/2 -su-translate-y-1/2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M14 2.80005C14.7732 2.80005 15.4 3.42685 15.4 4.20005V5.60005C15.4 6.37325 14.7732 7.00005 14 7.00005C13.2268 7.00005 12.6 6.37325 12.6 5.60005V4.20005C12.6 3.42685 13.2268 2.80005 14 2.80005Z"
                        fill="url(#paint0_linear_1962_1882)"
                      />
                      <path
                        d="M19.6 14C19.6 17.0928 17.0928 19.6 14 19.6C10.9072 19.6 8.39999 17.0928 8.39999 14C8.39999 10.9073 10.9072 8.40005 14 8.40005C17.0928 8.40005 19.6 10.9073 19.6 14Z"
                        fill="url(#paint1_linear_1962_1882)"
                      />
                      <path
                        d="M18.9498 20.9296L19.9398 21.9196C20.4865 22.4663 21.3729 22.4663 21.9197 21.9196C22.4664 21.3729 22.4664 20.4864 21.9197 19.9397L20.9297 18.9497C20.383 18.403 19.4965 18.403 18.9498 18.9497C18.4031 19.4965 18.4031 20.3829 18.9498 20.9296Z"
                        fill="url(#paint2_linear_1962_1882)"
                      />
                      <path
                        d="M21.9195 6.08038C22.4663 6.62711 22.4663 7.51354 21.9195 8.06028L20.9296 9.05023C20.3828 9.59696 19.4964 9.59696 18.9497 9.05023C18.4029 8.50349 18.4029 7.61706 18.9497 7.07033L19.9396 6.08038C20.4864 5.53365 21.3728 5.53365 21.9195 6.08038Z"
                        fill="url(#paint3_linear_1962_1882)"
                      />
                      <path
                        d="M23.8 15.4C24.5732 15.4 25.2 14.7732 25.2 14C25.2 13.2269 24.5732 12.6 23.8 12.6H22.4C21.6268 12.6 21 13.2269 21 14C21 14.7732 21.6268 15.4 22.4 15.4H23.8Z"
                        fill="url(#paint4_linear_1962_1882)"
                      />
                      <path
                        d="M14 21C14.7732 21 15.4 21.6269 15.4 22.4001V23.8001C15.4 24.5732 14.7732 25.2001 14 25.2001C13.2268 25.2001 12.6 24.5732 12.6 23.8001V22.4001C12.6 21.6269 13.2268 21 14 21Z"
                        fill="url(#paint5_linear_1962_1882)"
                      />
                      <path
                        d="M7.07042 9.05025C7.61716 9.59699 8.50359 9.59699 9.05032 9.05025C9.59706 8.50352 9.59706 7.61709 9.05032 7.07035L8.06037 6.0804C7.51364 5.53367 6.62721 5.53367 6.08047 6.0804C5.53374 6.62714 5.53374 7.51357 6.08047 8.0603L7.07042 9.05025Z"
                        fill="url(#paint6_linear_1962_1882)"
                      />
                      <path
                        d="M9.05019 20.9296L8.06024 21.9196C7.51351 22.4663 6.62708 22.4663 6.08034 21.9196C5.53361 21.3728 5.53361 20.4864 6.08034 19.9397L7.07029 18.9497C7.61703 18.403 8.50346 18.403 9.05019 18.9497C9.59693 19.4965 9.59693 20.3829 9.05019 20.9296Z"
                        fill="url(#paint7_linear_1962_1882)"
                      />
                      <path
                        d="M5.59999 15.4C6.37319 15.4 6.99999 14.7732 6.99999 14C6.99999 13.2269 6.37319 12.6 5.59999 12.6H4.19999C3.42679 12.6 2.79999 13.2269 2.79999 14C2.79999 14.7732 3.42679 15.4 4.19999 15.4H5.59999Z"
                        fill="url(#paint8_linear_1962_1882)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1962_1882"
                          x1="2.79999"
                          y1="2.80005"
                          x2="25.2"
                          y2="2.80005"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stopColor="#EC0909" />
                          <stop offset="1" stopColor="#820000" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1962_1882"
                          x1="2.79999"
                          y1="2.80005"
                          x2="25.2"
                          y2="2.80005"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stopColor="#EC0909" />
                          <stop offset="1" stopColor="#820000" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_1962_1882"
                          x1="2.79999"
                          y1="2.80005"
                          x2="25.2"
                          y2="2.80005"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stopColor="#EC0909" />
                          <stop offset="1" stopColor="#820000" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_1962_1882"
                          x1="2.79999"
                          y1="2.80005"
                          x2="25.2"
                          y2="2.80005"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stopColor="#EC0909" />
                          <stop offset="1" stopColor="#820000" />
                        </linearGradient>
                        <linearGradient
                          id="paint4_linear_1962_1882"
                          x1="2.79999"
                          y1="2.80005"
                          x2="25.2"
                          y2="2.80005"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stopColor="#EC0909" />
                          <stop offset="1" stopColor="#820000" />
                        </linearGradient>
                        <linearGradient
                          id="paint5_linear_1962_1882"
                          x1="2.79999"
                          y1="2.80005"
                          x2="25.2"
                          y2="2.80005"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stopColor="#EC0909" />
                          <stop offset="1" stopColor="#820000" />
                        </linearGradient>
                        <linearGradient
                          id="paint6_linear_1962_1882"
                          x1="2.79999"
                          y1="2.80005"
                          x2="25.2"
                          y2="2.80005"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stopColor="#EC0909" />
                          <stop offset="1" stopColor="#820000" />
                        </linearGradient>
                        <linearGradient
                          id="paint7_linear_1962_1882"
                          x1="2.79999"
                          y1="2.80005"
                          x2="25.2"
                          y2="2.80005"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stopColor="#EC0909" />
                          <stop offset="1" stopColor="#820000" />
                        </linearGradient>
                        <linearGradient
                          id="paint8_linear_1962_1882"
                          x1="2.79999"
                          y1="2.80005"
                          x2="25.2"
                          y2="2.80005"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stopColor="#EC0909" />
                          <stop offset="1" stopColor="#820000" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span
                    aria-hidden="true"
                    className="su-hidden su-align-middle su-relative su-w-[28px] su-h-[28px] peer-checked/light:su-inline-block"
                  >
                    <svg
                      className="su-absolute su-top-1/2 su-left-1/2 -su-translate-x-1/2 -su-translate-y-1/2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path d="M14 2.80005C14.7732 2.80005 15.4 3.42685 15.4 4.20005V5.60005C15.4 6.37325 14.7732 7.00005 14 7.00005C13.2268 7.00005 12.6 6.37325 12.6 5.60005V4.20005C12.6 3.42685 13.2268 2.80005 14 2.80005Z" />
                      <path d="M19.6 14C19.6 17.0928 17.0928 19.6 14 19.6C10.9072 19.6 8.39999 17.0928 8.39999 14C8.39999 10.9073 10.9072 8.40005 14 8.40005C17.0928 8.40005 19.6 10.9073 19.6 14Z" />
                      <path d="M18.9498 20.9296L19.9398 21.9196C20.4865 22.4663 21.3729 22.4663 21.9197 21.9196C22.4664 21.3729 22.4664 20.4864 21.9197 19.9397L20.9297 18.9497C20.383 18.403 19.4965 18.403 18.9498 18.9497C18.4031 19.4965 18.4031 20.3829 18.9498 20.9296Z" />
                      <path d="M21.9195 6.08038C22.4663 6.62711 22.4663 7.51354 21.9195 8.06028L20.9296 9.05023C20.3828 9.59696 19.4964 9.59696 18.9497 9.05023C18.4029 8.50349 18.4029 7.61706 18.9497 7.07033L19.9396 6.08038C20.4864 5.53365 21.3728 5.53365 21.9195 6.08038Z" />
                      <path d="M23.8 15.4C24.5732 15.4 25.2 14.7732 25.2 14C25.2 13.2269 24.5732 12.6 23.8 12.6H22.4C21.6268 12.6 21 13.2269 21 14C21 14.7732 21.6268 15.4 22.4 15.4H23.8Z" />
                      <path d="M14 21C14.7732 21 15.4 21.6269 15.4 22.4001V23.8001C15.4 24.5732 14.7732 25.2001 14 25.2001C13.2268 25.2001 12.6 24.5732 12.6 23.8001V22.4001C12.6 21.6269 13.2268 21 14 21Z" />
                      <path d="M7.07042 9.05025C7.61716 9.59699 8.50359 9.59699 9.05032 9.05025C9.59706 8.50352 9.59706 7.61709 9.05032 7.07035L8.06037 6.0804C7.51364 5.53367 6.62721 5.53367 6.08047 6.0804C5.53374 6.62714 5.53374 7.51357 6.08047 8.0603L7.07042 9.05025Z" />
                      <path d="M9.05019 20.9296L8.06024 21.9196C7.51351 22.4663 6.62708 22.4663 6.08034 21.9196C5.53361 21.3728 5.53361 20.4864 6.08034 19.9397L7.07029 18.9497C7.61703 18.403 8.50346 18.403 9.05019 18.9497C9.59693 19.4965 9.59693 20.3829 9.05019 20.9296Z" />
                      <path d="M5.59999 15.4C6.37319 15.4 6.99999 14.7732 6.99999 14C6.99999 13.2269 6.37319 12.6 5.59999 12.6H4.19999C3.42679 12.6 2.79999 13.2269 2.79999 14C2.79999 14.7732 3.42679 15.4 4.19999 15.4H5.59999Z" />
                    </svg>
                  </span>
                </label>

                <input
                  className="dark-theme su-opacity-0 su-absolute su-peer/dark"
                  type="radio"
                  name="ui-theme"
                  id="dark-theme"
                />
                <label
                  className="su-inline-block su-leading-2 su-relative su-align-middle su-z-20 peer-checked/dark:su-z-10 su-pl-50 su-ml-[-44px] peer-checked/dark:su-text-digital-red dark:peer-checked/dark:su-text-palo-verde su-text-black-50"
                  htmlFor="dark-theme"
                  data-theme="dark-theme"
                >
                  <span
                    aria-hidden="true"
                    className="su-inline-block su-align-middle su-relative su-w-[28px] su-h-[28px]"
                  >
                    <svg
                      className="su-absolute su-fill-transparent su-stroke-current su-top-1/2 su-left-1/2 -su-translate-x-1/2 -su-translate-y-1/2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M20.3542 15.3541C19.3176 15.7707 18.1856 15.9999 17 15.9999C12.0294 15.9999 8 11.9705 8 6.99994C8 5.81437 8.22924 4.68233 8.64581 3.64575C5.33648 4.97568 3 8.21495 3 11.9999C3 16.9705 7.02944 20.9999 12 20.9999C15.785 20.9999 19.0243 18.6635 20.3542 15.3541Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="su-inline-block su-align-middle">Dark</span>
                </label>
              </fieldset>
            </form>
          </div>

          <button
            type="button"
            className="report-header__preferences-close su-absolute su-right-20 md:su-right-auto md:su-left-38 su-top-[43px] md:su-top-[72px] su-w-32 su-flex su-flex-wrap su-gap-3 su-justify-center dark:hover:su-text-dark-mode-red hover:su-text-digital-red"
            aria-expanded="true"
            aria-controls="menu"
            aria-labelledby="close-preferences"
            data-location="close-prefs"
          >
            <span className="su-relative su-h-32 su-w-32">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.5607 6.43934C22.9749 5.85355 22.0251 5.85355 21.4393 6.43934L15 12.8787L8.56066 6.43934C7.97487 5.85355 7.02513 5.85355 6.43934 6.43934C5.85355 7.02513 5.85355 7.97487 6.43934 8.56066L12.8787 15L6.43934 21.4393C5.85355 22.0251 5.85355 22.9749 6.43934 23.5607C7.02513 24.1464 7.97487 24.1464 8.56066 23.5607L15 17.1213L21.4393 23.5607C22.0251 24.1464 22.9749 24.1464 23.5607 23.5607C24.1464 22.9749 24.1464 22.0251 23.5607 21.4393L17.1213 15L23.5607 8.56066C24.1464 7.97487 24.1464 7.02513 23.5607 6.43934Z"
                />
              </svg>
            </span>
            <span id="close-preferences" hidden>
              Close preferences
            </span>
            <span className="su-text-12 su-block" aria-hidden="true">
              Close
            </span>
          </button>

          <span tabIndex="0" data-tp-to="student-info" />
        </div>
      </div>
    </div>
  );
}
