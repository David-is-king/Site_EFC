import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuration Vite minimale : le plugin React suffit pour ce projet.
export default defineConfig({
  plugins: [react()],
})
