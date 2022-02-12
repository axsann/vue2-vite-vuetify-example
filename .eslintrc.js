/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // 'plugin:vue/vue3-recommended',
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: [
    'vue',
    '@typescript-eslint',
    'unused-imports',
  ],
  rules: {
    'indent': [2, 2],
    'semi': [2, 'always'],
    'quotes': [2, 'single', {'avoidEscape': true}],
    'no-multiple-empty-lines': 2,
    'no-multi-spaces': 2,
    'comma-spacing': 2,
    'object-curly-spacing': 2,
    'vue/no-deprecated-filter': 2,
    'vue/no-deprecated-v-on-number-modifiers': 2,
    'vue/no-deprecated-data-object-declaration': 2,
    'vue/no-deprecated-events-api': 2,
    'vue/no-deprecated-functional-template': 2,
    'vue/no-deprecated-html-element-is': 2,
    'vue/no-deprecated-vue-config-keycodes': 2,
    'vue/no-deprecated-dollar-listeners-api': 2,
    'vue/no-deprecated-dollar-scopedslots-api': 2,
    'vue/no-deprecated-props-default-this': 2,
    'vue/require-explicit-emits': 2,
    'vue/return-in-emits-validator': 2,
    '@typescript-eslint/no-unused-vars': 0,
    'unused-imports/no-unused-imports': 2,
    'unused-imports/no-unused-vars': [
      1,
      {'vars': 'all', 'varsIgnorePattern': '^_', 'args': 'after-used', 'argsIgnorePattern': '^_'}
    ],
  },
  globals: {
  }
};
