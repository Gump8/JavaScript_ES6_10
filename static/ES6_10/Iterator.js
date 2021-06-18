var authors = {
  allAuthors: {
    science: ['S1', 'S2', 'S3'],
    fiction: ['F1', 'F2', 'F3', 'F4'],
    fanstasy: ['J1', 'J2']
  },
  ads: [],
  tel: []
}

authors[Symbol.iterator] = function () {
  // this  输入 对象本身
  const allAuthors = this.allAuthors
  const keys = Reflect.ownKeys(allAuthors)
  let values = []

  // 输出 固定格式
  return {
    next () {
      if (!values.length) {
        if (keys.length) {
          values = allAuthors[keys[0]]
          keys.shift()
        }
      }
      return {
        done: !values.length,
        value: values.shift()
      }
    }
  }
}

for (let v of authors) {
  console.log('v', v)
}

authors[Symbol.iterator] = function () {
  let values = ['v1', 'v2', 'v3']

  // 输出 固定格式
  return {
    next () {
      return {
        done: !values.length,
        value: values.shift()
      }
    }
  }
}

for (let v of authors) {
  console.log('v', v)
}
