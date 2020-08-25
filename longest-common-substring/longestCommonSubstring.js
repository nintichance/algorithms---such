const str1 = 'abaaba'
const str2 = 'babba'

const longestSubstring = (str1, str2) => {
  const matrix = []

  for (let i = 0; i <= str1.length; i++) {
    matrix[i] = []
    for (let j = 0; j <= str2.length; j++) {
      if (i === 0 || j === 0) {
        matrix[i][j] = 0
      } else {
        if (str1[i-1] === str2[j-1]) {
          matrix[i][j] = 1 + matrix[i - 1][j - 1]
        } else {
          matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1])
        }
      }
    }
  }

  let result = []

  const recreateString = (i, j) => {
    if (matrix[i][j] === 0) return
    if (matrix[i][j] === matrix[i][j - 1]) {
      recreateString(i, j-1)
    } else if (matrix[i][j] === matrix[i-1][j]){
      recreateString(i-1, j)
    }
    else if (matrix[i][j] === (matrix[i-1][j-1] + 1)){
      result.unshift(str1[i - 1])
      recreateString(i-1, j-1)
    }
  }
  recreateString(str1.length, str2.length)
  return result.join('')
}


// [
//   [ 0, 0, 0, 0, 0, 0, 0],
//   [ 0, 0, 1, 1, 1, 1, 1],
//   [ 0, 1, 1, 2, 2, 2, 2],
//   [ 0, 1, 2, 2, 2, 3, 3],
//   [ 0, 1, 2, 2, 2, 3, 3],
//   [ 0, 1, 2, 3, 3, 3, 4],
//   [ 0, 1, 2, 3, 3, 4, 4]
// ]
console.log(longestSubstring(str1, str2))