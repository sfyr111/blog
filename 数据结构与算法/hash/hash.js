const hash = (string, max) => {
  let hash = 0
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i)
  }
  return hash % max
}

const HashTable = function () {
  let storage = []
  const storageLimit = 4

  this.print = function () {
    console.log(storage)
  }

  this.add = function (key, value) {
    let index = hash(key, storageLimit) // 找到此key应插入的位置
    if (storage[index] === undefined) storage[index] = [ [key, value] ] // 无值时直接添加
    else {
      let inserted = false
      for (let i = 0; i < storage[index].length; i++) { // 遍历当前index位数组
        // 当前index位数组里有此次插入的key，更新key的value
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value
          inserted = true
        }
        // 此key首次插入
        if (inserted === false) storage[index].push([key, value])
      }
    }
  }

  this.remove = function (key) {
    let index = hash(key, storageLimit)
    if (storage[index].length === 1 && storage[index][0][0] === key) delete storage[index] // 用splice会导致减少长度
    else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) delete storage[index][i] // 做为表不改表结构
      }
    }
  }

  this.lookup = function (key) {
    let index = hash(key, storageLimit)
    if (storage[index] === undefined) return undefined
    else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) return storage[index][i][1]
      }
    }
  }
}

let ht = new HashTable()
ht.add('beau', 'person')
ht.add('fido', 'dog')
ht.add('rex', 'dinosour')
ht.add('tux', 'penguin')
ht.add('abc', 'ABC')
ht.add('weq', 'weqere')
ht.remove('beau')
// console.log(ht.lookup('tux'))
ht.print()

/*
[ <1 empty item>,
  [ <1 empty item>,
    [ 'tux', 'penguin' ],
    [ 'weq', 'weqere' ],
    [ 'weq', 'weqere' ] ],
  [ [ 'fido', 'dog' ], [ 'abc', 'ABC' ] ],
  [ [ 'rex', 'dinosour' ] ] ]
*/
