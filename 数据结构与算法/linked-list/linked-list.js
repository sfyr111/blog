const LinkedList = function () {
  let length = 0
  let head = null
  // 每个节点有自身元素也有下一个元素，最后一个节点的下一个为null
  const Node = function (element) {
    this.element = element
    this.next = null
  }

  this.size = function () {
    return length
  }

  this.head = function () {
    return head
  }

  this.add = function (element) {
    const node = new Node(element)
    
    if (head === null) head = node
    else {
      let currentNode = head
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = node
    }
    length++
  }

  this.remove = function (element) {
    let currentNode = head
    let previousNode
    // 删除的节点是第一个直接替换
    if (currentNode.element === element) head = currentNode.next
    else {
      // 如果没找到，替换到下一个节点
      while (currentNode.element !== element) {
        previousNode = currentNode
        currentNode = currentNode.next
        // 当查到的节点为null时就没找到
        if (currentNode === null) return 'NOT FOUND'
      }
      // 找到元素替换掉当前节点
      previousNode = currentNode.next
    }
    // 删除成功长度-1
    length--
    return currentNode.element
  }

  this.isEmpty = function () {
    return length === 0
  }

  this.indexOf = function (element) {
    let currentNode = head
    let index = -1 // 找不到为-1，先默认

    while (currentNode) {
      index++ // 先+1
      if (currentNode.element === element) {
        return index
      }
      currentNode = currentNode.next
    }
    return index // 没找到，默认为-1
  }

  this.elementAt = function (index) {
    let currentNode = head
    let count = 0

    if (count > index) return false 

    while (count < index) {
      count++
      currentNode = currentNode.next
    }
    // count === index时
    return currentNode.element
  }

  this.addAt = function (index, element) {
    const node = new Node(element)
    
    let currentNode = head
    let previousNode
    let currentIndex = 0

    if (index > length || index < 0) return false

    // 添加成功
    if (index === 0) {
      node.next = currentNode
      head = node
    } else {
      // 没找到index位置时继续查找
      while (currentIndex < index) {
        currentIndex++
        previousNode = currentNode
        currentNode = currentNode.next
      }
      // 找到index位置，插入
      node.next = currentNode
      previousNode.next = node
    }
    length++
    return 'add success'
  }

  this.removeAt = function (index) {
    let currentNode = head
    let previousNode
    let currentIndex = 0
    
    if (index >= length || index < 0) return false

    // 删除的时第一个时直接从head处替换
    if (index === 0) head = currentNode.next
    else {
      while (currentIndex < index) {
        currentIndex++
        previousNode = currentNode
        currentNode = currentNode.next
      }
      // 找到时用currentNode.next替换掉currentNode
      previousNode.next = currentNode.next
    }
    length--
    return currentNode.element
  }
}

var conga = new LinkedList()
conga.add('Kitten')
conga.add('Puppy')
conga.add('Dog')
conga.add('Cat')
conga.add('Fish')
// console.log(conga.size())
// console.log(conga.remove('ddd'))
// console.log(conga.removeAt(3))
// console.log(conga.elementAt(3))
// console.log(conga.addAt(5, 'gou'));
// console.log(conga.indexOf('gou'));
// console.log(conga.indexOf('Puppy'))
// console.log(conga.size())
