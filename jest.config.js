module.exports = {
  rootDir: process.cwd(),
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "png", "md", "html"],
  verbose: true,
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/build/",
    ".(?:skip).",
  ],
  modulePaths: ["."],
  transform: {
    "\\.[jt]sx?$": ["babel-jest"],
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx",
  },
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    "node_modules",
    "out",
    ".storybook",
    ".stories.mdx",
  ],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
};
