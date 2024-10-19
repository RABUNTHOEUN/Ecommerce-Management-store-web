import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { hostname } from 'node:os'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  base: './',  // or specify a different base path if needed

  server: {
    host: '0.0.0.0',  // Bind to all network interfaces (enable external access)
    port: 8100,        // Port number
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})

