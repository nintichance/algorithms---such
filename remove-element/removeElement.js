const removeElement = (nums, val) => {
  //in order to remove the element, we will
  //create two pointers
  //a slower pointer
  //a faster pointer
  //if we see the val at the location of the slower pointer, we will swap it with the value at the faster pointer and increment the slower pointer
  //once the faster pointer has reached the end, we have the index of the slower pointer
  //the return value is the index of the slower pointer plus one
  
  let i=0
  for(let j=0;j<nums.length;j++){
      if(nums[i]==val && nums[j] != val){
          //swap the values and increment i
          nums[i] = nums[j]
          nums[j] = val
          i++
      } else if (nums[i] != val){
          //increment i until we find a val to swap
          i++
      }
  }
  return i
}