
const isAlph = (words, alph) => {
  //['c', 'b', 'a', 't']
  const alphaLookup = new Map()
  alph.forEach((char, index) =>{
    alphaLookup.set(char, index)
  })

for (let i = 0; i < words.length; i++) {
  // if any of them are false I want to return
  let curr,
      prev
  if (i > 0) {
    curr = words[i]
    prev = words[i -1]
  }
  const wordLen = curr.length < prev.length ? curr.length : prev.length
  // the words in words have different char lengths
  for (let j = 0; j < wordLen; j++) {
     if (!isSorted(curr[i],prev[i], alphaLookup)) return false
  }
}
return true
}

const isSorted = (curr, prev, alph) => {
const currIndex = alph.get(curr)
const prevIndex = alph.get(prev) 
// if the curr item comes before prev
if (prevIndex < currIndex) {
  return true
} else {
  false
}
}
// input:  words =    ["cat", "bat", "tab"]
//         alphabet = ['c', 'b', 'a', 't']
// output: True