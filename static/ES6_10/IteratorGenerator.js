// 可迭代协议， 有 Symbol.iterator 属性才可遍历
// 迭代器协议， function return 固定的结构

var obj = {}

// 可迭代协议
obj[Symbol.iterator] = function () {
  const values = ['v1', 'v2', 'v3']
  // 迭代器协议
  return {
    next () {
      return {
        done: !values.length,
        value: values.shift()
      }
    }
  }
}

for (let value of obj) {
  console.log('value', value)
}

// 可迭代协议
obj[Symbol.iterator] = function * () {
  const values = ['v1', 'v2', 'v3']
  // yield 返回 迭代器协议
  yield * values
}

for (let value of obj) {
  console.log('value', value)
}
