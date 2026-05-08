/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react(), dts({
    include: ['src'],
    exclude: ['**/*.stories.tsx', '.storybook']
  })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: format => `index.${format === 'es' ? 'js' : 'cjs'}`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-regular-svg-icons', '@fortawesome/free-solid-svg-icons', '@fortawesome/react-fontawesome'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@fortawesome/fontawesome-svg-core': 'FontAwesomeSvgCore',
          '@fortawesome/free-regular-svg-icons': 'FontAwesomeFreeRegularSvgIcons',
          '@fortawesome/free-solid-svg-icons': 'FontAwesomeFreeSolidSvgIcons',
          '@fortawesome/react-fontawesome': 'ReactFontawesome'
        },
        assetFileNames: assetInfo => {
          if (assetInfo.name?.endsWith('.css')) return 'tokens/index.css';
          return assetInfo.name ?? 'assets/[name][extname]';
        }
      }
    },
    cssCodeSplit: false
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        }
      }
    }]
  }
});