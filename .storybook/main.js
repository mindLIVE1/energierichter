/** @type { import('@storybook-astro/framework').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [],
  framework: {
    name: '@storybook-astro/framework',
    options: {},
  },
};
export default config;
