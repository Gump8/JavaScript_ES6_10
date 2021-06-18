var o = {
  name: 'an obj',
  fn: 'test'
}

var p = new Proxy(o, {
  get(target, key) {
    let val = null
    switch (key) {
      case 'price':
        val =  target[key] + 20
        break;
    
      default:
        val =  target[key]
        break;
    }
    return val
  },
  set(target, key, val) {
    return false
  }
})

var p = new Proxy(o, {
  get(target, key) {
    return target[key] || ''
  },
  set(target, key, val) {
    return false
  }
})
