class Com {
  constructor () {
      // this.id = Math.random().toString(36).slice(8)
      this.proxy = new Proxy({
        id: Math.random().toString(36).slice(8)
      }, {
        get (target, key) { return target[key] },
        set (target, key, value) { return false }
      })
  }
  get id() { return this.proxy.id }
}

var comA = new Com()
var comB = new Com()

comA.id = 'xxxxxxxxxxx'
for (let i = 0; i < 3; i++) {
  console.log(comA.id, comB.id)
  // console.log('comB.id', comB.id)
}