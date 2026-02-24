import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/FrontEnd_lab/', // IMPORTANT
  plugins: [react()],
})