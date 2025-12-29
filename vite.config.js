import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist'
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
      // partials — если будут {{> partialName }}
      partialDirectory: resolve(__dirname, 'src/partial'),
      // runtime можно не указывать — плагин подключит handlebars/runtime сам
    }),
  ],
});
