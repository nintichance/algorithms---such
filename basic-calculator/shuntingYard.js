// Stacks & Queues are key in going from infix to postfix
// process all symbols
// one at a time
// number enqueue
// operator push on stack
// pop - keep track of precedence
// pemdas
// parentheses rule
class Stack {
  constructor() {
    this.storage = {}
    this.size = 0
  }

  push(item) {
    this.size++
    this.storage[this.size] = item
  }

  pop() {
    const popped = this.storage[this.size]
    delete this.storage[this.size]
    this.size--
    return popped
  }

  peek() {
    return this.storage[this.size]
  }

  length() {
    return this.size
  }
}

class Queue {
  constructor() {
    this.head = 0
    this.tail = 0
    this.storage = {}
  }
  
  enqueue(item) {
    this.storage[this.tail] = item
    this.tail++
    this.count++
  }

  dequeue() {
    const dequeued = this.storage[this.head]
    delete this.storage[this.head]
    this.head++
    this.count--
    return dequeued
  }

  size() {
    return this.count
  }
}
const intoPost = (str) => {
  const stack = new Stack()
  const queue = []
  const arr = str.replace(/\s/g, '').split('')
  const precedence = {
    '-': 0,
    '+': 0,
    '*': 1,
    '%': 1,
    '/': 1,
    '(': 2,
    ')': 2
  }
  arr.forEach(item => {

    if (!isNaN(item)) {
      queue.push(item)
    } else {
      if (item === '(') {
        stack.push(item)
      } else if (item === ')'){
        popItems(stack, queue)
      } else {
        if (comparePrecedence(precedence[item], precedence[stack.peek()])) {
          queue.push(stack.pop())
          stack.push(item)
        }
        stack.push(item)
      }
      // if peeked symbol has higher precendence
      // pop stack
      // enqueue queue with hi precedent symbol
      // push next symbol onto stack
      stack.push(item)
    }
    // when get a closed parens
    // pop all items off stack
    // enqueue items
    // until parens are matched with open

    //END
    // pop everything else off the stack
    // popItems(stack, queue)
    console.log(stack)
    return queue
  })
  // enqueue nums
  // push operators
}

const popItems = (stack, queue) => {
  let i = 0
  const newLocal = stack.length()
  while (stack.peek() !== '(' || newLocal) {
    queue.push(stack.pop())
    i++
  }
  stack.pop()
}

const comparePrecedence = (first, sec) => {
  if (sec === 2) return false 
  if (sec > first) return true
  return false
}

console.log(intoPost('1 + 1'))