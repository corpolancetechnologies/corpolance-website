import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        // Long-term cacheable vendor chunks (client build only).
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (/[\\/](react|react-dom|scheduler|react-router)[\\/]/.test(id)) return 'react'
          if (/[\\/](framer-motion|motion-dom|motion-utils)[\\/]/.test(id)) return 'motion'
        },
      },
    },
  },
  ssr: {
    // Bundle client-only packages into the prerender build so Node can import them.
    noExternal: ['framer-motion', 'lucide-react', 'react-router'],
  },
})
