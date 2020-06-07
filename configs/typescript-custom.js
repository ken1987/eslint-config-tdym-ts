module.exports = {
  // 函数返回值必须与声明的类型一致
  // 编译阶段检查就足够了
  '@typescript-eslint/explicit-function-return-type': 'off',

  // 禁止范型的类型有默认值时，将范型设置为该默认值
  '@typescript-eslint/no-unnecessary-type-arguments': 'off',

  // 使用联合类型作为 switch 的对象时，必须包含每一个类型的 case
  '@typescript-eslint/switch-exhaustiveness-check': 'off',

  // 禁止使用 // @ts-ignore // @ts-nocheck // @ts-check
  '@typescript-eslint/ban-ts-comment': 'off',

  // 类型断言必须使用 as Type，禁止使用 <Type>，禁止对对象字面量进行类型断言（断言成 any 是允许的）
  // <Type> 容易被理解为 jsx
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'never',
    },
  ],

  // 优先使用 interface 而不是 type
  // interface 可以 implement, extend 和 merge
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

  // 必须设置类的成员的可访问性
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {
      accessibility: 'no-public',
    },
  ],

  // 指定类成员的排序规则
  // 优先级：
  // 1. static > instance
  // 2. field > constructor > method
  // 3. public > protected > private
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

  // 限制各种变量或类型的命名规则
  // 根据实际项目需要，修改定制此规则
  '@typescript-eslint/naming-convention': 'off',

  // 禁止 delete 时传入的 key 是动态的
  '@typescript-eslint/no-dynamic-delete': 'off',

  // 使用 ?? 替代 ||
  // 两者语义不一样，不能直接替代
  '@typescript-eslint/prefer-nullish-coalescing': 'off',

  // 当需要忽略下一行的 ts 错误时，必须使用 @ts-expect-error 而不是 @ts-ignore
  // 使用 @ts-expect-error 可以避免对不会报错的代码设置了 @ts-ignore
  '@typescript-eslint/prefer-ts-expect-error': 'off',

  // async 函数的返回值必须是 Promise
  '@typescript-eslint/promise-function-async': 'off',

  // 使用 sort 时必须传入比较函数
  '@typescript-eslint/require-array-sort-compare': 'off',

  // 模版字符串中的变量类型必须是字符串
  '@typescript-eslint/restrict-template-expressions': [
    'error',
    {
      allowNumber: true,
    },
  ],

  // 禁止使用三斜杠导入文件
  // 斜杠是已废弃的语法，但在类型声明文件中还是可以使用的
  '@typescript-eslint/triple-slash-reference': [
    'error',
    {
      path: 'never',
      types: 'always',
      lib: 'always',
    },
  ],

  // interface 和 type 定义时必须声明成员的类型
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

  // 禁止使用 namespace 来定义命名空间
  '@typescript-eslint/no-namespace': [
    'error',
    {
      allowDeclarations: true,
      allowDefinitionFiles: true,
    },
  ],

  // 禁止将 this 赋值给其他变量，除非是解构赋值
  '@typescript-eslint/no-this-alias': [
    'error',
    {
      allowDestructuring: true,
    },
  ],
}
