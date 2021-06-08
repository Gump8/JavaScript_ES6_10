
function isArray (obj) {
  return Array.isArray(obj)
  // return Object.prototype.toString.call(obj) === '[object Array]'
}

function flat (arr, flatArr = []) {
  if (!isArray(arr)) return flatArr.push(arr)

  const arrArr = []
  arr.forEach(val => {
    isArray(val) ? arrArr.push(...val) : flatArr.push(val)
  })

  if (arrArr.length) flat(arrArr, flatArr)

  return flatArr
}

function flat2 (arr, flatArr = []) {
  if (!isArray(arr)) return flatArr.push(arr)

  arr.forEach(val => {
    isArray(val) ? flat2(val, flatArr) : flatArr.push(val)
  })

  return flatArr
}

function flat3 (arr, level = 1, flatArr = [], flatLevel = 0) {
  if (!isArray(arr)) return flatArr.push(arr)

  if (flatLevel > level) return flatArr.push(arr)
  ++flatLevel
  arr.forEach(val => {
    isArray(val) ? flat3(val, level, flatArr, flatLevel) : flatArr.push(val)
  })

  return flatArr
}

function flat4 (arr, level = 1, flatArr = [], flatLevel = 0) {
  if (!isArray(arr)) return flatArr.push(arr)

  if (flatLevel > level) return flatArr.push(arr)
  ++flatLevel

  arr.forEach(val => flat4(val, level, flatArr, flatLevel))

  return flatArr
}

var arr = ['a', ['b', 'c', ['d', 'e', ['f', 'g', ['h', 'i']]]], [1, 2, 3, 4, [5, [6, 7, [8, 9]]]]]

console.log('flat', flat(arr)) // ["a", "b", "c", 1, 2, 3, 4, "d", "e", 5, "f", "g", 6, 7, "h", "i", 8, 9]
console.log('flat2', flat2(arr)) // ["a", "b", "c", "d", "e", "f", "g", "h", "i", 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('flat3', flat3(arr, 2)) // ["a","b","c","d","e",["f","g",["h","i"]],1,2,3,4,5,[6,7,[8,9]]]
console.log('flat3', flat3(arr, Infinity)) // ["a", "b", "c", "d", "e", "f", "g", "h", "i", 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('flat3', flat4(arr, Infinity)) // ["a", "b", "c", "d", "e", "f", "g", "h", "i", 1, 2, 3, 4, 5, 6, 7, 8, 9]
