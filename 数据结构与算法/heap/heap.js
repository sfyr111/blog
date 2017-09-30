/**
 * Heaps
 * 数组表现从1开始
 * left child: i * 2
 * right child: i * 2 + 1
 * parent: i / 2
 */

// [null, 1, 2, 3, 4, 5]

const MinHeap = function () {

  let heap = [null] // 0位是null

  this.print = () => heap

  this.insert = function (num) {
    heap.push(num)
    // 当heap从1开始有两个值当时候
    if (heap.length > 2) {
      let idx = heap.length - 1
      // 从最后位开始，当此位小于父节点时进行交换, 从parent开始继续向上检索
      while (heap[idx] < heap[Math.floor(idx / 2)]) {
        if (idx >= 1) {
          [ heap[Math.floor(idx / 2)], heap[idx] ] = [ heap[idx], heap[Math.floor(idx / 2)] ]
          if (Math.floor(idx / 2) > 1) idx = Math.floor(idx / 2)
          else break
        }
      }
    }
  }

  this.remove = function () {
    let smallest = heap[1]
    // 有两位有效值时
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1]
      // 去掉最后一位
      heap.splice(heap.length - 1)
      // 新heap的长度===3, 这时新heap只有两位value, 直接比较
      if (heap.length == 3) {

        if (heap[1] > heap[2]) {
          [ heap[1], heap[2] ] = [ heap[2], heap[1] ]
        }
        return smallest
      }

      // 新的heap长度!==3
      let i = 1 // 这时heap[1] 是之前heap[heap.length - 1]最后一位
      let left = 2 * i
      let right = 2 * i + 1
      // 当切掉当最后一位大于此时当left或right时
      while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
        // left小时, left替换掉i， 从left开始递归
        if (heap[left] < heap[right]) {
          [ heap[i], heap[left] ] = [ heap[left], heap[i] ]
          i = 2 * i
        } else {
          // right小时, right替换掉i， 从right开始递归
          [ heap[i], heap[right] ] = [ heap[right], heap[i] ]
          i = 2 * i + 1
        }
        // 给left right重新复制
        left = 2 * i
        right = 2 * i + 1
        // 当新检索位置下面没有分支时，跳出循环
        if (heap[left] === undefined || heap[right] === undefined) break
      }
    }
    // 只有一个value
    else if (heap.length === 2) heap.splice(1, 1)
    // 没有value
    else return null

    return smallest
  }

  this.sort = function () {
    let result = []
    while (heap.length > 1) {
      result.push(this.remove())
    }
    return result
  }
}

const MaxHeap = function () {
  let heap = [null]

  this.print = () => heap

  this.insert = function (num) {
    heap.push(num)
    if (heap.length > 2) {
      let idx = heap.length - 1
      while (heap[idx] > heap[Math.floor(idx / 2)]) {
        if (idx >= 1) {
          [ heap[Math.floor(idx / 2)], heap[idx] ] = [ heap[idx], heap[Math.floor(idx / 2)] ]
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2)
          } else {
            break
          }
        }
      }
    }
  }

  this.remove = function () {
    let largest = heap[1]
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1]
      heap.splice(heap.length - 1)
      if (heap.length === 3) {
        if (heap[1] < heap[2]) {
          [ heap[1], heap[2] ] = [ heap[2], heap[1] ]
        }
        return largest
      }

      let i = 1
      let left = 2 * i
      let right = 2 * i + 1

      while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
        if (heap[left] > heap[right]) {
          [ heap[i], heap[left] ] = [ heap[left], heap[i] ]
          i = 2 * i
        } else {
          [ heap[i], heap[right] ] = [ heap[right], heap[i] ]
          i = 2 * i + 1
        }
        left = 2 * i
        right = 2 * i + 1
        if (heap[left] === undefined || heap[right] === undefined) break
      }
    }
    else if (heap.length === 2) heap.splice(1, 1)
    else return null

    return largest
  }

  this.sort = function () {
    let result = []
    while (heap.length > 1) {
      result.push(this.remove())
    }
    return result
  }
}

let mh = new MaxHeap()
mh.insert(3)
mh.insert(1)
mh.insert(4)
mh.insert(2)
mh.insert(5)
mh.insert(6)
mh.insert(7)


console.log(mh.sort())