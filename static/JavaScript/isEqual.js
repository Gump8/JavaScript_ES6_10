function isObject (val) {
  return typeof val === 'object' && val !== null
}

function _isArray (val) {
  return Array.isArray(val)
}

function _isEqualArrObj (arr1, arr2) {
  if (!_isArray(arr1) || !_isArray(arr2)) return arr1 === arr2
  if (arr1.length !== arr2.length) return false
  if (arr1 === arr2) return true

  while (arr1.length) {
    const index = arr2.findIndex(val2 => {
      return isEqual(arr1[0], val2)
    })
    if (index === -1) return false
    arr1.splice(0, 1)
    arr2.splice(index, 1)
  }

  return true
}

function _isEqualArr (arr1, arr2) {
  if (!_isArray(arr1) || !_isArray(arr2)) return arr1 === arr2
  if (arr1 === arr2) return true

  let isEqualArrObj = true
  if (arr1.some(val => typeof val === 'object')) {
    const [arr1ArrObj, arr2ArrObj] = [arr1.filter(val => isObject(val)), arr2.filter(val => isObject(val))]
    isEqualArrObj = _isEqualArrObj(arr1ArrObj, arr2ArrObj)
  }
  return isEqualArrObj && !(arr1.some(val => {
    if (isObject(val)) return false
    return !arr2.includes(val)
  }))
}

function isEqual (O1, O2) {
  if (!isObject(O1 || !isObject(O2))) return O1 === O2
  if (O1 === O2) return true

  const [keys1, keys2] = [Object.keys(O1), Object.keys(O2)]
  if (keys1.length !== keys2.length) return false

  if (_isArray(O1) && _isArray(O2)) {
    return _isEqualArr(O1, O2)
  }

  for (let key in O1) {
    if (!isEqual(O1[key], O2[key])) return false
  }

  return true
}

var obj1 = {
  a: 'a',
  b: {
    x: 'x',
    y: 'y'
  },
  d: ['a', 'b', 'd1']
}

var obj2 = {
  a: 'a',
  b: {
    x: 'x',
    y: 'y'
  },
  d: ['a', 'b', 'd1']
}

var arr1 = ['aaa', 'bbb', { b: 'b' }, [1, 3, 4, 0, 7, 5, 6, { a: 'a' }], { x: 'x', y: 'y' }]
var arr2 = ['bbb', { b: 'b' }, 'aaa', { x: 'x', y: 'y' }, [0, 7, 1, 3, 4, 5, 6, { a: 'a' }]]

var obj3 = { 0: 'a', 1: 'b' }
var arr3 = ['a', 'b']

// console.log('obj1, obj2', isEqual(obj1, obj2))
console.log('arr1 arr2', isEqual(arr1, arr2))
console.log('obj3 arr3', isEqual(obj3, arr3))
