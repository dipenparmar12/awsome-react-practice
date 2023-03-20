import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs/promises'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // resolve: {
  //   alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      // components: `${path.resolve(__dirname, './src/components/')}`,
    },
  },

  /*
  // Resolve Error
  @src: https://github.com/vitejs/vite/discussions/3448#discussioncomment-749919
      [plugin:vite:import-analysis]
      Failed to parse source for import analysis because the content contains invalid JS syntax.
      If you are using JSX, make sure to name the file with the .jsx or .tsx extension.
  */
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    // loader: "tsx",
    // include: /src\/.*\.[tj]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: 'load-js-files-as-jsx',
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
              loader: 'jsx',
              contents: await fs.readFile(args.path, 'utf8'),
            }))
          },
        },
      ],
    },
  },
})
