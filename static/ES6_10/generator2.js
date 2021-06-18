function * backValue() {
  let val 
  val = (yield [1,2,3]) + 7
  console.log('val', val) // [1,2,3]
}

var b = backValue()
b.next(10)
b.next(20)
b.next(30)

function * backValue() {
  yield 1
}

var b = backValue ()

function * gen() {
  while (true) {
    yield 1
  }
}

var g = gen()

function * gen() {
  while (true) {
    console.log('yield 1', yield 1 )
  }
}

var g = gen()

