const { rules } = require('@typescript-eslint/eslint-plugin/dist/configs/all')

const {
  overrides,
} = require('@typescript-eslint/eslint-plugin/dist/configs/eslint-recommended')

// 部分规则来源 https://github.com/AlloyTeam/eslint-config-alloy/blob/master/typescript.js
// @存疑：表示实践后再确定是否保留此规则
const fix = {
  /**
   * 禁止使用 // @ts-ignore // @ts-nocheck // @ts-check
   * @reason 这种注释本身就是对特殊代码的说明
   */
  '@typescript-eslint/ban-ts-comment': 'off',

  /**
   * 禁止使用指定的类型
   * @存疑
   */
  '@typescript-eslint/ban-types': 'off',

  /**
   * 类型断言必须使用 as Type，禁止使用 <Type>，禁止对对象字面量进行类型断言（断言成 any 是允许的）
   * @reason <Type> 容易被理解为 jsx
   */
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'never',
    },
  ],

  /**
   * 优先使用 interface 而不是 type
   * @reason interface 可以 implement, extend 和 merge
   */
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

  /**
   * 有默认值或可选的参数必须放到最后
   */
  'default-param-last': 'off',
  '@typescript-eslint/default-param-last': 'off',

  /**
   * 禁止使用 foo['bar']，必须写成 foo.bar
   * @reason 当需要写一系列属性的时候，可以更统一
   */
  'dot-notation': 'off',
  '@typescript-eslint/dot-notation': 'off',

  /**
   * 函数返回值必须与声明的类型一致
   * @reason 编译阶段检查就足够了
   */
  '@typescript-eslint/explicit-function-return-type': 'off',

  /**
   * 必须设置类的成员的可访问性
   * @reason 将不需要公开的成员设为私有的，可以增强代码的可理解性，对文档输出也很友好
   */
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {
      accessibility: 'no-public',
    },
  ],

  /**
   * 导出的函数或类中的 public 方法必须定义输入输出参数的类型
   */
  '@typescript-eslint/explicit-module-boundary-types': 'off',

  /**
   * 变量必须在定义的时候赋值
   */
  'init-declarations': 'off',
  '@typescript-eslint/init-declarations': 'off',

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
   * 限制各种变量或类型的命名规则
   */
  '@typescript-eslint/naming-convention': 'off',

  /**
   * 禁止使用 Array 构造函数
   */
  'no-array-constructor': 'off',
  '@typescript-eslint/no-array-constructor': 'off',

  /**
   * 禁止滥用 toString 方法
   * @存疑
   */
  '@typescript-eslint/no-base-to-string': 'off',

  /**
   * 禁止 delete 时传入的 key 是动态的
   */
  '@typescript-eslint/no-dynamic-delete': 'off',

  /**
   * 不允许有空函数
   * @reason 有时需要将一个空函数设置为某个项的默认值
   */
  'no-empty-function': 'off',
  '@typescript-eslint/no-empty-function': 'off',

  /**
   * 禁止使用 any
   * @存疑
   */
  '@typescript-eslint/no-explicit-any': 'off',

  /**
   * 禁止定义没必要的类，比如只有静态方法的类
   */
  '@typescript-eslint/no-extraneous-class': 'off',

  /**
   * 禁止调用 Promise 时没有处理异常情况
   */
  '@typescript-eslint/no-floating-promises': 'off',

  /**
   * 禁止使用 magic numbers
   */
  'no-magic-numbers': 'off',
  '@typescript-eslint/no-magic-numbers': 'off',

  /**
   * 禁止 throw 字面量，必须 throw 一个 Error 对象
   */
  '@typescript-eslint/no-throw-literal': 'off',

  /**
   * 禁止使用类型别名
   */
  '@typescript-eslint/no-type-alias': 'off',

  /**
   * 在命名空间中，可以直接使用内部变量，不需要添加命名空间前缀
   */
  '@typescript-eslint/no-unnecessary-qualifier': 'off',

  /**
   * 禁止范型的类型有默认值时，将范型设置为该默认值
   */
  '@typescript-eslint/no-unnecessary-type-arguments': 'off',

  /**
   * 禁止将变量或属性的类型设置为 any
   * @存疑
   */
  '@typescript-eslint/no-unsafe-assignment': 'off',

  /**
   * 禁止调用 any 类型的变量上的方法
   * @存疑
   */
  '@typescript-eslint/no-unsafe-call': 'off',

  /**
   * 禁止获取 any 类型的变量中的属性
   * @存疑
   */
  '@typescript-eslint/no-unsafe-member-access': 'off',

  /**
   * 禁止函数的返回值的类型是 any
   * @存疑
   */
  '@typescript-eslint/no-unsafe-return': 'off',

  /**
   * 禁止无用的表达式
   */
  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
    },
  ],

  /**
   * 使用 ?? 替代 ||
   */
  '@typescript-eslint/prefer-nullish-coalescing': 'off',

  /**
   * 私有变量如果没有在构造函数外被赋值，则必须设为 readonly
   */
  '@typescript-eslint/prefer-readonly': 'off',

  /**
   * 函数的参数必须设置为 readonly
   */
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',

  /**
   * 当需要忽略下一行的 ts 错误时，必须使用 @ts-expect-error 而不是 @ts-ignore
   * @reason 使用 @ts-expect-error 可以避免对不会报错的代码设置了 @ts-ignore
   */
  '@typescript-eslint/prefer-ts-expect-error': 'off',

  /**
   * async 函数的返回值必须是 Promise
   * 不做强制
   */
  '@typescript-eslint/promise-function-async': 'off',

  /**
   * 使用 sort 时必须传入比较函数
   * 不做强制
   */
  '@typescript-eslint/require-array-sort-compare': 'off',

  /**
   * async 函数中必须存在 await 语句
   * 不做强制
   */
  'require-await': 'off',
  '@typescript-eslint/require-await': 'off',

  /**
   * 使用加号时，两者必须同为数字或同为字符串
   * 不做强制
   */
  '@typescript-eslint/restrict-plus-operands': 'off',

  /**
   * 模版字符串中的变量类型必须是字符串
   */
  '@typescript-eslint/restrict-template-expressions': [
    'error',
    {
      allowNumber: true,
    },
  ],

  /**
   * 禁止在 return 语句里使用 await
   */
  'no-return-await': 'off',
  '@typescript-eslint/return-await': 'off',

  /**
   * 条件判断必须传入布尔值
   */
  '@typescript-eslint/strict-boolean-expressions': 'off',

  /**
   * 使用联合类型作为 switch 的对象时，必须包含每一个类型的 case
   */
  '@typescript-eslint/switch-exhaustiveness-check': 'off',

  /**
   * 禁止使用三斜杠导入文件
   * @reason 三斜杠是已废弃的语法，但在类型声明文件中还是可以使用的
   */
  '@typescript-eslint/triple-slash-reference': [
    'error',
    {
      path: 'never',
      types: 'always',
      lib: 'always',
    },
  ],

  /**
   * interface 和 type 定义时必须声明成员的类型
   */
  '@typescript-eslint/typedef': [
    'error',
    {
      arrayDestructuring: false,
      arrowParameter: false,
      memberVariableDeclaration: false,
      objectDestructuring: false,
      parameter: false,
      propertyDeclaration: true,
      variableDeclaration: false,
    },
  ],

  /**
   * 方法调用时需要绑定到正确的 this 上
   */
  '@typescript-eslint/unbound-method': 'off',

  /**
   * 函数重载时，若能通过联合类型将两个函数的类型声明合为一个，则使用联合类型而不是两个函数声明
   */
  '@typescript-eslint/unified-signatures': 'error',

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
    ...overrides,
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        ...rules,
        ...fix,
      },
    },
  ],
}
