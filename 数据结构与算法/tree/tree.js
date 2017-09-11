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
}

const bst = new BST()

bst.add(4)
bst.add(2)
bst.add(6)
bst.add(1)
bst.add(3)
bst.add(5)
bst.add(7)
bst.remove(4)
console.log(bst)
console.log('----')
console.log(bst.findMin())
console.log(bst.findMax())
bst.remove(7)
console.log(bst.findMax())
console.log(bst.isPresent(4))
console.log(bst.isPresent(5))
console.log(bst.find(7))
console.log('----')