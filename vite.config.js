import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
console.log('NODE_ENV', process.env.NODE_ENV)
// 性能优化
export default defineConfig({
  build: {
    sourcemap: process.env.NODE_ENV === 'development',
    // minify: 'terser',
    // terserOptions: {
    //   compress: {
    //     drop_console: true,
    //     drop_debugger: true,
    //   },
    // },
  },
  plugins: [
    uni(),
  ],
})
