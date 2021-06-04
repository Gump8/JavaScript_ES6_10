/**
 * 所有引用类型（数组、对象、函数），都具有对象的特性（自由扩展属性），除了 null；
 * 所有引用类型（数组、对象、函数），都有一个 __proto__ 属性（隐式原型），属性值是一个普通的对象；
 * 所有的函数，都有一个prototype属性（显式原型），属性值是一个普通的对象；
 * 所有引用类型（数组、对象、函数）， __proto__ 属性值只想它的构造函数的 prototype 属性值；
 * 当试图得到一个对象的某个属性值是，如果这个对象本身没有这个属性，回去它的 __proto__ (即它的构造函数的prototype) 中寻找句号
 */

// var a = []
//  a.__proto__ === Array.prototype // true

// var a = {}
//  a.__proto__ === Object.prototype // true

// function fn () {}
// fn.prototype.constructor === fn // true
// fn.prototype.constructor.constructor === Function  // true
// fn.__proto__ === Function.prototype // true
