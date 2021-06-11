// var Animal = function (type) {
//   this.type = type
//   this.fn = function () { console.log('fn', this); return this }
// }

// Animal.fnOut = function () { console.log('fnOut', this); return this }

// Animal.prototype.fnPro = function () { console.log('fnPro', this); return this }

// var dog = new Animal('dog')
// var monkey = new Animal('monkey')

// dog.constructor.prototype.fnPro = function () { console.log('fnPro22', this); return this }

// dog.fn() === dog // true
// dog.fnPro() === dog // true

class Animal {
  constructor (type) {
    this.type = type
    this.fn = function () { console.log('fn', this); return this }
  }
  fnPro () { console.log('fnPro', this); return this }
}

var dog = new Animal('dog')
var monkey = new Animal('monkey')
