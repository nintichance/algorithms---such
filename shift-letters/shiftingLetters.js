/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(S, shifts) {
  const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  const letterLocation = {"a": 0,"b": 1,"c": 2,"d": 3,"e": 4,"f": 5,"g": 6,"h": 7,"i": 8,"j": 9,"k": 10,"l": 11,"m": 12,"n": 13,"o": 14,"p": 15,"q": 16,"r": 17,"s": 18,"t": 19,"u": 20,"v": 21,"w": 22,"x": 23,"y": 24,"z": 25}
  
     const sArr = S.split("")
     for(let i=0; i< shifts.length; i++){
         const shiftBy = shifts[i]
         console.log(sArr)
         let numToShift = i+1
         while(numToShift > 0) {
             const elementToShift = sArr[numToShift-1]
             const elIndex = numToShift - 1
             let shiftTo = letterLocation[elementToShift] + shiftBy
             if (shiftTo > 25) {
                console.log("HERE")
                 const div = Math.floor(shiftTo/25)
                 if (div > 1) {
                   shiftTo = Math.floor(shiftTo/div)
                 } else {
                   shiftTo = shiftTo - 1
                 }
             }
             console.log(shiftTo)
             sArr[elIndex] = letters[shiftTo]
             console.log(sArr)
             numToShift = numToShift-1
         }
     } 
     return sArr.join("")
 }
 
// #848 