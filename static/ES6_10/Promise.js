function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.src = src
    script.onload = () => resolve(src)
    script.onerror = err => reject({err, src})
    document.head.append(script)
  })
}

// 当 then 的第一个参数不是函数时，相当于是一个表达式，会执行
// loadScript('./1.js').then(loadScript('./2.js')).then(loadScript('./3.js'))

// then 默认返回一个空的 Promise, 
// loadScript('./11.js').then(
//   // 进入的执行状态 由第一个的Promise的状态决定
//   () => {
//     loadScript('./22.js')
//   }, 
//   ({err, src}) => {
//     console.log({err, src})
//   }
// ).then(
//   // 这个 then 一定是进入 fulfilled 状态，因为上一个 then 返回的空 Promise
//   () => {
//     loadScript('./3.js')
//   }, 
//   ({err, src}) => {
//     console.log({err, src})
//   }
// )

// 主动返回 Promise
loadScript('./1111.js').then(
  () => {
    return loadScript('./22.js') //下一个then由这个Promise的状态结果
    // return Promise.resolve()
  }, 
  ({err, src}) => {
    console.log({err, src})
    // return Promise.resolve()
    return Promise.reject(err) // 当出现错误时，下一个then进入 rejected
  }
).then(
  () => {
    return loadScript('./3.js')
  }, 
  ({err, src}) => {
    console.log({err, src})
    return Promise.reject(err) // 当出现错误时，下一个不执行
  }
)