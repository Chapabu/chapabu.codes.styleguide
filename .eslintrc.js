module.exports = {
  root: true,
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  env: {
    browser: true,
  },
  rules: {
    'prettier/prettier': ['error'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'import/no-extraneous-dependencies': 0,
  },
};
