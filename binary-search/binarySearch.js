// const binarySearch = (arr, value) => {
//   let high = arr.length - 1
//   let low = 0
//   let mid = 0

//   while (low <= high) {
//     mid = Math.floor((high + low) / 2)
//     // middle is the value being searched for
//     if (arr[mid] === value) {
//       return arr[mid]
//     } else if (value > arr[mid]) {
//       //move the low up one
//       low = mid + 1
//     } else {
//       //move the high down 1
//       high = mid - 1
//     }
//   }
//   return -1
// }

const binarySearch = (arr, val) => {
  let lo = 0,
      high = arr.length - 1,
      mid = 0

      while (high >= lo) {
        mid = Math.floor((high + lo)/2)
        if (arr[mid] === val) {
          return true
        } else if (val > arr[mid]){
          lo = mid + 1
        } else {
          high = mid - 1
        }
      }
      return false
}
array = [3,4,6,2,3,645,2,3,6,83,23,13]

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr

  const middle = Math.floor(arr.length/2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  // return result of mergeSort here
  return sortHalves(mergeSort(left), mergeSort(right))
}

const sortHalves = (left, right) => {
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

console.log(binarySearch(mergeSort(array), 234))

