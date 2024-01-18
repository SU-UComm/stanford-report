/** @type {import('tailwindcss').Config} */
const path = require("path");
const plugin = require("tailwindcss/plugin");

const dir = path.resolve(__dirname, "./global/css/plugins");
// const decanter = require("decanter");

module.exports = {
  presets: [require("decanter")],

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
      borderRadius: require(`${dir}/theme/borderRadius.js`)(),
      borderWidth: require(`${dir}/theme/borderWidth.js`)(),
      colors: require(`${dir}/theme/colors.js`)(),
      fontFamily: require(`${dir}/theme/fontFamily.js`)(),
      fontSize: require(`${dir}/theme/fontSize.js`)(),
      gap: require(`${dir}/theme/gap.js`)(),
      lineHeight: require(`${dir}/theme/lineHeight.js`)(),
      maxWidth: require(`${dir}/theme/maxWidth.js`)(),
      spacing: require(`${dir}/theme/spacing.js`)(),
    },
  },

  // The plugins section allows you to register third-party plugins with
  // Tailwind that can be used to generate extra utilities, components, base
  // styles, or custom variants.
  // https://tailwindcss.com/docs/configuration/#plugins
  plugins: [
    // Add our own variants for convenience
    plugin(({ addVariant }) => {
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("hocus-visible", ["&:hover", "&:focus-visible"]);
      addVariant("group-hocus", [
        ":merge(.group):focus &",
        ":merge(.group):hover &",
      ]);
      addVariant("group-hocus-visible", [
        ":merge(.group):focus-visible &",
        ":merge(.group):hover &",
      ]);
      addVariant("children", "& > *");
      addVariant("children-hover", "& > *:hover");
      addVariant("children-focus", "& > *:focus");
      addVariant("children-focus-visible", "& > *:focus-visible");
    }),

    // 3rd Party Plugins;
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),

    // @tailwind components;
    require(`${dir}/components/form/input.js`)(),
    require(`${dir}/components/form/buttons.js`)(),
    require(`${dir}/components/form/form-elements.js`)(),
    require(`${dir}/components/layout/centered-container.js`)(),
    require(`${dir}/components/layout/grid-gap.js`)(),
    require(`${dir}/components/link/stretched-link.js`)(),
    require(`${dir}/components/logo/logo.js`)(),
    require(`${dir}/components/responsive-spacing/responsive-spacing.js`)(),
    require(`${dir}/components/typography/wysiwyg.js`)(),
  ],
};
