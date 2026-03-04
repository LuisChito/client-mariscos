import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@ui': path.resolve(__dirname, 'src/ui'),
      '@imgs': path.resolve(__dirname, 'public/imgs'),
    },
  },
})
