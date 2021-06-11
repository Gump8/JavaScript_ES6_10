var fn = () => { return 5 }

var obj = {
  a: 'aObj',
  arrow: () => { console.log('arrow a', this.a); return this },
  fn: function () { console.log('fn a', this.a); return this }
}

var objDouble = {
  a: 'objDouble',
  ...obj
}

var objDoubleTwo = {
  a: 'objDouble',
  obj: {
    arrow: () => { console.log('arrow a', this.a); return this },
    fn: function () { console.log('fn a', this.a); return this },
    obj: {
      obj: {
        arrow: () => { console.log('arrow a', this.a); return this }
      }
    }
  }
}

function fn1 () {
  function fn () {
    var objDoubleTwo = {
      a: 'objDouble',
      obj: {
        arrow: () => { console.log('arrow a', this.a); return this },
        fn: function () { console.log('fn a', this.a); return this },
        obj: {
          obj: {
            arrow: () => { console.log('arrow a', this.a); return this }
          }
        }
      }
    }

    return objDoubleTwo.obj.obj.obj.arrow.bind(objDoubleTwo)()
  }
  console.log('fn()', fn())
  return fn()
}

fn1()

// var fn = (x, y, z) => x + y + z
// fn(1, 2, 3)

// var fn = (x, y, z) => ({ [x]: x, [y]: y, [z]: z }) // 返回字面量 对象
