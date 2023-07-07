import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// dont forget to install @types/node for vue-ts
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  }
})
