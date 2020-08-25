/**
 * @param {number[]} nums
 * @return {number}
 */

     // 0   1  2  
    //3 3   0  0
    //6 9   0  0
    //5 9   0 14 
    //1 15 10 14 
    //8 18 22 23
    
      // 0  1  2
    //1  0  1  0
    //2  3  1  2    
    //3  6  4  5
    //4  9  10 8
    //4  12 13 14
    
    // 0  1  2
  //3  3  0  0
  //4  3  4  0
  //6  9  10 0
  //1  9  10 11
  //2  12 10 11
  //5  15 10 17
    
    //  0  1  2  
    //0 0  0  0
    //3 0  0  0
    //6 0  0  0
    //5 0  0  0 
    //1 0  0  0
    //8 0  0  0
    
    //cell = matrix[i][j]
   //nums[i]
  //j      //    0             1           2  
        //0      0             0           0    
        //3  m[0][0] = 3    m[0][1] = 0 m[0][2] = 0
        //6  m[1][0] = 9    m[1][1] = 0 m[1][2] = 0
        //5  m[2][0] = 9    m[2][1] = 0 m[2][2] = 14
        //1  m[3][0]        m[3][1]     m[3][2]
        //8  m[4][0]        m[4][1]     m[4][2]
    // [3, 6, 5, 1 8]
    var maxSumDivThree = function(nums) {
      let N = nums.length;
      let matrix = [[0, 0, 0]]
      for (let i = 1; i <= N; ++i) {
          matrix[i] = [...matrix[i - 1]]
          for (let j = 0; j < 3; j++) {
              let sum = nums[i - 1] + matrix[i - 1][j]
              matrix[i][sum % 3] = Math.max(matrix[i][sum % 3], sum)
          }
      }
      return matrix[N][0]
  }