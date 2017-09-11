const MySet = function () {
  let collection = []

  this.has = function (element) {
    return collection.indexOf(element) !== -1
  }

  this.values = function () {
    return collection
  }

  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element)
      return true
    }
    return false
  }

  this.remove = function (element) {
    if (this.has(element)) {
      let index = collection.indexOf(element)
      collection(index, 1)
      return true
    }
    return false
  }

  this.size = function () {
    return collection.length
  }

  this.union = function (otherSet) { // 连接
    let unionSet = new MySet()
    let thisSetVal = this.values()
    let otherSetVal = otherSet.values()

    thisSetVal.forEach(item => unionSet.add(item))
    otherSetVal.forEach(item => unionSet.add(item))
    return unionSet
  }

  this.intersection = function (otherSet) { // 交集
    let intersectionSet = new MySet()
    let thisSetVal = this.values()

    thisSetVal.forEach(item => {
      if (otherSet.has(item)) {
        intersectionSet.add(item)
      }
    })
    return intersectionSet
  }

  // 返回thisSet不属于otherSet的值
  this.defference = function (otherSet) {
    let defferenceSet = new MySet()
    let thisSetVal = this.values()

    thisSetVal.forEach(item => {
      if (!otherSet.has(item)) {
        defferenceSet.add(item)
      }
    })
    return defferenceSet
  }

  // thisSet是否为otherSet的子集
  this.subset = function (otherSet) {
    let thisSetVal = this.values()
    return thisSetVal.every(item => {
      return otherSet.has(item)
    })
  }
}

var setA = new MySet()
var setB = new MySet()
setA.add('a')
setA.add('e')

setB.add('a')
setB.add('b')
setB.add('c')
setB.add('d')
console.log(setA.subset(setB))
console.log(setA.intersection(setB).values())
console.log(setA.defference(setB).values())
console.log(setA.union(setB).values())

var setC = new Set()
var setD = new Set()
setC.add('a')
setC.add('e')

setD.add('a')
setD.add('b')
setD.add('c')
setD.add('d')
console.log(setD.values())
setD.delete('a')
console.log(setD.has('a'))
console.log(setD.values())
console.log(setD.add('d'))
