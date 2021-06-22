/**
 * 导出方式1
 */
// export const conValue = 'conValue'
// export let letValue = 'letValue'
// export var varValue = 'varValue'

/**
 * 导出方式2
 */
// const conValue = 'conValue'
// let letValue = 'letValue'
// var varValue = 'varValue'

// const name = 'name'
// export default name

// export {
//   conValue,
//   letValue,
//   varValue
// }

/**
 * 导出函数
 */
export function say (val) {
  console.log('val', val)
}

/**
 * 导出对象
 * import 不能解构赋值
 */
// export default {
//   a: 'a',
//   b: 'b'
// }

/**
 * 导出对象
 */
var obj = {
  a: 'a',
  b: 'b'
}
export default obj
