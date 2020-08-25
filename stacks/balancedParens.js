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

isBalanced = (s) => {
  const leftCharacters = new Stack
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      leftCharacters.push(s[i])
    } else {
      if (leftCharacters.isEmpty()) {
        return false
      }
      if (s[i] === ')' && leftCharacters.peek() !== '(' ||
          s[i] === ']' && leftCharacters.peek() !== '[' ||
          s[i] === '}' && leftCharacters.peek() !== '{' ||) {
            return false
      }          
      leftCharacters.pop()
    }
  }
  return leftCharacters.isEmpty()
}