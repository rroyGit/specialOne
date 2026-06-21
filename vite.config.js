import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: base must match your repo name for GitHub Pages
// e.g. if your repo is github.com/you/my-react-app, base is '/my-react-app/'
export default defineConfig({
  plugins: [react()],
  base: '/specialOne/',
})
