const path = require('path')

module.exports = {
  root: true,
  extends: ['./index.js'],
  rules: {
    'no-console': 'off',
  },
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
  },
}
