import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@src', replacement: resolve(__dirname, 'src')},
      { find: '@apis', replacement: resolve(__dirname, 'src/apis')},
      { find: '@assets', replacement: resolve(__dirname, 'src/assets')},
      { find: '@components', replacement: resolve(__dirname, 'src/components')},
      { find: '@pages', replacement: resolve(__dirname, 'src/pages')},
      { find: '@routes', replacement: resolve(__dirname, 'src/routes')},
      { find: '@store', replacement: resolve(__dirname, 'src/store')},
    ]
  },
});