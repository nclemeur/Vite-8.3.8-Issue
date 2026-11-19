import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      // as create-vue scaffolds it
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: { minify: false },
})
