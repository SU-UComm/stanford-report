/** @type {import('tailwindcss').Config} */
const path = require("path");
const plugin = require("tailwindcss/plugin");

const dir = path.resolve(__dirname, "./global/css/plugins");
const decanter = require("decanter");

module.exports = {
  presets: [decanter],

  // Our own prefix.
  darkMode: "class",
  prefix: "su-",
  content: ["./components/**/*.{css,jsx,js}", "./packages/**/*.{jsx,js,html}"],
  // The theme section is where you define your color palette, font stacks,
  // type scale, border sizes, breakpoints — anything related to the visual
  // design of your site.
  // https://tailwindcss.com/docs/configuration/#theme
  theme: {
    extend: {
      colors: require(`${dir}/theme/colors.js`)(),
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
        heading:
          "1px 0px 100px var(--tw-shadow-color), 0px 1px 1px var(--tw-shadow-color), 2px 1px 1px var(--tw-shadow-color), 1px 2px 1px var(--tw-shadow-color), 3px 2px 10px var(--tw-shadow-color),-1px 0px 10px var(--tw-shadow-color), 0px -1px 5px var(--tw-shadow-color), -3px -1px 5px var(--tw-shadow-color), -1px -2px 5px var(--tw-shadow-color), -3px -2px 5px var(--tw-shadow-color)",
      },
    },
  },

  // The plugins section allows you to register third-party plugins with
  // Tailwind that can be used to generate extra utilities, components, base
  // styles, or custom variants.
  // https://tailwindcss.com/docs/configuration/#plugins
  plugins: [
    require(`${dir}/base/base.js`)(),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
