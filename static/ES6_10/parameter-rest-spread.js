function sum (...params) {
  console.log(params)
}

sum(1, 2) // [1, 2]

function sumTwo (base, ...nums) {
  console.log(base, nums)
}

function spread (a = 1, b = 2, c = 3) { console.log('a, b, c', a, b, c) }

var arr = [5, 6, 4, 3, 6, 5]

spread(...arr) // a, b, c 5 6 4
