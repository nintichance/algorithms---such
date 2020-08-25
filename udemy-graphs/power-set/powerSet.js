const numOfPaths = 3
const bitString = new Array(numOfPaths).fill(0)
console.log("bit string", bitString)
let bitStrings = []
const powerSet = () => {
  // CONSTANT needs to be updated to VARS
  bitStrings = generateBitStrings(0, bitString, bitStrings)
  return bitStrings
}

// i is the index of the element we're considering
// bitString is an array of length N representing A bitstring, initialized with all 0's
// bitStrings tracks the found bitStrings
const generateBitStrings = (i, bitString, bitStrings) => {

  if (i === bitString.length){
    bitStrings = [...bitStrings, bitString]
  } else {
    // console.log("here")
    // consider including the element
    bitString[i] = 1
    generateBitStrings(i+1, bitString, bitStrings)
    // consider excluding the element
    bitString[i] = 0
    generateBitStrings(i+1, bitString, bitStrings)
  }
  return bitStrings
}

console.log(powerSet())