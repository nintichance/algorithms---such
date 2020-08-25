// collects daily price quotes for some stock
// returns the span of that stock's price for the current day

// the span of the stock's price today is defined as the maximum number of consecutive days
// starting from today and going backwards
// for which the price of the stock was less than or equal to today's price

//input: [100, 80, 60, 70, 60, 75, 85]
//output: [1, 1, 1, 2, 1, 4, 6]

        // if the prevStockValue is less than the current
        // pop it off and add to the current weight
        // push current onto stack
        
        // if the prevStockValue is greater than current
        // add current to stack 
        
        // [100, 80, 60, 70, 60, 75, 85]
        // [100:1]
        // [100, 80, 60, 70, 60, 75, 85]
        // [100:1, 80:1]
        // [100, 80, 60, 70, 60, 75, 85]
        // [100:1, 80:1, 60:1]
        // [100, 80, 60, 70, 60, 75, 85]
        // [100:1, 80:1, 70:2]
        // [100, 80, 60, 70, 60, 75, 85]
        // [100:1, 80:1, 70:2, 60:1]
        // [100, 80, 60, 70, 60, 75, 85]
        // [100:1, 80:1, 75:4]
        // [100, 80, 60, 70, 60, 75, 85]
        // [100:1, 85:6]
        // until prevStockValue > price
         // pop off the stack and add weight
         class StockSpanner {
          constructor() {
              this.stack = []
          }
          
          next(price) {
              if (this.stack.length === 0) {
                  this.stack.push({price: price, weight: 1})
                  return 1
              }
              
              let prevStockValue = this.stack[this.stack.length - 1]
              console.log("PREV", prevStockValue.price, price)
              let weight = 1
              while (prevStockValue && prevStockValue.price <= price) {
                  console.log("HERE", price)
                  weight = weight + prevStockValue.weight
                  prevStockValue = this.stack.pop()
                  console.log("HEREHE", prevStockValue)
              }
              this.stack.push({price: price, weight: weight})
              console.log(this.stack)
              return weight
          }
      }
      
      /** 
       * @param {number} price
       * @return {number}
       */
      
      /** 
       * Your StockSpanner object will be instantiated and called as such:
       * var obj = new StockSpanner()
       * var param_1 = obj.next(price)
       */