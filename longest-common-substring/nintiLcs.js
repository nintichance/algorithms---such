const str1 = 'abaaba'
const str2 = 'babbab'

const lcs = (str1, str2) => {
  const matrix = []
  for (let i = 0; i <= str1.length; i++) {
    matrix[i] = []
    for (let j = 0; j <= str2.length; j++) {
      if (i === 0 || j === 0){
        matrix[i][j] = 0
      } else {
        if (str1[i - 1] === str2[j - 1]) {
          matrix[i][j] = 1 + matrix[i - 1][j - 1]
        } else {
          matrix[i][j] = Math.max(matrix[i][j-1], matrix[i-1][j])
        }
      }
    } 
  }
  let result = []
  
  const constructLcs = (i, j) => {
    if (matrix[i][j] === 0) return

    if(matrix[i][j] === (matrix[i - 1][j - 1] + 1)) {
      constructLcs(i - 1, j -1)
      result.unshift(str1[i - 1])
    } else if (matrix[i][j] === matrix[i - 1][j]) {
      constructLcs(i - 1, j)
    } else {
      constructLcs(i, j -1)
    }
  }
  constructLcs(str1.length, str2.length)
  return result.join('')
}



console.log(lcs(str1, str2))