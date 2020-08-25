// empty string root
// node which is each of the 26 letters in alphabet
// the ending node for a word has boolean true
// otherwise undefined if not end
class Node {
  constructor() {
    this.children = {}
  }
}
class Trie {
  constructor(){
    this.children = {}
    this.isWord = false
  }
  
  insert(word) {
    // traveler ?
    let currentNode = this
    for (let i = 0; i < word.length; i++) {
        const char = word[i]
        if (!currentNode.children[char]) {
            currentNode.children[char] = new Trie()
        }
        currentNode = currentNode.children[char]
    }
    currentNode.isWord = true
  }

  search(word) {
    let currentNode = this
    for (let i = 0; i < word.length; i++) {
        const char = word[i]
        if (!currentNode.children[char]) {
            return false
        }
        currentNode = currentNode.children[char]
    }
    return currentNode.isWord
  }

  startsWith(prefix) {
    let currentNode = this
    for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i]
        if (!currentNode.children[char]) {
            return false
        }
        currentNode = currentNode.children[char]
    }
    return true
  }

  printWords() {
    // I need to go through each node's keys and each of those key's keys and append each one to the string until I reach the end
    // once I reach the end, I need to push the complete string into the words arr
    let words = []
    const search = (node, string) => {
      Object.keys(node.children).forEach((key => {
        console.log(key, node.isWord)
        if (node.isWord && Object.keys(node).length === 0) {
          words.push(string)
        } else if (node.isWord) {
          words.push(string)
          string+=key
          console.log("HEY+RE", key)
          search(node.children[key], string)
        } else {
          string+=key
          search(node.children[key], string)
        }
      }))
    }
    search(this, "")
    return words
  }
}

const trie = new Trie()
trie.insert("apple")
console.log(trie.search("apple"))
console.log(trie.search("app"))
console.log(trie.startsWith("app"))
trie.insert("app")
console.log(trie.search("app"))
console.log(trie.printWords())