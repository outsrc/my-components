const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.@(jsx|mdx|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        { loader: "style-loader" },
        {
          loader: "css-loader",
          options: { modules: true },
        },
        { loader: "sass-loader" },
      ],
      include: path.resolve(__dirname, "../"),
    });

    // Return the altered config
    return config;
  },
};
