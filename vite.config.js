import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
  },
  assetsInclude: ['**/*.hbs'],
  server: {
    port: 3000,
  },
  css: {
    postcss: {
      config: './postcss.config.json',
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partial'),
    }),
  ],
});
