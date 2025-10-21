import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginRaw from 'vite-plugin-raw'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginRaw({
      match: /\.md$/,
    }),
    nodePolyfills({
      // Enable polyfills for Buffer and other Node.js globals
      globals: {
        Buffer: true,
        process: true,
      },
    }),
  ],
  base: './', // Use relative paths for GitHub Pages
})
