
const hash = (key, size) => {
  let hashedKey = 0

  for(let i = 0; i<key.length;i++){
    hashedKey+= key.charCodeAt(i)
  }

  return hashedKey % size
}

class HashTable {
  constructor() {
    this.size = 20
    this.buckets = Array(this.size)

    for(let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map()
    }
  }

  insert(key, value) {
    const idx = hash(key, this.size)
    this.buckets[idx].set(key, value)
  }

  remove(key) {
    const idx = hash(key, this.size)
    const deleted = this.buckets[idx].get(key)
    this.buckets[idx].delete(key)
    return deleted
  }

  search(key) {
    const idx = hash(key, this.size)
    return this.buckets[idx].get(key)
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


console.log(hashTable)































//a hash table is a data structure that uses hashing to
//create associative arrays (or mappings of key-value pairs)
//dictionaries, maps, & hashes
//hashing
//hash is used in data structures, security, crytography...etc
//you can run a password through a hash function, which results in a small combo of characters
//hash functions are irreversible
//if you put a hashed input through another function
//you should never be able to get the original value
//hash functions are deterministic
//if you take an input anf feed it through a hash function over and over again
//you should get the same result each time
//however, some inputs can result in the same hash
//this is called a collision
//you can store both key-value pairs at that same input
//and store it in a list like a linked list or an array
//this is called separate chaining
//the ability to use hashing is integral to the hash table data structure
//you can use the result of the hash function
//the hash value
//to get to a certain location and access a reference
//to the original data
//a hashtable begins with multiple placeholders called buckets
//they are often set with an initial max capacity
//to add a key-value pair into a hash table
//we take a key and pass it through the hash function
//which outputs a number that corresponds to an index in an array
//where we will store the value
//to retrieve the item from the hash table, we take a key
//run it through the same exact hash function
//and directly access that bucket in the array where the value is stored
//direct access, no matter how large the hash table gets, there is no traversing
//it is a very efficient way to add and lookup values