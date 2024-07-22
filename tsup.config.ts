import { defineConfig } from 'tsup'

export default defineConfig({
  target: 'es2020',
  format: ['cjs'],
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  dts: true
})