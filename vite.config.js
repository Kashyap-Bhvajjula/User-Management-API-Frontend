import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://user-management-api-backend.onrender.com/users', // Your backend server URL
        changeOrigin: true, // For virtual hosted sites
        secure: false, // If your backend uses HTTP
        rewrite: (path) => path.replace(/^\/api/, ''), // Optionally rewrite paths
      },
    },
  },
})
