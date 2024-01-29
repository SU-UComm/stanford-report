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
  content: [],
  // The theme section is where you define your color palette, font stacks,
  // type scale, border sizes, breakpoints — anything related to the visual
  // design of your site.
  // https://tailwindcss.com/docs/configuration/#theme
  theme: {
    // Overrides.

    // Decanter Custom.
    // decanter: require(`${dir}/theme/decanter.js`)(),
    // Decanter's extension of Tailwind's default theme.
    extend: {
      colors: require(`${dir}/theme/colors.js`)(),
    },
  },

  // The plugins section allows you to register third-party plugins with
  // Tailwind that can be used to generate extra utilities, components, base
  // styles, or custom variants.
  // https://tailwindcss.com/docs/configuration/#plugins
  plugins: [require(`${dir}/base/base.js`)()],
};
