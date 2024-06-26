/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "plugin:vue/vue3-strongly-recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  "rules": {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    indent: "off",
    "comma-spacing": ["error", { before: false, after: true }],
    "vue/no-multi-spaces": 1,
  }
};
