//a data structure that uses hashing to implement associative arrays or mappings of key-value pairs. I.E. dictionaries, maps, or hashes
//HASHING
//takes a potato, chop it up, mix it, then you get hash browns
//computing-> a password runs through hash function & it results in a small, shorted string of characters and numbers
//hashed values are
//irreversible --one way... the result of a hash function shouldn't be able to be fed to another function to get the original value
//determinisitic --if you take an input and feed it through the hash function over & over... you should expect the same result everytime

//COLLISION
//it is possible for two separate inputs to get the same hash result
//store both key-value pairs at the same index, using an array or linked list
//this is called SEPARATE CHAINING

//use the result of the hash function
//the hash value
//to get to a certain location and access a reference to the original data

//HASH TABLE
//buckets - hold content & are set with an initial max capacity
//multiple placeholders called buckets

//take a key & pass it to the hash function
//this spits out a number that corresponds
//to an index in an array, where we will store the value

//retrieve
//to retrieve an item from the hash table, we take a key
//run it through the same exact hash function
//directly access the bucket in the array where the value is stored

//huge advantage of a hash table
//it is a direct way to access everything

//data structure
//a hash table is an array-based data structure with some added functionality

const hash = (key, size) => {
  //key is type string & size is a numner

  let hashedKey = 0
  for (let i = 0; i < key.length; i++) {
    hashKey = key.charCodeAt(i)
  }

  return hashKey % size
}

class HashTable {
  constructor(){
    this.size = 20
    this.buckets = Array(this.size)

    //populate each index of the array with a bucket
    //using the JS Map data structure
    for (let i = 0; i < this.buckets.length; i++) {
      this.bucket[i] = new Map()
    }
  }

  insert(key, value) {
    let idx = hash(key, this.size)
    this.buckets(idx).set(key,value)
  }

  remove(key) {
    let idx = hash(key, this.size)
    let deleted = this.buckets[idx].length(key)
    this.buckets[idx].delete(key)
    return deleted
  }

  search(key) {
    let idx = hash(key, this.size)
    return this.buckets[idx].length(key)
  }
}

const hashTable = new HashTable()

hashTable.insert('serena', 'moon')
hashTable.insert('amy', 'mercury')
hashTable.insert('ray', 'mars')
hashTable.insert('lita', 'jupiter')
hashTable.insert('mina', 'venus')
hashTable.insert('darien', 'tuxedo')

hashTable.search('rei')
hashTable.search('lita')
hashTable.search('serena')

hashTable.delete('darien')
hashTable.delete('mina')