/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  if(nums == null || nums.length == 0 || nums.length == 1){
      return nums
  } else {
      let i=0
      //we have two pointers
      //a faster pointer (the faster pointer will move over one in each loop)
      //a slower pointer (the slower pointer will only move over if there was a zero to be swapped with a non-zero)
      //if the slower pointer equals 0, swap it with the faster pointer's value & move the slow pointer over
      for(let j=0;j<nums.length;j++){
          if(nums[i] == 0 && nums[j] != 0){
              nums[i] = nums[j]
              nums[j] = 0
              i++
          } else if (nums[i] != 0){
              i++
          }
      }
  }
  return nums
}