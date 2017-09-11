const Stack = function () {
  let count = 0
  let storage = {}

  this.push = function (value) {
    storage[count] = value
    count++
  }

  this.pop = function () {
    if (count === 0) return undefined

    count--
    const result = storage[count]
    delete storage[count]
    return result
  }

  this.peek = function () {
    return storage[count - 1]
  }

  this.size = function () {
    return count
  }
}

const myStack = new Stack()
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
myStack.push(5)
console.log(myStack.size())
console.log(myStack.pop())
console.log(myStack.peek())
