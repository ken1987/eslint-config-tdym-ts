const {
  rules,
} = require('@typescript-eslint/eslint-plugin/dist/configs/all.json')

const fix = {
  /**
   * 类型定义
   */
  '@typescript-eslint/typedef': [
    'error',
    {
      arrowParameter: false,
      arrayDestructuring: false,
      objectDestructuring: false,
      parameter: false,
      propertyDeclaration: false,
      variableDeclaration: false,
      memberVariableDeclaration: false,
    },
  ],

  /**
   * 多余的条件判断
   */
  '@typescript-eslint/no-unnecessary-condition': [
    'error',
    {
      ignoreRhs: true,
    },
  ],

  /**
   * 允许使用 // @ts-ignore 来忽略编译错误
   */
  '@typescript-eslint/ban-ts-ignore': 'off',

  /**
   * 函数返回值必须与声明的类型一致
   */
  '@typescript-eslint/explicit-function-return-type': [
    'error',
    {
      allowExpressions: true,
      allowHigherOrderFunctions: true,
      allowTypedFunctionExpressions: true,
    },
  ],
  /**
   * 约束泛型的命名规则
   */
  '@typescript-eslint/generic-type-naming': 'off',

  /**
   * 约束接口名称
   */
  '@typescript-eslint/interface-name-prefix': 'off',

  /**
   * 私有成员必须以 _ 开头
   * @reason 已有 private 修饰符了，没必要限制变量名
   */
  '@typescript-eslint/member-naming': 'off',

  /**
   * 指定类成员的排序规则
   * @reason 优先级：
   * 1. static > instance
   * 2. field > constructor > method
   * 3. public > protected > private
   */
  '@typescript-eslint/member-ordering': [
    'error',
    {
      default: [
        'public-static-field',
        'protected-static-field',
        'private-static-field',
        'static-field',
        'public-static-method',
        'protected-static-method',
        'private-static-method',
        'static-method',
        'public-instance-field',
        'protected-instance-field',
        'private-instance-field',
        'public-field',
        'protected-field',
        'private-field',
        'instance-field',
        'field',
        'constructor',
        'public-instance-method',
        'protected-instance-method',
        'private-instance-method',
        'public-method',
        'protected-method',
        'private-method',
        'instance-method',
        'method',
      ],
    },
  ],

  /**
   * 禁止使用 magic numbers
   */
  '@typescript-eslint/no-magic-numbers': 'off',

  /**
   * 禁止使用 namespace 来定义命名空间
   * @reason 使用 es6 引入模块，才是更标准的方式。
   * 允许使用 declare namespace ... {} 来定义外部命名空间
   */
  '@typescript-eslint/no-namespace': [
    'error',
    {
      allowDeclarations: true,
      allowDefinitionFiles: true,
    },
  ],

  /**
   * 禁止将 this 赋值给其他变量，除非是解构赋值
   */
  '@typescript-eslint/no-this-alias': [
    'error',
    {
      allowDestructuring: true,
    },
  ],

  /**
   * 禁止使用类型别名
   */
  '@typescript-eslint/no-type-alias': 'off',

  /**
   * require-await
   */
  '@typescript-eslint/require-await': 'off',

  /**
   * 对表达式中 boolean 值进行严格校验
   */
  '@typescript-eslint/strict-boolean-expressions': 'off',
}

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
        ...fix,
      },
    },
  ],
}
