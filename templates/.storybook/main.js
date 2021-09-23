module.exports = {
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  "stories": [
    // Keep Stacked
    './stories/**/*.stories.mdx',
    './stories/**/*.stories.@(js|jsx|ts|tsx)',
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-postcss",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-a11y',
    '@storybook/addon-storysource'
  ],
  webpackFinal: async config => {
    /**
     * Delete the ProgressPlugin from Storybook to remove log file spam.
     */
    const progressKey = config.plugins.findIndex(v => v.constructor.name === 'ProgressPlugin');
    config.plugins.splice(progressKey, 1);

    return config;
  },
}
