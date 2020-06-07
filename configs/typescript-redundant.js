module.exports = {
  'constructor-super': 'off',
  'no-const-assign': 'off',
  'no-dupe-args': 'off',
  'no-dupe-class-members': 'off',
  'no-dupe-keys': 'off',
  'no-func-assign': 'off',
  'no-new-symbol': 'off',
  'no-obj-calls': 'off',
  'no-redeclare': 'off',
  'no-this-before-super': 'off',
  'no-undef': 'off',
  'no-unreachable': 'off',
  'no-unsafe-negation': 'off',
  'no-array-constructor': 'off',
  'no-useless-constructor': 'off',
  'no-return-await': 'off',

  // async 函数中必须存在 await 语句
  // note: this is a horrible rule that should never be used
  '@typescript-eslint/require-await': 'off',

  // 变量必须在定义的时候赋值
  '@typescript-eslint/init-declarations': 'off',

  // 有默认值或可选的参数必须放到最后
  '@typescript-eslint/default-param-last': 'off',

  // 建议尽可能使用 . 访问属性
  'dot-notation': 'off',
  '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],

  // 类的成员之间需要空行
  'lines-between-class-members': 'off',
  '@typescript-eslint/lines-between-class-members': [
    'error',
    'always',
    { exceptAfterSingleLine: false },
  ],

  // 不允许有空函数
  'no-empty-function': 'off',
  '@typescript-eslint/no-empty-function': [
    'error',
    {
      allow: ['arrowFunctions', 'functions', 'methods'],
    },
  ],

  // 禁止使用 magic numbers
  '@typescript-eslint/no-magic-numbers': [
    'off',
    {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    },
  ],

  // 禁止无用的表达式
  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': [
    'error',
    {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    },
  ],

  // 已定义的变量必须使用
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': [
    'error',
    { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
  ],

  // 禁止在定义变量之前就使用它
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': [
    'error',
    { functions: true, classes: true, variables: true },
  ],
}
