import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react({
      // Otimizações React
      fastRefresh: true,
      babel: {
        plugins: [
          // Remover console.log em produção
          process.env.NODE_ENV === 'production' && [
            'transform-remove-console',
            { exclude: ['error', 'warn'] }
          ]
        ].filter(Boolean)
      }
    })
  ],
  build: {
    outDir: 'build',
    lib: {
      entry: 'src/index.tsx',
      name: 'UploadComponent',
      fileName: 'index',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'streamlit-component-lib'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'streamlit-component-lib': 'StreamlitComponentLib'
        },
        // Code splitting otimizado
        manualChunks: {
          vendor: ['react', 'react-dom'],
          streamlit: ['streamlit-component-lib']
        }
      }
    },
    // Otimizações de build
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
        passes: 2
      },
      mangle: {
        safari10: true
      }
    },
    // Limite de tamanho do bundle
    chunkSizeWarningLimit: 500,
    // Otimizações de CSS
    cssCodeSplit: true,
    cssMinify: true
  },
  server: {
    port: 3001,
    host: true,
    // Hot reload otimizado
    hmr: {
      overlay: false
    }
  },
  // Otimizações de desenvolvimento
  optimizeDeps: {
    include: ['react', 'react-dom', 'streamlit-component-lib'],
    exclude: []
  },
  // Resolver de módulos
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
