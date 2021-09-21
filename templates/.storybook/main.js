module.exports = {
  stories: [
    // Keep stacked
    './stories/**/*.stories.mdx',
    './stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y', '@storybook/addon-storysource', '@storybook/addon-postcss'],
  webpackFinal: async config => {
    /**
     * Delete the ProgressPlugin from Storybook to remove log file spam.
     */
    const progressKey = config.plugins.findIndex(v => v.constructor.name === 'ProgressPlugin');
    config.plugins.splice(progressKey, 1);

    return config;
  },
};
