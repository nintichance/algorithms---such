// many probleems in graph theory can bee reepresenteed using a grid
// grids are a form a implicit graph
// which means we can deetermine a node's neighbors based on our location within the graph

// once we have an adjacency list/matrix, we can run whatever specialized graph algorithm
// to solve our problem, such as shortest path, connected commponents... etc...

// transformations betweem graph representations can usualy be avoided 
// due to the structure of a grid

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

// DIRECTION VECTORS
// row vectors
// row vectors represent all the adjacent cells in a graph
// i.e. this.matrix[v][w]
// all adjacents are
// this.matrix[v][w + 1]
// this.matrix[v + 1][w]
// this.matrix[v][w - 1]
// this.matrix[v - 1][w]

// if diagonal adjaceents are allowed...
// this.matrix[v + 1][w + 1]
// this.matrix[v - 1][w - 1]
// this.matrix[v + 1][w - 1]
// this.matrix[v - 1][w + 1]

// row vectors makes it easy to access neighboring cells from the current row-column position:

// define the direction vectors for
// north, south, east, and west
const getNeighbors = () => {
  dr = [-1, +1, 0, 0]
  dc = [0, 0, -1, +1]
  
  for(let i = 0; i < 4; i++) {
    const rr = r + dr[i]
    const cc = c + dc[i]
    //skip invalid cells
    // r & c are num of rows and columns
  
    if (rr < 0 || cc < 0) continue
    if (rr >= r || cc >= c) continue
  }  
}

//Dungeon Problem Statement
// You are trapped in a 2D dungeon and need to find the quickest way out!
// The dungeon is composed of unit cubes, which may or may not be filled with rock.
// It takes one minute to move one unit noth, south, east, west.
// You cannot move diagonally
// And the maze is surrounded by solid rock on all sides
// Is escape possible?
// If yes, how long will it take?
// the dugneon is a grid of size r x c
// you start at cell 'S'
// there is an exit at cell 'E'
// a cell full of rock is indicated by a '#' 
// empty cells are represented by a '.'

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

// [
//   ['S', '.', '.','#', '.', '.', '.'],
//   ['.', '#', '.', '.', '.', '#','.'],
//   ['.', '#', '.', '.', '.', '.', '.'],
//   ['.', '.', '#', '#', '.', '.', '.'],
//   ['#', '.', '#', 'E', '.', '#', '.']
// ]

// do a bfs from the start node
// until we reach the end node
// count the number of cells we've traversed in that process

// visit start node and add to the queue
// then visit adjacent cells and add them to the queue (if they haven't been visited)
// avoid any rock cells '#'

                                                      //        g.matrix[0][0] 
                                                      // g.matrix[0][1] g.matrix[1][0] 
                                                    // g.matrix[0][2]    g.matrix[2][0] 
                                                  // g.matrix[1][2]        g.matrix[3][0] 
                                    // g.matrix[1][3]  g.matrix[2][2]          g.matrix[3][1] 
                    // g.matrix[2][3]  g.matrix[1][4]         !g.matrix[2][3]                    g.matrix[4][1] (dead end) 
            // g.matrix[2][4]                !g.matrix[2][4] g.matrix[0][4]                                                       
                // g.matrix[2][5]           g.matrix[3][4]                      g.matrix[0][5] 
// g.matrix[2][6](DE) g.matrix[3][5] confused     g.matrix[4][4]              g.matrix[0][6] (DE) 
//g.matrix[4][3] REACHED END!

// after we've found the end, we know how many steps it takes to get from S to E
// finding the path, you will need to keep track of the previously visited node for each node

// ALTERNATIVE STATE REPRESENTATION
// So far, we have been storing the next x-y position
// in the queue as an (x, y) pair
// this works well but requires either an array or
// an object wrapper to store the coordinate values
// in practice, this requires a lot of packing and unpacking 
// of values to and from the queue

// let's take a look at an alternative approach 
// which also scales well in higher dimensions and
// requies less setup effort

// alternative approach is to use one queue for
// each dimension, so in a 3D grid,
// you would have one queue for each of the x, y, & z 
// dimensions
// enqueuing (x, y, z)
// enqueue and dequeue elements from each of the queues

// PSUEDOCODE
// global/class scape variables
// r, c = #r = num of rows, c = num of columns
// m = ... #input character matrix of size rXc
// sr, sc = #'S' symbol row and column values
// rq, cq = #empty row queue and column queue

// variables used to track the num of steps taken
// moveCount = 0
// nodesLeftInLayer
// nodesInNextLayer = 0

// variable used to track whether the 'E' character
// ever gets reached during the BFS
// reachedEnd = false

// R X C matric of false values used to trach whether
// the node at position (i, j) has been visited
// visited = ...

// north, south, east, west direction vectors
// [-1, +1, 0, 0]
// [0, 0, -1, +1]

class Queue {
  constructor() {
    this.storage = {}
    this.head = 0
    this.tail = 0
    this.count = 0
  }

  enqueue(element) {
    this.head++
    this.count++
    this.storage[this.head] = element
  }

  dequeue() {
    this.tail++ 
    const itemToRemove = this.storage[this.tail]
    delete this.storage[this.tail]
    return itemToRemove
  }

  size() {
    return this.count
  }
}

const dungeonSolution = () => {
  const sr = 0,
        sc = 0,
        rq = new Queue(),
        cq = new Queue(),
        visited = new Graph(5,7,0).matrix//how to do?
  let reachedEnd = false,
      nodesLeftInLayer = 0,
      nodesInNextLayer = 0,
      moveCount = 0
  rq.enqueue(sr)
  cq.enqueue(sc)
  visited[sr][sc] = true
  // or cq.size()
  while (rq.size()) {
    r = rq.dequeue()
    c = cq.dequeue()

    if (g.matrix[r][c] === 'S') {
      reachedEnd = true
      break
    }
    nodesInNextLayer = exploreNeighbors(r, c, visited, nodesInNextLayer, rq, cq)
    nodesLeftInLayer && nodesLeftInLayer--

    // used to track num of steps 
    // everytime we've finished a layer of nodes
    // we increment the amount of steps taken
    // we keep track of the number of layers in each node
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

const exploreNeighbors = (
  r, 
  c, 
  visited, 
  nodesInNextLayer,
  rq,
  cq
  ) => {
  const dr = [-1, +1, 0, 0],
        dc = [0, 0, -1, +1]
  for (let i = 0; i < 4; i++) {
    const rr = r + dr[i]
    const cc = c + dc[i]

    // skip out of bounds locations
    if (rr < 0 || cc < 0) continue
    if (rr >= 4 || cc >=6) continue //if its greater than rows or columns
    rq.enqueue(rr)
    cq.enqueue(cc)
    visited[rr][cc] = true
    nodesInNextLayer++
  }
  return nodesInNextLayer
}

console.log(dungeonSolution())