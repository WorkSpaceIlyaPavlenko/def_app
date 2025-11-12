import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@store':path.resolve(__dirname, 'src/store'),
      '@shared':path.resolve(__dirname, 'src/shared'),
      '@features':path.resolve(__dirname, 'src/features'),
      '@pages':path.resolve(__dirname, 'src/pages'),
      '@app':path.resolve(__dirname, 'src/app'),
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
