function PriorityQueue () {
  let collection = []

  this.print = function () {
    const result = collection.map(item => item[0])
    console.log(result)
  }

  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element)
    } else {
      let added = false
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element)
          added = true
          break // 一旦满足插入条件跳出循环
        }
      }
      if (!added) { // 优先级最小的情况插入队列
        collection.push(element)
      }
    }
  }

  this.dequeue = function () {
    const result = collection.shift()
    return result[0]
  }

  this.front = function () {
    const result = collection[0]
    return result[0]
  }

  this.size = function () {
    return collection.length
  }

  this.isEmpty = function () {
    return (collection.length === 0)
  }
}

var pq = new PriorityQueue()
pq.enqueue(['a', 1])
pq.enqueue(['b', 2])
pq.enqueue(['c', 3])
pq.enqueue(['d', 2])
pq.enqueue(['e', 1])
pq.enqueue(['f', 4])
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.front())
console.log(pq.size())
console.log(pq.isEmpty())
pq.print()
