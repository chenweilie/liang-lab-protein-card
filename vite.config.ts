import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    // Mol* accesses process.env in some internal modules
    'process.env': {},
  },
  optimizeDeps: {
    // Mol* has no top-level entry; we import specific sub-paths, so exclude it
    // from pre-bundling to let Vite handle them on-demand.
    exclude: ['molstar'],
  },
  build: {
    chunkSizeWarningLimit: 20000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('molstar')) return 'molstar'
          if (id.includes('react-router')) return 'react-router'
          if (id.includes('react')) return 'react-vendor'
        },
      },
    },
  },
  worker: {
    format: 'es',
  },
})
