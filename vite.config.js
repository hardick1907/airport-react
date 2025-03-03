import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), 
    tailwindcss()],
  server: {
    port: 5173,
  },
  build: {
    outDir: "dist",
  },
  preview: {
    port: 5173,
  },
  json: {
    stringify: true
  }
});
