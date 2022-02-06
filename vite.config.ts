/* eslint-env node */
import {defineConfig} from 'vite';
import * as path from 'path';
import {createVuePlugin as vue} from 'vite-plugin-vue2';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  preview: {
    host: '127.0.0.1',
    open: true,
  },
  resolve: {
    alias: [
      {find: '@', replacement: path.resolve(__dirname, 'src')},
    ],
  },
});
