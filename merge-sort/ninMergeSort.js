const mergeSort = (arr) => {
  if (arr.length <= 1) return arr 

  const middle = Math.floor(arr.length/2),
        left = arr.slice(0, middle),       
        right = arr.slice(middle)
  return mergeHalves(mergeSort(left), mergeSort(right))
}

const mergeHalves = (left, right) => {
  const result = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  return [...result, ...left, ...right]
}

(function test(){
  const testArray1 = [4,5,3,1,2,8]
  const testArray2 = [5, 5, 6, 100, 3, 5, 2, 1, 5, 7, 8888, 4]
  const testArray3 = [8, 5, 3, 6, 1]
  const testArray4 = [2, 1]
  const testArray5 = [2, 1, 0, 0, 0]
  console.log(mergeSort(testArray1))
  console.log(mergeSort(testArray2))
  console.log(mergeSort(testArray3))
  console.log(mergeSort(testArray4))
  console.log(mergeSort(testArray5))
})() 

