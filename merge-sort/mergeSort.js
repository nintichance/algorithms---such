const mergeSort = array => {
  //Check if array can be split
  if (array.length < 2) return array
  const middle = Math.floor(array.length/2)
  const leftSide = array.slice(0, middle) 
  const rightSide = array.slice(middle, array.length)
  console.log("split:", leftSide, rightSide)
  return merge(mergeSort(leftSide), mergeSort(rightSide))
}

const merge = (left, right) => {
  const result = []
  while(left.length && right.length){
    if(left[0]<=right[0]){
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while(left.length) result.push(left.shift())
  while(right.length) result.push(right.shift())
  console.log("result is", result)
  return result
}

randomArray = () => {
  const randoArray = []
  for(let i=0; i<10000; i++){
    randoArray.push(Math.floor(Math.random()*10000))
  }
  return randoArray
}
mergeSort(randomArray())

Array.prototype.isSorted = function() {
  return (function(direction) {
    return this.reduce(function(prev, next, i, arr) {
      if (direction === undefined)
        return (direction = prev <= next ? 1 : -1) || true;
      else
        return (direction + 1 ?
          (arr[i-1] <= next) : 
          (arr[i-1] >  next));
    }) ? Number(direction) : false;
  }).call(this);
}

var arr = mergeSort(randomArray())
console.log(arr.isSorted())