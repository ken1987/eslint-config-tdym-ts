const { rules } = require('eslint-config-prettier/@typescript-eslint')

module.exports = {
  plugins: ['prettier'],
  extends: ['prettier', 'prettier/vue', 'prettier/@typescript-eslint'],
  rules: {
    'prettier/prettier': 'warn',
    'comma-dangle': ['error', 'only-multiline'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules,
    },
  ],
}
