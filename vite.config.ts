import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'node:path'

export default ({ mode }) => {
    return defineConfig({
      test: {
        testTimeout: 10_000,
        silent: false,
      },
      plugins: [tsconfigPaths()],
      resolve: {
        alias: [
          { find: '@', replacement: resolve(__dirname, './src') },
        ],
      },
    })
  }
  