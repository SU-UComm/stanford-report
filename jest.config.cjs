module.exports = {
    collectCoverageFrom: ["./**/*.{js,jsx}"],
    coveragePathIgnorePatterns: ["node_modules", "dist"],
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
