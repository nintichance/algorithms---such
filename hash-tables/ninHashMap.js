const hash = (key, size) => {
  let hashedKey = 0

  for(let i = 0; i < key.length; i++) {
    hashedKey+=key.charCodeAt(i)
  }

  return hashedKey % size
}

class HashTable {
  constructor() {
    this.size = 20
    this.buckets = []

    for (let i = 0; i < this.size; i++) {
      const bucket = new Map()
      this.buckets.push(bucket)
    }
  }

  insert(key, value) {
    const index = hash(key, this.size)
    this.buckets[index].set(key, value)
  }

  remove(key) {
    const index = hash(key, this.size)
    const itemToRemove = this.buckets[index].get(key)
    this.buckets[index].delete(key)
    return itemToRemove
  }

  search(key) {
    const index = hash(key, this.size)
    return this.buckets[index].get(key)
  }
}

const hashTable = new HashTable()

hashTable.insert('serena', 'moon')
hashTable.insert('amy', 'mercury')
hashTable.insert('rei', 'mars')
hashTable.insert('lita', 'jupiter')
hashTable.insert('mina', 'venus')
hashTable.insert('darien', 'tuxedo mask')
console.log(hashTable.search('rei'))
console.log(hashTable.search('lita'))
console.log(hashTable.search('serena'))
console.log(hashTable.remove('darien'))
console.log(hashTable.remove('mina'))

console.log(hashTable)