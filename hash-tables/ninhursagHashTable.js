const hash = (key, size) => {
  let hashedKey = 0
  for(let i = 0; i < key.length; i++){
    hashedKey+= key.charCodeAt(i)
  }
  return hashedKey % size
}

class HashTable{
  constructor(size){
    this.size = size
    this.buckets = []

    for(let i = 0; i < this.size; i++){
      this.buckets[i] = []
    }
  }

  insert(key, value){
    const idx = hash(key, this.size)
    this.buckets[idx].push([key, value])
  }

  search(key){
    const idx = hash(key, this.size)
    if (this.buckets[idx].length > 1){
      return this.buckets[idx].find(item => {
        if (item[0] === key) {
          return item[1]
        }
      })
    } else {
      return this.buckets[idx][0][1]
    }
  }

  remove(key){
    const idx = hash(key, this.size)
    let itemToRemove = 0
    if (this.buckets[idx].length > 1){
       this.buckets[idx].forEach((item, index) => {
        if (item[0] === key) {
          itemToRemove = index
        }
      })
    } 
    this.buckets[idx].splice(itemToRemove, 1)
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