/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
  // given coins 
  // amount
  // determine the fewest number of coins needed to make that amount
    //  0 1 2 3 4 5 6 7 8 9 10 11
    //0 0 0 0 0 0 0 0 0 0 0 0 0
    //1 0 1 2 3 4 5 6 7 8 9 10 11
    //2 0 1 1 2 2 3 3 4 4 5 5 6
    //5 0 1 1 2 2 1 2 2 3 3 2 3
    
    //  0 1 2 3 4 5 6 7 8 9 10 11
    //0 0 0 0 0 0 0 0 0 0 0 0 0
    //2 0 0 1 0 2 0 3 0 4 0 5 0
    //5 0 0 1 0 2 1 
    
    
    // coins.sort((a, b) => {
    //     return a-b
    // })
    
    const coinPouch = []
    
    for (let i = 0; i <= coins.length; i++) {
        coinPouch[i] = []
       for (let j = 0; j <= amount; j++) {
            if (i === 0 || j === 0) {
                coinPouch[i][j] = 0
            } else if (coins[i - 1] > j) {
                coinPouch[i][j] = coinPouch[i - 1][j]
            } else {
                if (coins[i - 1] > j) {
                    coinPouch[i][j] = coinPouch[i - 1][j]
                } else if (j%coins[i - 1] === 0) {
                    const numOfCoins = j/coins[i - 1]
                    coinPouch[i][j] = 1*numOfCoins
                } else {
                    const numOfCoins = Math.floor(j/coins[i - 1])
                    const remainder = j%coins[i - 1]
                    if (coinPouch[i-1][remainder] > 0) {
                        coinPouch[i][j] = coinPouch[i-1][remainder] + numOfCoins
                    } else {
                        coinPouch[i][j] = coinPouch[i-1][j] 
                    }
                }
            }
        } 
    }
    return coinPouch[coins.length][amount]
}



