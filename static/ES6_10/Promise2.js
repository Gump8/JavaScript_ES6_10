// function test(bool) {
//   if(!bool) return Promise.resolve(20)
//   return new Promise((resolve, reject) => {
//     resolve(30)
//   })
// }

// test(true).then(resolve => {

// }, err => {

// })

function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.src = src
    script.onload = () => resolve(src)
    script.onerror = err => reject({err, src})
    document.head.append(script)
  })
}

// 主动返回 Promise
loadScript('./11.js').then(
  () => {
    //  loadScript('./22.js') //下一个then由这个Promise的状态结果
    // return Promise.resolve()
  },
  () => {}
).then(
  () => {
     loadScript('./3.js')
  },
  () => {}
)