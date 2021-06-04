// 构造函数
function Foo (name, age) {
  this.name = name
  this.age = age
  this.class = 'class-1'
  // return this // 默认执行
}

// 实例对象
var obj = new Foo()

/**
 * 原型链
 * 实例对象的隐式原型指向构造函数的显示原型
 * obj.__proto__ === Foo // true
 * 构造函数的显示原型的隐式原型又指向它的构造函数的显示原型
 * Foo.prototype.__proto__ === Object.prototype // true
 */

// Function.prototype.constructor === Function
