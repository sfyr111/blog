function Queue () {
  let collection = []

  this.print = function (element) {
    console.log(collection)
  }

  this.enqueue = function (element) {
    collection.push(element)
  }

  this.dequeue = function () {
    return collection.shift()
  }

  this.front = function () {
    return collection[0]
  }

  this.size = function () {
    return collection.length
  }

  this.isEmpty = function () {
    return (collection.length === 0)
  }
}

const q = new Queue()
console.log(q)
