// function * loop() {
//   for (let i = 0; i < 5; i++) {
//     yield console.log(i)
//   }
// }

// var l = loop()

// 应用场景：抽奖，中奖名单

function * backValue () {
  yield 1
}

var b = backValue()


function * backValue () {
  let val 
  val = yield 1
  console.log('val', val)
}

var b = backValue()


function * backValue () {
  let val 
  val = yield [1,2,3]
  console.log('val', val) // [1,2,3]
}

var b = backValue()

function * backValue () {
  let val 
  val = yield * [1,2,3]
  console.log('val', val) // undefined
}

var b = backValue()

function * backValue () {
  let val = 5
  yield console.log('val', val)
  console.log('val', val)
}

var b = backValue()

