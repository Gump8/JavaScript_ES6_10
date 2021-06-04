// 构造函数 this指向实例对象
function Foo () {
  this.name = 'foo'
  console.log('Foo this', this)
  console.log('Foo this === Foo', this === Foo)
}
var objF = new Foo()

// 作为一个对象的属性
var obj = {
  name: 'obj',
  printName: function () {
    console.log('obj this', this.name)
  }
}
obj.printName()

// 普通函数中的 this
function fn () {
  console.log('fn this', this)
}
fn()

// call apply this
function fn1 (arg1, arg2) {
  console.log('fn1 this.name', this.name)
  console.log('arg1, arg2', arg1, arg2)
  console.log('fn1 this', this)
}

fn1.call({ name: 'call' }, 'call1', 'call2')
fn1.apply({ name: 'apply' }, ['apply1', 'apply2'])

var fn2 = fn1.bind({ name: 'bind' })
fn2('fn2', 'fn2')
