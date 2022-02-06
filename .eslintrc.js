/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
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
    'vue/no-deprecated-slot-attribute': 0,
    'quotes': [2, 'single', {'avoidEscape': true}],
    'no-multiple-empty-lines': 2,
    'no-multi-spaces': 2,
    'comma-spacing': 2,
    'object-curly-spacing': 2,
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
