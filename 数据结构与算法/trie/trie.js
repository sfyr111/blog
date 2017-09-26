/**
 * Trie Data Structure
 */

const Node = function () {
  this.keys = new Map()
  this.end = false
  this.setEnd = function () {
    this.end = true
  }
  this.isEnd = function () {
    return this.end
  }
}

const Trie = function () {
  this.root = new Node()
  
  this.add = function (input, node = this.root) {
    if (input.length === 0) { // 如果输入的词为空设置当前节点为end
      node.setEnd()
      return
      // 在当前节点下的几个同级节点中执行, 节点存在在此节点的下面继续添加, 如果不存在就添加后继续执行
    } else if (!node.keys.has(input[0])) { // 如果input第一个字母不存在当前节点地keys内
      node.keys.set(input[0], new Node()) // 设置当前节点在同级节点下生成一个新节点
      return this.add(input.substr(1), node.keys.get(input[0])) 
    } else {
      return this.add(input.substr(1), node.keys.get(input[0])) 
    }
  }

  this.isWord = function (word) {
    let node = this.root
    // 长度===1时跳出， 跳出时word只有最后一个字母，node是最后一个node
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false
      } else {
        node = node.keys.get(word[0])
        word = word.substr(1)
      }
    }
    // 最后一个node有这个节点keys, 并且最后一个节点isEnd
    return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false
  }

  this.print = function () {
    let words = []
    let search = function (node, string) { // 默认从root节点，空字符串''开始
      if (node.keys.size !== 0) { // 如果有子节点
        for (let letter of node.keys.keys()) {
          search(node.keys.get(letter), string.concat(letter)) // 每次递归把字母累加
        }
        // 如果在递归过程中已经拼接成一个词时，把累加当字母push进words
        if (node.isEnd()) {
          words.push(string) 
        }
      } else { // 当递归到最后node.keys为0时push累加成单词
        string.length > 0 ? words.push(string) : undefined
        return
      }
    }
    search(this.root, '')
    return words.length > 0 ? words : null
  }
}
myTrie = new Trie()
myTrie.add('ball'); 
myTrie.add('bat'); 
myTrie.add('doll'); 
myTrie.add('dork'); 
myTrie.add('do'); 
myTrie.add('dorm')
myTrie.add('send')
myTrie.add('sense')
console.log(myTrie.isWord('doll'))
console.log(myTrie.isWord('dor'))
console.log(myTrie.isWord('dorf'))
console.log(myTrie.print())