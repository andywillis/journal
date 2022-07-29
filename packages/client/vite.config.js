/* eslint-disable import/no-extraneous-dependencies */
import { splitVendorChunkPlugin, defineConfig } from 'vite';

import compress from 'vite-plugin-compress';

export default defineConfig({
  plugins: [ compress(), splitVendorChunkPlugin() ],
  root: 'src',
  server: {
    port: 3000,
    proxy: {
      '/journal': {
        target: 'http://localhost:4000',
        secure: false,
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: '../dist',
    target: 'esnext'
  }
});
