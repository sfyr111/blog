class Node { // Node有左右区分，本身值
  constructor (data, right = null, left = null) {
    this.data = data
    this.right = right
    this.left = left
  }
}

class BST {
  constructor () {
    this.root = null // bst的起始顶部是null
  }

  add (data) {
    const node = this.root
    if (node === null) {
      this.root = new Node(data) // 如果没有root node，那就创建这个这个root new Node
      return '创建rootNode'
    } else { // 如果不是顶部节点，创建递归函数找到它在哪
      const searchTree = function (node) { // 递归
        if (data < node.data) { // 如果添加值小于当前节点的值，那它应该从左搜索
          if (node.left === null) { // 如果节点left是空，添加值就为节点left
            node.left = new Node(data)
            return '创建lfetNode'
          } else if (node.left !== null) {
            return searchTree(node.left)
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data)
            return '创建rightNode'
          } else if (node.right !== null) {
            return searchTree(node.right)
          }
        } else {
          return null // 相等责不再增加
        }
      }
      return searchTree(node)
    }
  }

  findMin () { // 最小的为最左边的
    let current = this.root
    while (current.left !== null) {
      current = current.left
    }
    return current.data
  }

  findMax () {
    let current = this.root
    while (current.right !== null) {
      current = current.right
    }
    return current.data
  }

  find (data) {
    let current = this.root
    while (current.data !== data) {
      if (data < current.data) current = current.left
      if (data > current.data) current = current.right
      if (current === null) return null // ?
    }
    return current
  }

  isPresent (data) {
    let current = this.root
    while (current) {
      if (data === current.data) return true
      if (data < current.data) current = current.left
      if (data > current.data) current = current.right
    }
    return false
  }

  remove (data) {
    const removeNode = function (node, data) {
      if (node === null) return null
      if (data === node.data) {
        // node 没有子节点
        if (node.left === null && node.right === null) return null
        // node 没有left
        if (node.left === null) return node.right
        // node 没有right
        if (node.right === null) return node.left
        // node 有两个节点
        let tempNode = node.right
        while (tempNode.left !== null) { // 替换最接近当前需删除的节点 比如当前5 左边1 右边9，那么9的left会是 9 8 7 6, 1的right会是 2, 3, 4
          tempNode = tempNode.left
        }
        node.data = tempNode.data
        node.right = removeNode(node.right, tempNode.data) // 从right开始找到替换的节点位置进行删除，对它的子节点进行替换，直到替换为无子节点的情况
        return node
      } else if (data < node.data) { // 如果data小于当前值，从左边查找并删除
        node.left = removeNode(node.left, data)
        return node
      } else if (data > node.data) {
        node.right = removeNode(node.right, data)
        return node
      }
    }
    removeNode(this.root, data)
  }

  isBalanced () {
    return (this.heightFromMin() >= this.heightFromMax() - 1) // 从两边计算，只要其中一边算都高度 >= 另一边 - 1 那么就扇均衡的
  }

  heightFromMin (node = this.root) { // 从最左边最小值开始计算高度
    if (node === null) return -1 // 先确定到最末尾都节点
    let left = this.heightFromMin(node.left)
    let right = this.heightFromMin(node.right)
    if (left < right) return left + 1 // 从left最小值开始计算高度
    else return right + 1
  }

  heightFromMax (node = this.root) {
    if (node === null) return -1
    let left = this.heightFromMax(node.left)
    let right = this.heightFromMax(node.right)
    if (left < right) return right + 1 // 从right最大值开始计算高度
    else return left + 1
  }

  inOrder () {
    if (this.root === null) return null
    else {
      const result = []
      const traverseInOrder = function (node) {
        node.left && traverseInOrder(node.left)
        result.push(node.data)
        node.right && traverseInOrder(node.right)
      }
      traverseInOrder(this.root)
      return result
    }
  }

  preOrder () {
    if (this.root === null) return null
    else {
      const result = []
      const traversePreOrder = function (node) {
        result.push(node.data)
        node.left && traversePreOrder(node.left)
        node.right && traversePreOrder(node.right)
      }
      traversePreOrder(this.root)
      return result
    }
  }

  postOrder () {
    if (this.root === null) return null
    else {
      const result = []
      const traversePostOrder = function (node) {
        node.left && traversePostOrder(node.left)
        node.right && traversePostOrder(node.right)
        result.push(node.data)
      }
      traversePostOrder(this.root)
      return result
    }
  }

  levelOrder () {
    let result = []
    let queue = []
    if (this.root === null) return null
    else {
      queue.push(this.root)
      while (queue.length > 0) {
        let node = queue.shift()
        result.push(node.data)
        if (node.left !== null) {
          queue.push(node.left)
        }
        if (node.right !== null) {
          queue.push(node.right)
        }
      }
      return result
    }
  }
}

const bst = new BST()

// bst.add(4)
// bst.add(2)
// bst.add(6)
// bst.add(1)
// bst.add(3)
// bst.add(5)
// bst.add(7)
// bst.remove(4)
// console.log(bst)
// console.log('----')
// console.log(bst.findMin())
// console.log(bst.findMax())
// bst.remove(7)
// console.log(bst.findMax())
// console.log(bst.isPresent(4))
// console.log(bst.isPresent(5))
// console.log(bst.find(7))
// console.log('----')

// part 2
bst.add(9)
bst.add(4)
bst.add(17)
bst.add(3)
bst.add(6)
bst.add(22)
bst.add(5)
bst.add(7)
bst.add(20)

console.log(bst.heightFromMin())
console.log(bst.heightFromMax())
console.log(bst.isBalanced())
bst.add(10)
console.log(bst.heightFromMin())
console.log(bst.heightFromMax())
console.log(bst.isBalanced())
console.log('inOrder: ' + bst.inOrder())
console.log('preOrder: ' + bst.preOrder())
console.log('postOrder: ' + bst.postOrder())

console.log('levelOrder: ' + bst.levelOrder())
