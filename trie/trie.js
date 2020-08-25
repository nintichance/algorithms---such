// Trie Data Structure
// A special tree which stores associative ds like words
// Validate that a word is in a dictionary
// Each node represents one letter of a word
// The child nodes branch off when prefix is same, but letter are different

class Node {
  constructor() {
    this.keys = new Map()
    this.end = false
  }

  setEnd() {
    this.end = true
  }

  isEnd() {
    return this.end
  }
}

class Trie {
  constructor() {
    this.root = new Node()
  }

  add(input, node = this.root) {
    if (input.length === 0) {
      node.setEnd()
      return
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node())
      return this.add(input.substr(1), node.keys.get(input[0]))
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]))
    }
  }

  isWord(word) {
    let node = this.root
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false
      } else {
        node = node.keys.get(word[0])
        word = word.substr(1)
      }
    }
    return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false
  }

  print() {
    let words = []
    let search = (node, string) => {
      
      if (node.keys.size != 0) {
        console.log("JERE")
        //dfs
        const letters = node.keys.keys().foreach(element => {
          console.log(element)
        });
        console.log(letters)
        for (let i = 0; i < letters.length; i++) {
          const nextNode = letters[i]
          console.log(node.key.get(nextNode))
          search(node.keys.get(nextNode), string.push(nextNode))
        }

        if (node.isEnd()) {
          words.push(string)
        }
      } else {
        string.length > 0 ? words.push(string) : undefined
        return
      }
      
      // find the ends, push the word
    }
    search(this.root, '')
    return words.length > 0 ? words : null 
  }
}

const myTrie = new Trie()
myTrie.add('ball')
myTrie.add('bat')
myTrie.add('doll')
myTrie.add('dork')
myTrie.add('do')
myTrie.add('dorm')
myTrie.add('send')
myTrie.add('sense')
console.log(myTrie)
console.log(myTrie.isWord('doll'))
console.log(myTrie.isWord('dor'))
console.log(myTrie.isWord('dorf'))
console.log(myTrie.print())