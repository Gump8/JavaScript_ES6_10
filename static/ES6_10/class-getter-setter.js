var realAge = 5 // 使用闭包

class Animal {
  constructor (type) {
    this.type = type
    this.fn = function () { console.log('fn', this); return this }
  }

  get age () { return realAge }

  set age (age) { realAge = age }

  fnPro () { console.log('fnPro', this); return this }
}

var dog = new Animal('dog')
var monkey = new Animal('monkey')
