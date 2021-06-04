function fn () {
  var a = 100

  return function () {
    console.log('a', a)
  }
}

var fn1 = fn()
fn1()
var a = 200
fn()()

// 原理  函数的执行环境 是在它定义时环境
// 使用场景  1. 函数作为返回值； 2. 函数作为参数。

function F2 (fn) {
  var a = 200
  fn()
}
F2(fn())

// 实际应用
function fn3 () {
  var _list = []
  return function (val) {
    if (val === 'getList') return [..._list]
    if (_list.includes(val)) return false

    _list.push(val)
    return true
  }
}
var include = fn3()
