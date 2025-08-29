import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => ({
  base: "https://gcutieco.github.io/dew_proyecto_final",
  plugins: [react()],
}))
