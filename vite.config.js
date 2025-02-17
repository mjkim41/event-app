import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // proxy설정 - 백엔드 통신을 위한 프록시 우회
  server: {
    '/api': {
      target: 'http://localhost:9000',
      changeOrigin: true
    }
  }
})
