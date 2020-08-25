/**Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each operand may be an integer or another expression.

Note:

Division between two integers should truncate toward zero.
The given RPN expression is always valid. That means the expression would always evaluate to a result and there won't be any divide by zero operation. */
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const operators = ['+', '-', '*', '/']
  const numStack = []
  
  for (let i = 0; i < tokens.length; i++) {
      if (i === tokens.length - 1) console.log(numStack, tokens[i])
      if (operators.includes(tokens[i])) {
          const sec = numStack.pop()
          const first = numStack.pop()
          numStack.push(operate(parseInt(first), parseInt(sec), tokens[i]))
      } else {
          numStack.push(parseInt(tokens[i]))
      }
  }
  // truncate towards 0
  return numStack[0] > 0 ? Math.floor(numStack[0]) : Math.ceil(numStack[0])
};
  
const operate = (first, sec, operator) => {
  let result 
  switch(operator) {
    case '+':
      result = first + sec
      break;
    case '-':
      result = first - sec
      break;
    case '*':
      result = first * sec
      break;
    case '/':
      result = first / sec
      break;
  }
  return result
}