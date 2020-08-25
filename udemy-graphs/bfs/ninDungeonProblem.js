class Graph {
  constructor(v, w, fillValue = '.') {
    this.v = v
    this.w = w
    this.matrix = []

    for (let i = 0; i < v; i++){
        this.matrix[i] = []
      for (let j = 0; j < v; j++){
        this.matrix[i][j] = fillValue
      }  
    }
  }

  addBlock(v, w) {
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
    this.count = 0;
  }

  enqueue(element) {
    this.storage[this.tail] = element
    this.tail++
    this.count++
  }

  dequeue(){
    if (this.count) {
      const itemToDelete = this.storage[this.head]
      delete this.storage[this.head]
      this.head++
      this.count--
      return itemToDelete
    } else {
      console.log("Please add to queue before dequeing")
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
      visited = new Graph(5, 7, 0)
      prev = new Array(g.v*g.w).fill(null)

const solve = (startingRow, startingCol) => {
  let reachedEnd = false,
      nodesLeftInLayer = 0,
      nodesInNextLayer = 0,
      moveCount = 0

      rowQueue.enqueue(startingRow)
      colQueue.enqueue(startingCol)

      while(rowQueue.size()) {
        const row = rowQueue.dequeue()
        const col = colQueue.dequeue()

        if (g.matrix[row][col] === 'E') {
          reachedEnd = true
          break
        }

        nodesInNextLayer = exploreNeighbors(row, col)
        nodesLeftInLayer && nodesLeftInLayer--

        if (nodesLeftInLayer === 0) {
          nodesLeftInLayer = nodesInNextLayer
          nodesInNextLayer = 0
          moveCount++
        }

        if (reachedEnd) {
          return moveCount
        }

        return -1
      }
}

const exploreNeighbors = (row, col, nodesInNextLayer) => {
  const rowNeighbors = [-1, +1, 0, 0]
  const colNeighbors = [0, 0, -1, +1]

  for (let i = 0; i < 4; i++) {
    const currentRow = row + rowNeighbors[i]
    const currentCol = col + colNeighbors[i]

    if (currentRow < 0 || currentCol < 0) continue
    if (currentRow >= g.v || currentCol >= g.w) continue
    if (g.matrix[currentRow][currentCol] === '#') continue

    rowQueue.enqueue(currentRow)
    colQueue.enqueue(currentCol)
    visited.matrix[currentRow][currentCol] = true
    nodesInNextLayer++
  }
  return nodesInNextLayer
}

console.log("RESULT", solve(0,0))
