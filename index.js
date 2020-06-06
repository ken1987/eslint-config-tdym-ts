module.exports = {
  env: {
    node: true,
  },
  settings: {
    // https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-511007063
    'import/resolver': {
      node: {},
    },
  },
  extends: [
    './configs/vue.js',
    './configs/airbnb.js',
    './configs/typescript.js',
    './configs/prettier.js',
  ],
}
