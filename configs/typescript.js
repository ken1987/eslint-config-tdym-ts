const { rules } = require('@typescript-eslint/eslint-plugin/dist/configs/all')
const redundantRules = require('./typescript-redundant')
const customRules = require('./typescript-custom')
const pendingRules = require('./typescript-pending')

module.exports = {
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser', // 非 eslint 配置，vue-eslint-parser 自定义的配置
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        ...rules,
        ...customRules,
        ...pendingRules,
        ...redundantRules,
      },
    },
  ],
}
