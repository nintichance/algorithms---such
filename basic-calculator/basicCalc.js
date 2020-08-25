/**Implement a basic calculator to evaluate a simple expression string.

The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces . */
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  // infix notation
  s = s.gsub() //remove spaces
  const len = s.length,
        stack = []
  let i = 0,
      res = 0,
      operand = 0

      while () {
        // ordinance
        // convert strings to integers
        // if its larger than 0, its an int
      }
  
};

/** 
 (
 )
 +
 -
 1

 input: "1 + 1"

1) get rid of all spaces 
2) => string with only non-negative integers & operators "1+1"
3) read the string from left to right
    - keep track of the operator and the operand
    - when we encounter a digit, we will transform the operand
        - res = 0, operand = 0, operator = 1
        - if digit, transform the operand (because you may have multiple digits for one number)
        - operand = (10*orperand) + digit

        - if plus, calculate res
          -> res += operator * operand
          -> operator = 1, operand = 0
        -if minus, calculate res
          -> res += operator * operand
          -> operator = -1, operand = 0
        - if '(', push result into the stack
          -> stack.push(res)
          -> stack.push(operator)
          -> operator = 1, operand = 0
        - if ')', calculate res & pop stack
          -> res = (operator * operand) + res
          -> curr_operator = stack.pop()
          -> res *= curr_operator
          -> res += stack.pop() (prev res)
          -> operand = 0;
input: "1 + 1"

    + 
    
  1   1
input: "(1+(4+5+2)-3)+(6+8)"
// start of a new node is always an operator
                          C
   1 +(4+5+2)-3)+(6+8)
     + (4+5+2)-3)+(6+8)
       ( 4+5+2)-3)+(6+8)
         4 +5+2)-3)+(6+8)
           + 5+2)-3)+(6+8)
             5 +2)-3)+(6+8)
               + 2)-3)+(6+8)
                 2 )-3)+(6+8)
                   ) -3)+(6+8)
                     - 3)+(6+8)
                       3 )+(6+8)
                         ) +(6+8)
                           + (6+8)
                             ( 6+8)
                               6 +8)
                                 + 8)
                                   8 )
                                   
               
*/