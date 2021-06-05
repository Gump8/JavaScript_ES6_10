function getDataType (data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}

// function isObject (obj) {
//   return Object.prototype.toString.call(obj) === '[object Object]'
// }

function isObject (obj) {
  return typeof obj === 'object' && obj !== null
}

function isArray (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

function deepClone (obj) {
  if (!isObject(obj)) return obj
  const newObj = isArray(obj) ? [] : {}
  for (const [key, val] of Object.entries(obj)) {
    newObj[key] = deepClone(val)
  }
  return newObj
}

var arr1 = ['aaa', 'bbb', { b: 'b' }, [1, 3, 4, 0, 7, 5, 6, { a: 'a' }], { x: 'x', y: 'y' }]

console.log('deepClone', deepClone(arr1))
