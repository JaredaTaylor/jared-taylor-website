import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import NodePolyfills from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    react(),
    NodePolyfills({
      protocolImports: true,
    }),
  ],
  server: {
    host: true,
    port: 3000,
    strictPort: true,
  },
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
    },
  },
  define: {
    global: 'globalThis',
  },
})
