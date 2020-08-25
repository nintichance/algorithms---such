class Graph {
  constructor() {
    this.vertices = 0
    this.edges = 0
    this.adjList = new Map()
  }

  addVertex(vertex) {
    this.adjList.set(vertex, [])
    this.vertices++
  }

  addEdge(v, w) {
    //if undirected, have both connections made
    this.adjList.get(v).push(w)
  }
}

//fill up graph data
const g = new Graph()
const numOfNodes = g.vertices

const bfs = (start, end) => {
  
}

const solve = (start) => {
  const queue = []
  queue.push(start)

  const visited = new Set()
  visited.add(start)

  const prev = new Array().fill(null) //size n (number of vertices I guess?)
  while (queue.length) {
    const node = queue.shift()
    const neighbors = g.adjList.get(node)

    for (let i = 0; i , neighbors.length; i++) {
      if (!visited,has(neighbors[i])) {
        queue.push(neighbors[i])
        visited.add(neighbors[i])
        prev[neighbors[i]] = node 
      }
    }
  }
  return prev
}

const reconstructPath = (start, end, prev) => {
  path = []
  const i = end
  // prev was initialized with all null values, so some nodes may not show up in the prev arr
  // until a value is null or whil eit is not null
  // continue traversing from end to start
  while (prev[i]) {
    path.push(prev[i])
    i--
  }
  // bc from end to start, reverse to get path
  path.reverse()

  // if start isn't in path, then the garph is disjoint
  // and there is not path from start to end
  if (path[0] == start) {
    return path
  }

  return []
}