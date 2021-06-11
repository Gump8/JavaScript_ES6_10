// var Animal = function (type) {
//   this.type = type
//   this.fn = function () { console.log('fn', this); return this }
//   console.log(Animal.fnStatic())
// }

// Animal.fnStatic = function () { console.log('fnStatic', this); return this }

class Animal {
  constructor (type) {
    this.type = type
  }

  static fnStatic () { console.log('fnStatic', this); return this } // 与实例对象无关，静态方法拿不到实例对象

  fn () { console.log('fn'); return this }
}

var dog = new Animal('dog')
var monkey = new Animal('monkey')
