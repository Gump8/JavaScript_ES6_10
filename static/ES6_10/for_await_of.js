// function Gen (time, stop = false) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       if (stop) reject('reject time: ${tiem}')
//       resolve(`resolve time: ${time}`)
//     }, time)
//   })
// }

// function test () {
//   let arr = [Gen(100), Gen(300), Gen(200)]
//   for (let item of arr) {
//     console.log(Date.now(),  item.then(console.log))
//   }
// }

// async function test () {
//   let arr = [Gen(100), Gen(300), Gen(200)]
//   for (let item of arr) {
//     console.log(Date.now(), await item.then(console.log))
//   }
// }

// async function test () {
//   let arr = [Gen(100), Gen(300, true), Gen(200)]
//   for await (let item of arr) {
//     console.log(Date.now(), item)
//   }
// }

// test()

var obj = {
  count: 0,
  rejectStop: false, // 有请求失败时， 是否继续
  params: [{ time: 100 }, { time: 300, rjt: true, done: true }, { time: 200 }],
  Gen ({ time = 0, done = false, rjt = false }) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        if (rjt) resolve({ done, value: { time, type: 'reject' } })
        resolve({ done, value: { time, type: 'resolve' } })
      }, time)
    })
  },
  [Symbol.asyncIterator] () {
    let _this = this
    return {
      async next () {
        if (_this.count === _this.params.length || !_this.params.length) {
          return Promise.resolve({ done: true, value: {} })
        }

        const params = _this.params[_this.count]
        _this.count++
        return _this.Gen(params)
      }
    }
  }
}

async function test () {
  for await (let item of obj) {
    // const { type } = item
    // if (type === 'reject') break
    console.log(Date.now(), item)
  }
}

test()
