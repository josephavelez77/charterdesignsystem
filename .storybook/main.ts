import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  // Copy llms.txt files to the static site root so they're served at /llms.txt
  staticDirs: [{ from: '../llms.txt', to: '/llms.txt' }, { from: '../llms-full.txt', to: '/llms-full.txt' }],
  addons: [
    '@storybook/addon-themes',
    '@storybook/addon-docs',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@chromatic-com/storybook'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
}

export default config
