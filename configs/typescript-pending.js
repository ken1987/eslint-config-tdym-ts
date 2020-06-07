module.exports = {
  // 条件判断必须传入布尔值
  '@typescript-eslint/strict-boolean-expressions': 'off',

  // 函数的参数必须设置为 readonly
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',

  // 私有变量如果没有在构造函数外被赋值，则必须设为 readonly
  '@typescript-eslint/prefer-readonly': 'off',

  // 在命名空间中，可以直接使用内部变量，不需要添加命名空间前缀
  '@typescript-eslint/no-unnecessary-qualifier': 'off',

  // 禁止使用指定的类型
  '@typescript-eslint/ban-types': 'off',

  // 导出的函数或类中的 public 方法必须定义输入输出参数的类型
  '@typescript-eslint/explicit-module-boundary-types': 'off',

  // 禁止滥用 toString 方法
  '@typescript-eslint/no-base-to-string': 'off',

  // 禁止定义没必要的类，比如只有静态方法的类
  '@typescript-eslint/no-extraneous-class': 'off',

  // 禁止调用 Promise 时没有处理异常情况
  '@typescript-eslint/no-floating-promises': 'off',

  // 禁止 throw 字面量，必须 throw 一个 Error 对象
  '@typescript-eslint/no-throw-literal': 'off',

  // 禁止使用类型别名
  '@typescript-eslint/no-type-alias': 'off',

  // 禁止使用 any
  // '@typescript-eslint/no-explicit-any': 'off',

  // 禁止函数的返回值的类型是 any
  // '@typescript-eslint/no-unsafe-return': 'off',

  // 禁止将变量或属性的类型设置为 any
  // '@typescript-eslint/no-unsafe-assignment': 'off',

  // 禁止调用 any 类型的变量上的方法
  '@typescript-eslint/no-unsafe-call': 'off',

  // 禁止获取 any 类型的变量中的属性
  '@typescript-eslint/no-unsafe-member-access': 'off',
}
