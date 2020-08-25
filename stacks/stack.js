class Stack {
  constructor() {
    this.stack = {}
    this.size = 0
  }

  push(element) {
    this.size++
    this.stack[this.size] = element
  }

  pop() {
    const popped = this.stack[this.size]
    delete this.stack[this.size]
    this.size--
    return popped
  }

  peek() {
    return this.stack[this.size]
  }
}