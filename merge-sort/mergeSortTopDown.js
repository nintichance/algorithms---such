const mergeSortTopDown = (array) => {
  if (array.length <= 1) {
    return array
  }

  const middle = Math.floor(array.length/2),
        left = array.slice(0, middle),
        right = array.slice(middle)
  return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right))
}

const mergeTopDown = (left, right) => {
  const array = []
  console.log(left, right)

  while(left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift())
    } else {
      array.push(right.shift())
    }
  }

  return [...array, ...left, ...right]
}

(function test(){
  const testArray1 = [4,5,3,1,2,8]
  const testArray2 = [5, 5, 6, 100, 3, 5, 2, 1, 5, 7, 8888, 4]
  const testArray3 = [8, 5, 3, 6, 1]
  // mergeSortTopDown(testArray1)
  // console.log(mergeSortTopDown(testArray2))
  console.log(mergeSortTopDown(testArray3))
})() 

