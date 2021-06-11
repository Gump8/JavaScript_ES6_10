// 把有默认值的参数靠后写
function fn (a, x = [], y = {}, z = 'z') {
  console.log(a, x, y, z)
}

var d = 6

function fn1 (a, x = [], y = {}, z = 4, c = a + d) {
  console.log(a, x, y, z, c)
}

function fn2 (a, x = [], y = {}, z = 4, c = a + z) {
  console.log(a, x, y, z, c)
}

fn(undefined, undefined, null, '') // undefined [] null ""
fn1(1, undefined, undefined, 3, undefined) // 1 [] {} 3 7
fn2(1, undefined, undefined, 3, undefined) // 1 [] {} 3 4
fn.length // 2  没有默认值参数的个数
