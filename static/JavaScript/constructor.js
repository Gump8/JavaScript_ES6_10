/**
 * 准确判断一个变量时数组类型
 * 写一个原型链继承的例子
 * new 一个对象的过程
 * zepto (或其它框架) 源码中如何使用原型链
 */

// 构造函数
function Foo (name, age) {
  this.name = name
  this.age = age
  this.class = 'class-1'
  // return this // 默认执行
}

var obj = new Foo('Liu', 20)
// obj.constructor === Foo // true

/**
 * var a = {} 是 var a = new Object() 的语法糖  a.constructor === Object  // true
 * var a = [] 是 var a = new Array()  的语法糖  a.constructor === Array  // true
 * function Foo(){} 是 var Foo = new Function()
 * instanceof 构造函数链查找； 判断一个变量的构造函数
 */
