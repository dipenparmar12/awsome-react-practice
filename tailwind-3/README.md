# React app

### Tailwind init
#### DOC: https://pomelozone.hashnode.dev/add-tailwind-jit-to-a-react-app-without-ejecting-or-using-craco 
1. `yarn add autoprefixer postcss postcss-cli postcss-import tailwindcss`
2. `yarn add cross-env` and `yarn add -D concurrently cssnano` 
3. Create two files `tailwind.config.js` and `postcss.config.js` in root
4. `tailwind.config.js`
```
module.exports = {
   mode: "jit",
   purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
   theme: {},
};
```
4. `postcss.config.js`
```
module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
```
5. Create `tailwind.pcss` and `tailwind.css` inside it
```
src/
├── styles/
         ├── tailwind.css
         └── tailwind.pcss
├── App.js
└── index.js
```
6. `tailwind.pcss`
```css
@import "tailwindcss/base.css";
@import "tailwindcss/components.css";
@import "tailwindcss/utilities.css";
```
8. Include css import statement in `src/index.js`
```js
import './styles/tailwind.css'
```
9. Modify `package.json`
```
"dev": "concurrently --names 'REACT,TAILWIND' --prefix-colors 'green,magenta' --kill-others \"yarn start\" \"yarn watch:css\"",
"watch:css": "cross-env TAILWIND_MODE=watch postcss src/styles/tailwind.pcss -o src/styles/tailwind.css --watch",
"build:css": "cross-env NODE_ENV=production postcss build src/styles/tailwind.css -o src/styles/tailwind.prod.css"
```
8. > yarn run dev


### TODO..
