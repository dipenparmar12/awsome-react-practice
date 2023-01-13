/*
 * 0 = off
 * 1 = error
 * 2 = warn
 * */
// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
    commonjs: true
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'no-undef': 'warn',
    'react/no-children-prop': 'warn',
    'no-case-declarations': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], //should add ".ts" if typescript project
    'no-unused-vars': 'off' /* 'warn' */,
    'react/no-unescaped-entities': 'off',
    'no-console': 'off',
    'import/first': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'react/display-name': 'off',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'linebreak-style': ['error', 'unix'],
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
