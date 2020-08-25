var addBinary = function(a, b) {
  // 5 & 1	1	0101 & 0001	 0001
  // 5 | 1	5	0101 | 0001	 0101
  // ~ 5	10	 ~0101	 1010
  // 5 << 1	10	0101 << 1	 1010
  // 5 ^ 1	4	0101 ^ 0001	 0100
  // 5 >> 1	2	0101 >> 1	 0010
  // 5 >>> 1	2	0101 >>> 1	 0010

  // &	AND	Sets each bit to 1 if both bits are 1
  // |	OR	Sets each bit to 1 if one of two bits is 1
  // ^	XOR	Sets each bit to 1 if only one of two bits is 1
  // ~	NOT	Inverts all the bits
  // <<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
  // >>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
  // >>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off
  
  const padding = Math.abs(a.length - b.length)
  
  if (a.length > b.length){
    b = padding.toString()*0 + b
  }else if(b.length > a.length) {
      a = padding.toString()*0 + a
  }
  
  let comparison = ""
  
  for(let i=0;i<a.length;i++){
      if (a[i] == b[i]) {
          comparison = comparison + "1"
      }else{
          comparison = comparison + "0"
      }
  }
  
  const carryOver = (comparison-comparison[0]) + "0"
  
  let total = ""
  for(let i=0;i<a.length;i++){
      if (a[i] != b[i]) {
          total = total + "1"
      }else{
          total = total + "0"
      }
  }
  //WITH RECURSION, YOU WANT TO ALWAYS FIND A BASE CASE THAT CAUSES YOU TO BREAK OUT OF THE CODE
  //ESSENTIALLY RECURSIVE CODE IS LIKE THE CONDITION FOR A WHILE LOOP...
  //ITS THE OPPOSITE OF THE LOOP INVARIANT
  if (parseInt(comparison) == 0){
      return total
  }
  
  return addBinary(total,carryOver)
}

addBinary("11","1")


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  // 5 & 1	1	0101 & 0001	 0001
  // 5 | 1	5	0101 | 0001	 0101
  // ~ 5	10	 ~0101	 1010
  // 5 << 1	10	0101 << 1	 1010
  // 5 ^ 1	4	0101 ^ 0001	 0100
  // 5 >> 1	2	0101 >> 1	 0010
  // 5 >>> 1	2	0101 >>> 1	 0010

  // &	AND	Sets each bit to 1 if both bits are 1
  // |	OR	Sets each bit to 1 if one of two bits is 1
  // ^	XOR	Sets each bit to 1 if only one of two bits is 1
  // ~	NOT	Inverts all the bits
  // <<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
  // >>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
  // >>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off
  
  const padding = Math.abs(a.length - b.length)
  
  if (a.length > b.length){
      b = padding.toString()*0 + b
  }else if(b.length > a.length) {
      a = padding.toString()*0 + a
  }
  
  //11 01
  //i = 1
  //comparison = 0
  //carryOver = 1
  //i = 0
  //comparison=0
  //carryOver=1
  //run out of length? add carryOver to comparison
  let comparison = ""
  let carryOver = ""
  for(let i=a.length-1;i>=0;i--){
      if (a[i] == b[i] && a[i] == 1) {
          comparison = "0" + comparison 
          carryOver = "1" + carryOver
      }else if (a[i] == b[i] && a[i] == 0){
          comparison = "0" + comparison 
          carryOver = "0" + carryOver
      }else if (a[i] != b[i]){
          comparison = "1" + comparison 
          carryOver = "0" + carryOver
      }
  }
  
  comparison = (comparison.slice(1,comparison.length)) + "0"
  console.log(carryOver)
  const total = carryOver + comparison
  let i = 0
  while(total[i]=="0"){
      i++
  }
  
  return total.slice(i,total.length)
  // let total = ""
  // for(let i=0;i<a.length;i++){
  //     if (a[i] != b[i]) {
  //         total = total + "1"
  //     }else{
  //         total = total + "0"
  //     }
  // }
  
  // if (parseInt(comparison) == 0){
  //     return total
  // }
  
  // return addBinary(total,carryOver)
}

// int add(int x, int y) {  
//11 & 01 = 01 
//01
//01 << 1

//keep = 10

//11^1
//11^01

//res = 10

//10 01
//00<<1
//00

//10 01
// 11

//     int keep = (x & y) << 1; 
//     int res = x^y; 

//     // If bitwise & is 0, then there 
//     // is not going to be any carry.  
//     // Hence result of XOR is addition. 
//     if (keep == 0) 
//         return res; 

//     add(keep, res); 
// } 

// // Driver code 
// int main(){ 
//     printf("%d", add(15, 38)); 
//     return 0; 
// }  