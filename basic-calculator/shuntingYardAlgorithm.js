const inToPostFix = (chars) => {
  const queue = []
  const stack = []
  //enqueue numbers, push operators
  const arr = chars.replace(/\s/g, '').split('')
  arr.forEach(item => {
    if (!isNaN(item)) {
      queue.push(item)
    } else {
      handleOperands(item, stack, queue)
    }
  })
  popItems(stack, queue)
  return queue
}

const handleOperands = (item, stack, queue) => {
  if (item === '(') {
    stack.push(item)
  } else if (item === ')') {
    popItems(stack, queue)
  } else {
    if (comparePrecedence(item, stack[stack.length - 1])) {
      queue.push(stack.pop())
      stack.push(item)
    } else {
      stack.push(item)
    }
  }
}

const comparePrecedence = (item, prevItem) => {
  const precedence = {
    '-': 0, 
    '+': 0, 
    '*': 1, 
    '/': 1, 
    '%': 1, 
  }
  if (prevItem === '(') return false
  if (!isNaN(prevItem)) return false
  if (precedence[prevItem] > precedence[item]) return true 
  return false
}

const popItems = (stack, queue) => {
  console.log("HERE")
  let i = stack.length - 1
  while (stack.length || stack[i] !== '(') {
    queue.push(stack.pop())
    i--
  }
  // while (stack[i] != '(' || stack.length) {
  //   if (comparePrecedence(stack[i], stack[i - 1])) {
  //     const sec = stack.pop()
  //     queue.push(stack.pop())
  //     queue.push(sec)
  //   } else {
  //     queue.push(stack.pop())
  //   }
  // }
}

console.log(inToPostFix('1 + 1'))