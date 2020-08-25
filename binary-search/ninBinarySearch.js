array = [3,4,6,2,3,645,2,3,6,83,23,13]

const binarySearch = (arr, val) => {
  console.log(arr)
  let lo = 0,
      mid = 0,
      high = arr.length - 1

  while (high >= lo) {
    mid = Math.floor((high + lo)/2)
    if (arr[mid] === val) {
      console.log(val, lo, high)

      return true
    } else if (val > arr[mid]) {
      lo = mid + 1
    } else {
      high = mid - 1
    }
  }
  return false
}

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr

  const middle = Math.floor(arr.length/2),
        left = arr.slice(0, middle), 
        right = arr.slice(middle)

  //call sortHalves merged/sortedright half and merged/sorted left half
  return sortHalves(mergeSort(left), mergeSort(right))
}

const sortHalves = (left, right) => {
  const result = []
  while (left.length, right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  return [...result, ...left, ...right]
}

console.log(binarySearch(mergeSort(array), 645))

