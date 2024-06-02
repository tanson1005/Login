import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      public: '/public'
    }
  },

  build: {
    rollupOptions: {
      external: ["copy-to-clipboard"],
    },
    chunkSizeWarningLimit: 1000
  }
})