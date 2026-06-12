import type { Preview } from '@storybook/react-vite'
import '../src/tokens/index.css'
import './preview.css'

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Color theme',
      defaultValue: 'dark',
      toolbar: {
        title: 'Theme',
        items: [
          { value: 'dark', title: 'Dark', icon: 'moon' },
          { value: 'light', title: 'Light', icon: 'sun' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = (context.globals as { theme?: string }).theme ?? 'dark'
      document.documentElement.setAttribute('data-theme', theme === 'light' ? 'light' : '')
      document.body.style.backgroundColor = 'var(--container-color-themeable-primary)'
      return Story()
    },
  ],
  parameters: {
    backgrounds: { disabled: true },
    docs: {
      canvas: {
        style: { backgroundColor: 'var(--container-color-themeable-primary)' },
      },
    },
    options: {
      storySort: {
        order: ['Foundations', '*'],
      },
    },
  },
}

export default preview
