class Graph {
  constructor() {
    this.edges = 0
    this.vertices = 0
    this.adjacencyList = new Map 
  }  

  addVertex(vertex) {
    this.adjacencyList.set(vertex, [])
    this.vertices++
  }
  
  addEdge(vertex1, vertex2) {
    this.adjacencyList.get(vertex1).push(vertex2)
    this.adjacencyList.get(vertex2).push(vertex1)
  }

  getGraph() {
    return this.adjacencyList
  }
}
const graph = new Graph

// const n = number of nodes in graph 
// const g = adjacency list reepresenting unqeighted import { compose, graphql } from 'react-apollo'

// s = start node, e = end node, and 0 <= e, s < n
// return value is th shortest path of nodese from s to e 
// function bfs(s, e)

// do a bfs starting at node s 
// preev = solve(s)

// reconstruct the path from s to e
// rturn reconstructPath(s, e, prev)

const solve = (s) => {
  const queue = []
  // keeps up with visited nodes
  const visited = new Set()
  visited.add(s)

  // will heelp reconstruct shortest path
  const prev = new Array().fill(null)

  while(queue.length) {
    const node = queue.shift()
    const neighbors = graph.get(node)

    for (const neighbor in neighbors) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor)
        visited.add(neighbor)
        prev[neighbor] = node
      }
    }
  }
  return prev
}

const reconstructPath = (s, e, prev) => {
  // reconstruct path going backwards from ee
  const path = []
  // loop backwards from the end node and make our way back to the start node
  // initialized prv array with all nulls to know where the loop ends
  current = e
  while(current !== null) {
    path.push(current)
    current = prev[current]
  }
  for (let i = prev.length; i >= 0; i--) {
    if (prev[i] !== null) {
      path.push(i)
    }
  }

  path.reverse()

  if (path[0] == s) return path
  return []
}