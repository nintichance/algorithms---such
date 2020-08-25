const hashIt = (key, size) => {
  let result = 0

  for (let i = 0; i < key.length; i++) {
    result+=key[i].charCodeAt(i)
  }
  return result%size
}

class HashTable {
  constructor(size) {
    this.size = size
    this.buckets = []

    for (let i = 0; i < this.size; i++) {
      this.buckets[i] = []
    }
  }

  insert(key, value) {
    const hashedKey = hashIt(key)
    this.buckets[hashedKey].push([key, value])
  }

  search(key) {
    const hashedKey = hashIt(key)
    if (this.buckets[hashedKey].length <= 1) {
      return this.buckets[hashedKey][0][1]
    } else {
      const result = this.buckets[hashedKey].find(item => {
        if (item[0] === key) {
          return item
        }
      })
      return result[1]
    }
  }

  remove(key) {
    const hashedKey = hashIt(key)
    let indexToRemove = 0
    if (this.buckets[hashedKey].length >= 1) {
      this.buckets[hashedKey].forEach((item, index) => {
        if (item[0] === key) {
          indexToRemove = index
        }
      })
    }
    this.buckets[hashedKey].splice(indexToRemove, 1)
  }
}

const hashTable = new HashTable(20)

hashTable.insert('serena', 'moon')
hashTable.insert('amy', 'mercury')
hashTable.insert('rei', 'mars')
hashTable.insert('lita', 'jupiter')
hashTable.insert('mina', 'venus')
hashTable.insert('darien', 'tuxedo mask')
console.log(hashTable.search('rei'))
console.log(hashTable.search('lita'))
console.log(hashTable.search('serena'))
hashTable.remove('darien')
hashTable.remove('mina')

console.log(hashTable)