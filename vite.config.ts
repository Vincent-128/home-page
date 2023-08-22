import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: 'terser',
    terserOptions: {
      ecma: 5,
      compress: { drop_console: true },
      output: { comments: false, beautify: false }
    }
  },
  plugins: [svelte()],
})
