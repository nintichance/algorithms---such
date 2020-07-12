/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
  //given distinct coins
  //given amount
  //find the fewest combination of coins to make up the amount
  //no combinations? return -1
  if(amount == 0) {
      return 0
  }
  
  coins.sort((a,b)=> {
    return a-b  
  })
 
  const coinPouch = []
  for(let i=0; i<coins.length + 1; i++){
      coinPouch[i] = []
      for(let j=0; j<amount + 1; j++){ 
           const currentAmount = j
           const currentCoin = i == 0 ? 0 : coins[i-1] 
           if(i==0 || j==0){
              coinPouch[i][j] = 0
           } else if(currentAmount < currentCoin){
              coinPouch[i][j] = coinPouch[i-1][j]
           } else if (currentAmount%currentCoin == 0){
              coinPouch[i][j] = currentAmount/currentCoin
           } else {
            let leftOverAmount = currentAmount
            let numOfCoins = Math.floor(currentAmount/currentCoin)  
            let minNumOfCoinsCurrentlyRequired = 0
            while(numOfCoins > 0){
               leftOverAmount = currentAmount - coins[i-1]*numOfCoins
                   const previousNumOfCoins = coinPouch[i-1][leftOverAmount]
                   if (previousNumOfCoins > 0) {
                       minNumOfCoinsCurrentlyRequired = numOfCoins + previousNumOfCoins
                       break                 
                   }
                   numOfCoins = numOfCoins - 1
              }   
              coinPouch[i][j] = minValue(minNumOfCoinsCurrentlyRequired, coinPouch[i-1][j])
          }
      }
  }
  console.log(coinss)
  console.log(coinPouch)               

  if(coinPouch[coins.length][amount] == 0){
      return -1
  } else {
      return coinPouch[coins.length][amount]    
  }
  
}

const minValue = (current, previous) => {
   if (current == 0 && previous == 0){
         return 0
   } else if(current == 0) {
      return previous
   } else if(previous == 0) {
       return current
   } else if (current > previous){
       return previous
   } else {
       return current
   } 
}

coinChange([186,419,83,408], 6249)