const change = (amount, coins) => {
  coins.sort((a,b) => (a - b))
  let variations = 0
  if(coins.length == 0){
      if(amount == 0){
          variations = 1
      } else {
          variations = 0
      }
  } else if(coins.length == 1){
      if(amount%coins[0] == 0){
          variations = 1
      } else {
          variations = 0
      }
  } else {
      let  changePouch = []
      for(let i=0;i<coins.length+1;i++){
          changePouch[i] = []
          for(j=0;j<amount+1;j++){
              if (i==0 || j ==0){
                  changePouch[i][j] = 0
          } else if (coins[i-1] > j) {
            changePouch[i][j] = changePouch[i-1][j]
          } else if (coins[i-1] == j) {
            const previousAccumulation = changePouch[i-1][j]
            const currentAccumulation = 1
            changePouch[i][j] = previousAccumulation + currentAccumulation
          } else if (j%coins[i-1] == 0) {
            const divided = Math.floor(j/coins[i-1])
            const remainder = j - coins[i-1]
            if (changePouch[i-1][remainder] > 0){
              changePouch[i][j] = changePouch[i-1][j] + divided
            } else {
              changePouch[i][j] = changePouch[i-1][j] + 1
            }
          } else {
            const remainder = j%coins[i-1]
            const divided = Math.floor(j/coins[i-1])
            if (changePouch[i-1][remainder] > 0){
              changePouch[i][j] = changePouch[i-1][j] + divided
            }  else {
              changePouch[i][j] = 0
            }
          }
        }
      }   
      variations = changePouch[coins.length][amount]
  }
  return variations
}

console.log(change(5, [1,2,5]))