import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	base: '/flashcards-react/',
  plugins: [react()],
  build: {
    cssTarget: 'chrome61',
  }
});
