// var val = Math.floor.apply(null, [3.15])
var val = Reflect.apply(Math.floor, null, [3.15])

function fn(val) { return val + 'reflect xxxx'}
Reflect.apply(fn, null, ['test'])

var val = new Date()
var val = Reflect.constructor(Date, [])

console.log(val)
