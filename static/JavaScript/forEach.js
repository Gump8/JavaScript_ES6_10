function forEach (data, fn) {
  if (Object.prototype.toString.call(data) !== '[object Object]' && !(data instanceof Array)) return console.error('Not Array or Object')
  if (data instanceof Array) {
    let [ i, len ] = [ 0, data.length ]
    for (; i < len; i++) {
      fn(i, data[i], data)
    }
    return
  }

  for (const [key, value] of Object.entries(data)) {
    fn(key, value, data)
  }
}
