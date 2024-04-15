module.exports = {
  collectCoverageFrom: ["./**/*.{js,jsx}"],
  coveragePathIgnorePatterns: ["node_modules", "dist", "global", "build"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transformIgnorePatterns: ["node_modules/(?!@squiz/*)"],
};
