const fs = require('fs')

const configs = {
  extends: ['airbnb-base', 'plugin:import/typescript'],
  settings: {
    'import/extensions': ['.js', '.jsx', '.mjs', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', ' .tsx'],
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
        ],
      },
    ],
  },
}

try {
  const filePath = require.resolve('@vue/cli-service/webpack.config.js')

  if (fs.existsSync(filePath)) {
    configs.settings['import/resolver'] = {
      webpack: {
        config: filePath,
      },
    }
  }
} catch (error) {
  console.log('未安装 vue-cli')
}

module.exports = configs
