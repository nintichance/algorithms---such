/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
input: arr of ints
output: arr indexes of 2 el which make up target

*/
var twoSum = function(nums, target) {
  const seen = {}
  
  nums.forEach((num, index) => {
      seen[num] = index
  })
   
  let i = 0
  let result = []
  while (i < nums.length) {
      const difference = target - nums[i]
      if (seen[difference] && seen[difference] !== i) {
        result.push(i)
        result.push(seen[difference])
        return result
      }
      i++
  }
 
};