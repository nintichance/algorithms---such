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
//FIX TO NOT BE PSEUDO CODE LATER
const dfsConnectedComponents = () => {
  // fill in graph
  const g = new Graph(),
  numOfNodes = g.vertices,
  components = [],
  visited = new Set()
  let count = 0
  
  const findComponents = () => {
    for (let i = 0; i < numOfNodes; i++) {
      if (!visited.has(i)) {
        count++
        // we do a dfs for every unvisited node
        // we never revisit the same node more than once
        // we either skip over a node or do a dfs
        // if we do a dfs, we increment count to keep up with connected components

        dfs(i)
        return { count, components}
      }
    }
  }

  const dfs = (at) => {
    // we mark the node as visited
    visited.add(at)
    // set the node's value as the value of count
    // aka its connected component index
    components[at] = count
    // then iterate over everyone of its unvisited neighbors
    // recall this method to assign their connected component index
    g.adjList.get(at).forEach(adjacentNode => {
      if (!visited.has(adjacentNode)) {
        dfs(adjacentNode)
      }
    })
  }
  return findComponents()
}