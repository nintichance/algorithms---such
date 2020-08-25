const hash = (key, size) => {
  let hashedKey = 0
  for(let i = 0; i < key.length; i++){
    hashedKey = key.charCodeAt(i)
  }
  return hashedKey % size
}

class HashTable {
  constructor(){
    this.size = 20
    this.buckets = []

    for (let i = 0; i < this.size; i++) {
      this.buckets.push([])
    }
  }

  insert(key, value) {
    const index = hash(key, this.size)
    this.buckets[index].push({[key]: value})
  }

  remove(key) {
    const index = hash(key, this.size)
    let keyToDelete = 0
    let deletedItem
    if (this.buckets[index].length > 1) {
      keyToDelete = this.buckets[index].find((item, index) => {
        if (item.hasOwnProperty(key)) index
      })
    } else {
      deletedItem = this.buckets[index][0]
    }
    
    this.buckets[index].splice(keyToDelete, 1)
    return deletedItem
  }

  search (key) {
    const index = hash(key, this.size)
    if (this.buckets[index].length > 1) {
       return this.buckets[index].find(item => {
        if (item.hasOwnProperty(key)) {
          return item[key]
        }
      })[key]
    } else {
      return this.buckets[index][0][key]
    }
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
// hashTable.remove('darien')
hashTable.remove('mina')

console.log(hashTable)