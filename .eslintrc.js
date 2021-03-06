module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'class-methods-use-this': 0,
    'react/display-name': 0,
  },
};
