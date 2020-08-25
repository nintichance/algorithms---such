const str1 = 'abaaba'
const str2 = 'babbab'
         'a b a a b a'
      //  0 1 2 3 5 6
      //0 0 0 0 0 0 0
//'b' 1 0 0 1 1 1 1 1
//'a' 2 0
//'b' 3 0
//'b' 4 0
//'a' 5 0
//'b' 6 0

const lcs = (str1, str2) => {
  const matrix = []

  for (let i = 0; i <= str1.length; i++) {
    matrix[i] = []
    for (let j = 0; j <= str2.length; j++) {
      if (i === 0 || j == 0) {
        matrix[i][j] = 0
      } else {
        if (str1[i - 1] === str2[j - 1]) {
          matrix[i][j] = 1 + matrix[i - 1][j - 1]
        } else {
          matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1])
        }
      }
    }    
  }
  const result = []
  const traverseMatrix = (i, j) => {
    console.log("HERE", matrix[i][j])
    if (matrix[i][j] === 0) return
    if (matrix[i][j] === (matrix[i - 1][j -1] + 1)){
      result.unshift(str1[i - 1])
      traverseMatrix(i-1, j-1)
    } else if (matrix[i][j] === matrix[i - 1][j]){
      traverseMatrix(i-1,j)
    } else if (matrix[i][j] === matrix[i][j - 1]){
      traverseMatrix(i,j-1)
    } 
  }
  console.log("hi", result)
  traverseMatrix(str1.length, str2.length)
  return result.join('')
}

console.log(lcs(str1, str2))