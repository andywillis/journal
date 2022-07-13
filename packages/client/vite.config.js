/* eslint-disable import/no-extraneous-dependencies */
import { splitVendorChunkPlugin, defineConfig } from 'vite';

import compress from 'vite-plugin-compression';

export default defineConfig({
  plugins: [ compress(), splitVendorChunkPlugin() ],
  root: 'src',
  server: {
    proxy: {
      '/journal': {
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
