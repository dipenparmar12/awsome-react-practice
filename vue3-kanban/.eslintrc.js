/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  env: {
    node: true,
  },
  root: true,
  extends: [
    "@vue/eslint-config-prettier",
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "vue/require-default-prop": "off",
  },
};
