import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/DEW-PROYECTO-FINAL/' : '/',
  plugins: [react()],
}))
