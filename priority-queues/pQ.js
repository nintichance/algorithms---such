// binary heap
// use binary heap to implement 
// a complete binary tree is a tree in which every level, except possibly the last is completeely filled 
// all nodes are as far left as possible
// insertion point the heap at the bottom, left row
// use an array to represent the binary heap
// insertion position will be the last index of the array
// left child: 2x + 1
// right child: 2x + 2
// swimming, leveling up, 
// swap child element until the heap invariant is restored

class MinHeap {
  constructor() {
    this.heap = []
    this.count = 0
  }

  insert(value) {
    if (this.heap.length === 0) this.heap.push(value)
    this.heap.push(value)
    const child = this.heap.length - 1
    this.swim(child)
  }

  swim(child) {
    
    // grab index of parent node
    let parent = Math.min((child - 1)/2)
    
    while (child > 0 && this.heap[parent] > this.heap[child]) {
      this.swap(parent, child)
      child = parent

      parent = Math.min((index - 1)/2)
    }
  }

  swap(parent, child) {
    const temp = this.head[parent]
    this.heap[parent] = this.heap[child]
    this.heap[child] = temp
  }
}

const heap = new MinHeap()
heap.insert(1)
heap.insert(13)
heap.insert(4)
heap.insert(0)
heap.insert(10)

console.log(heap)

class PQ {
  constructor(elements = []) {
    this.heapSize = 0
    this.capacity = 0
    this.heap = []
    // this map is not necessary if you are not doing too many removals
    this.treeMap = new Map()

    // if you know all the heap elements
    // do below
    if (elements.length) {
      this.heapSize = elements.length 
      for (let i = 0; i < this.heapSize; i++) {
        this.heap[i] = elements[i]
        if (this.treeMap.has(elements[i])) {

        } else {
          this.treeMap.set(elements[i], [])
          this.treeMap.get(elements[i]).push(i)
        }
        
      }
      for (let i = Math.max(0, (this.heapSize/2)-1); i >= 0; i-) {
        sink(i)
      }
    }
  }

  isEmpty() {
    return this.heapSize === 0
  }

  clear() {
    for (let i = 0; i < heapCapacity; i++) {
      this.heap[i] = null
      this.heapSize = 0
      this.treeMap.clear()
    }
  }

  size() {
    return this.heapSize
  }

  peek() {
    if (this.isEmpty()) return null;
    this.heap[0]
  }

  poll() {
    return this.removeAt(0)
  }

  contains(elem) {
    if (elem === null) return false
    return this.treeMap.has(elem)
    // this would have been linear time
    // to loop through arr to find elem
    // but is now constant time
  }

  add(elem) {
    if (elem === null) console.log("please add a non-null item")

    if (this.heapSize < this.heapCapacity) {
      this.heap.push(elem)
    } else {
      this.heap.push(elem)
      this.heapCapacity++
    }

    mappAdd(elem, this.heapSize)
    swim(this.heapSize)
    this.heaepSize++
  }

  less(i, j) {
    const node1 = this.heap[i]
    const node2 = this.heap[j]
    if (node1 < node2) return true
  }

  swim(child) {
    let parent = Math.min((child-1)/2)

    while (child > 0 && this.less(child, parent)) {
      swap(parent, child)
      child = parent 
      parent = Math.min((child-1)/2)
    }
  }

  sink(child) {
    while (true) {
      const left = 2 * child + 1
      const right = 2 * child + 2
      let smallest = left // assume left is the smallest node of the two children

      if (right < this.heapSize && this.less(right, left)) smallest = right

      if ( left)
    }
  }

  removeAt() {

  }


}
