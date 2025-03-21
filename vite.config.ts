/*
 * @Date: 2025-03-13 17:30:27
 * @LastEditTime: 2025-03-21 17:32:01
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  },
  base: '/music_3d_chane/', // gh-pages设置静态资源的根路径
  build: {
    outDir: 'dist', // 确保输出目录正确
  },
})
