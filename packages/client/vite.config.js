/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';

import compress from 'vite-plugin-compression';
import { splitVendorChunkPlugin } from 'vite'

export default defineConfig({
  plugins: [ compress(), splitVendorChunkPlugin() ],
  root: 'src',
  server: {
    proxy: {
      '/blog': {
        target: 'http://localhost:4000',
        secure: false,
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'build'
  }
});
