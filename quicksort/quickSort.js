const quickSort = (arr, left, right) => {
  left = left || 0
  right = right || arr.length - 1

  const pivot = partition(arr, left, right)

  if(left < pivot - 1) {
    quickSort(arr, left, pivot - 1)
  }

  if(right > pivot) {
    quickSort(arr, pivot, right)
  }

  return arr
}

const partition = (arr, left, right) => {
  const pivot = Math.floor(left + right / 2)

  while (left <= right) {
    while(arr[left] < arr[pivot]) {
      left++
    }
    while(arr[right] > arr[pivot]) {
      right--
    }
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      // const temp = arr[left]
      // arr[left] = arr[right]
      // arr[right] = temp
      left++
      right--
    }
  }
  return left
}

(function test(){
  const testArray1 = [5, 3, 636, 12, 65]
  console.log(quickSort(testArray1))
})()