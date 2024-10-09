import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/mrg-proposal/',
  build: {
    outDir: 'docs', // For Vite
  },
  plugins: [react()],
})
