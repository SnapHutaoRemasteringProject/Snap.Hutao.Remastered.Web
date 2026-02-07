import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    fs: {
      allow: ['..']
    },
    // 配置开发服务器也处理SPA路由
    historyApiFallback: {
      rewrites: [
        { from: /\.html$/, to: '/index.html' },
        { from: /.*/, to: '/index.html' }
      ]
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      }
    },
    outDir: 'dist'
  },
  preview: {
    historyApiFallback: {
      rewrites: [
        { from: /\.html$/, to: '/index.html' },
        { from: /.*/, to: '/index.html' }
      ]
    }
  }
})
