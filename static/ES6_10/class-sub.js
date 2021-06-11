// var Animal = function (type) {
//   this.type = type
//   this.fn = function () { console.log('fn', this); return this }
// }

// Animal.fnStatic = function () { console.log('fnStatic', this); return this } // 静态方法

// Animal.prototype.fnPro = function () { console.log('fnPro', this); return this }

// var dog = new Animal('dog')
// var monkey = new Animal('monkey')

class Animal {
  constructor (type) {
    this.type = type
    this.fn = function () { console.log('fn', this); return this }
  }

  static fnStatic () { console.log('fnStatic', this); return this } // 静态方法

  fnPro () { console.log('fnPro', this); return this }
}

class Dog extends Animal {
  // constructor (type, age) {
  //   super(type)
  //   this.age = age
  // }
  dogFn () { console.log(this); return this }
}
