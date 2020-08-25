//naive approach is to keep doing subtraction
const divide = (dividend, divisor) => {
  //dividend - a number to be divided by another number
    //divisor - a number that can divide into another number without a remainder
    const dividendSign = dividend.toString().includes('-') ? "-" : "+"
    const divisorSign = divisor.toString().includes('-') ? "-" : "+"
    console.log(divisorSign)
      console.log(dividendSign)
    let result = 0
    let offSetDivisor = 1
    let offSetDividend = 1
    if(divisorSign == "-" && dividendSign == "-"){
        dividend = parseInt(dividend.toString().slice(1,dividend.length))
        divisor = parseInt(divisor.toString().slice(1,divisor.length))
    } else if (divisorSign == "-" && dividendSign == "+"){
        offSetDivisor = -1
        divisor = parseInt(divisor.toString().slice(1,divisor.length))
    } else if (divisorSign == "+" && dividendSign == "-"){
        console.log("HERE")
        offSetDividend = -1
        dividend = parseInt(dividend.toString().slice(1,dividend.length))
    }
    while(dividend > divisor) {
          dividend-=divisor
          result++
    }
      
    return offSetDivisor == -1 || offSetDividend == -1  ? parseInt(`${-result}`) : result 
    //DOESN'T ACCOUNT FOR THE SAME ABSOLUTE VALUE DIVISOR & DIVEDEND
}