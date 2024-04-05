module.exports = {
  plugins: {
    "postcss-import-ext-glob": {},
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
    "postcss-scss": {},
  },
  content: [
    "./components/**/*.{css,jsx,js,scss,html}", // Include SCSS files
    "./packages/**/*.{css,jsx,js,scss,html}", // Other file types
  ],
};
