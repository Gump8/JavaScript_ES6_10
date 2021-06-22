// import name, { conValue as conValue2, letValue, varValue } from './module'

// // conValue = 'conValue1'  Uncaught ReferenceError: conValue is not defined
// console.log('name', name)
// console.log('conValue2', conValue2)
// console.log('letValue', letValue)
// console.log('varValue', varValue)

// import obj, { say } from './module'

// console.log('obj', obj)
// console.log('say', say)

// export default 可以导出对象， 但 import 时不能解构赋值 
import { a, b } from './module'
console.log('a', a)
console.log('b', b)
