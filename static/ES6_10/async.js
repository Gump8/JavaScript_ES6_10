// async function firstAsync () {
//   return 7
// }

// console.log('firstAsync', firstAsync())

// async function firstAsync () {
//   return Promise.resolve(777)
// }

// firstAsync().then(val => {
//   console.log('resolve val', val)
// }, val => {
//   console.log('reject val', val)
// })

async function firstAsync () {
  let promise = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('resolve')
    }, 1000)
  })
  await promise.then(console.log)
  console.log(await 40) // console.log( await Promise.reolve(40))
  console.log('llll', 2)
  return 3 // return Promise.resolve(3)
}

firstAsync().then(val => {
  console.log('val', val)
})
