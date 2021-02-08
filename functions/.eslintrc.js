module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
  parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    "eslint:recommended",
    "google",
  ],
  plugins: ['prettier'],
  rules: {
    quotes: ["error", "double"],
  },
};
