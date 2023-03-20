### vite react 


## Dependenceis 

Sass 
> `pnpm add sass`

TailwindCss 
  - `pnpm add -D autoprefixer postcss tailwindcss`
  - `postcss.config.cjs` and `tailwind.config.cjs`

Src: https://blog.logrocket.com/setting-up-dev-environment-react-vite-tailwind/


EsLint + Prettier
  - `pnpm add -D eslint eslint-plugin-import eslint-config-airbnb eslint-import-resolver-alias eslint-plugin-react eslint-plugin-react-hooks`
  - `pnpm add -D prettier eslint-config-prettier eslint-plugin-prettier`
  - `prettier.config.cjs` and `eslint`

@src: 
  - https://github.com/igdev116/vite-react-ts-eslint-prettier/blob/main/.eslintrc
  - https://stackoverflow.com/a/41922950/8592918
  - https://github.com/igdev116/vite-react-ts-eslint-prettier
  - https://cathalmacdonnacha.com/setting-up-eslint-prettier-in-vitejs

### MISC
  - `React Dynamic routes`: https://dev.to/franciscomendes10866/file-based-routing-using-vite-and-react-router-3fdo
  - `Vite Path aliases`: https://dev.to/avxkim/setup-path-aliases-w-react-vite-ts-poa
  - `Route OutLet example`: https://codesandbox.io/s/react-router-dom-v6-ieqpg?file=/src/App.js
  - `Resolve Error` https://github.com/vitejs/vite/discussions/3448#discussioncomment-749919
    ```[plugin:vite:import-analysis]
    Failed to parse source for import analysis because the content contains invalid JS syntax.
    If you are using JSX, make sure to name the file with the .jsx or .tsx extension.```
  - `Fake API's Auth and Projects`: https://dummyjson.com/docs/auth
