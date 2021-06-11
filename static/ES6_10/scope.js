console.log('aa', aa)
{
  var aa = 'aa'
  let a = 'a'
  console.log('a', a)
}

var b = 'b' // var 定义的全局变量可以通过 window 调用
let c = 'c'
console.log(window.b, window.c)

const d = 'd' // const 必须赋值

// 函数作用域   函数的执行环境是在它定义的时候
var fnA = 'fnAout'

function fn () {
  var fnA = 'fnAin'
  return function () {
    return fnA
  }
}

function fn1 () {
  return fnA
}

function fn2 () {
  var fnA = 'fn2'
  return fn1()
}

console.log('fn()()', fn()())
console.log('fn2()', fn2())
