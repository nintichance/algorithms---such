const binarySearch = (arr, val) => {
  console.log(arr)
  let hi = arr.length,
      mid = 0,
      lo = 0
  while (hi >= lo){
    mid = Math.floor((hi + lo)/2)
    if (arr[mid] === val) {
      return true
    } else if (val > arr[mid]) {
      lo = mid + 1
    } else {
      hi = mid - 1
    }
  }
  return false
}

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr 

  const middle = Math.floor(arr.length/2),
        left = arr.slice(0, middle),
        right = arr.slice(middle)
  
  return sortHalves(mergeSort(left), mergeSort(right))
}

const sortHalves = (left, right) => {
  const result = []
  while (left.length && right.length) {
    if (left[0] < right[0]){
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  return [...result, ...left, ...right]
}
array = [3,4,6,2,3,645,2,3,6,83,23,13]

console.log(binarySearch(mergeSort(array), 645))

