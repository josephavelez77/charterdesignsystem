import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src'],
      exclude: ['**/*.stories.tsx', '.storybook'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-regular-svg-icons',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/react-fontawesome',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@fortawesome/fontawesome-svg-core': 'FontAwesomeSvgCore',
          '@fortawesome/free-regular-svg-icons': 'FontAwesomeFreeRegularSvgIcons',
          '@fortawesome/free-solid-svg-icons': 'FontAwesomeFreeSolidSvgIcons',
          '@fortawesome/react-fontawesome': 'ReactFontawesome',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) return 'tokens/index.css'
          return assetInfo.name ?? 'assets/[name][extname]'
        },
      },
    },
    cssCodeSplit: false,
  },
})
