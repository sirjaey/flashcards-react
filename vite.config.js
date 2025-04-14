import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	base: "https://sirjaey.github.io/flashcards-react/",
	plugins: [react()],
});
