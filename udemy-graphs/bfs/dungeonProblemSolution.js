/** [
  ['S', '.', '.', '#', '.', '.','.'],
  ['.', '#', '.', '.', '.', '#','.'],
  ['.', '#', '.', '.', '.', '.','.'],
  ['.', '.', '#', '#', '.', '.','.'],
  ['#', '.', '#', 'E', '.', '#', '.']
] **/
class Graph {
  constructor(v, w, fillValue = '.') {
    this.v = v
    this.w = w
    this.matrix = []

    for (let i = 0; i < this.v; i++) {
      this.matrix[i] = []
      for(let j = 0; j < this.w; j++) {
        this.matrix[i][j] = fillValue
      }
    }
  }

  addBlock(v,w) {
    this.matrix[v][w] = '#'
  }

  showGraph() {
    console.log(this.matrix)
  }
}

class Queue {
  constructor() {
    this.storage = {}
    this.tail = 0
    this.head = 0
    this.count = 0
  }

  enqueue(element) {
    this.storage[this.tail] = element
    this.tail++
    this.count++
  }

  dequeue() {
    if (this.count) {
      const dequeued = this.storage[this.head]
      delete this.storage[this.head]
      this.head++
      this.count--
      return dequeued
    } else {
      console.log("please add to the queue before attempting to dequeue")
    }
  }

  size() {
    return this.count
  }
}


const g = new Graph(5,7)
g.addBlock(0,3)
g.addBlock(1,1)
g.addBlock(1,5)
g.addBlock(2,1)
g.addBlock(3,2)
g.addBlock(3,3)
g.addBlock(4,0)
g.addBlock(4,2)
g.addBlock(4,5)
g.matrix[0][0] = 'S'
g.matrix[4][3] = 'E'
g.showGraph()

const rowQueue = new Queue(),
colQueue = new Queue(),
visited = new Graph(5,7,0)
prev = new Array(g.v*g.w).fill(null)
console.log("PREV", prev)
// keep track of previously visited node to reconstruct graph!
const solve = (startingRow, startingCol) => {
  let reachedEnd = false,
      nodesLeftInLayer = 0,
      nodesInNextLayer = 0,
      moveCount = 0

  rowQueue.enqueue(startingRow)    
  colQueue.enqueue(startingCol) 


  while (rowQueue.size()) {
    const row = rowQueue.dequeue()
    const col = colQueue.dequeue()
    if (g.matrix[row][col] === 'E') {
      console.log("END?", row, col)
      reachedEnd = true
      break
    }
    nodesInNextLayer = exploreNeighbors(row, col)
    nodesLeftInLayer &&  nodesLeftInLayer--

    if (nodesLeftInLayer === 0) {
      nodesLeftInLayer = nodesInNextLayer
      nodesInNextLayer = 0
      moveCount++
    }
  }
  if (reachedEnd) {
    return moveCount
  }
  return -1
}

const exploreNeighbors = (row, col, nodesInNextLayer) => {
  const rowNeighbors = [-1, +1, 0, 0]
  const colNeighbors = [0, 0, -1, +1]

  for (let i = 0; i < 4; i++) {
    const rowNeighbor = row + rowNeighbors[i]
    const colNeighbor = col + colNeighbors[i]
    
    //skips out of bounds locations
    if (rowNeighbor < 0 || colNeighbor < 0) continue
    if (rowNeighbor >= g.v || colNeighbor >= g.w) continue
    
    // skip explored neighbors
    if (visited.matrix[rowNeighbor][colNeighbor]) continue
    if (g.matrix[rowNeighbor][colNeighbor] === '#') continue
    // prev.push([row, col]) 
    // console.log(prev) CAN I FIGURE OUT RECONSTRUCT WITH SAID INFO?
    rowQueue.enqueue(rowNeighbor)
    colQueue.enqueue(colNeighbor)
    visited.matrix[rowNeighbor][colNeighbor] = true
    nodesInNextLayer++
  }
  return nodesInNextLayer
}

// const reconstructPath = (start, end, prev) => {
//   path = []
//   const i = end
//   // prev was initialized with all null values, so some nodes may not show up in the prev arr
//   // until a value is null or whil eit is not null
//   // continue traversing from end to start
//   while (prev[i]) {
//     path.push(prev[i])
//     i--
//   }
//   // bc from end to start, reverse to get path
//   path.reverse()

//   // if start isn't in path, then the garph is disjoint
//   // and there is not path from start to end
//   if (path[0] == start) {
//     return path
//   }

//   return []
// }

// reconstructPath([0,0], [4,3])

console.log("RESULT", solve(0,0))