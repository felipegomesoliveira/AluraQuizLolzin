module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // eslint-disable-next-line quote-props
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'linebreak-style': 0,
  },
};
