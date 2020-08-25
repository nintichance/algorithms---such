class Graph {
  constructor() {
    this.vertices = []
    this.edges = []
    this.numberOfEdges = 0
  }

  addVertex(vertex) {
    this.vertices.push(vertex)
    this.edges[vertex] = []
  }

  removeVertex(vertex) {
    const index = this.vertices.indexOf(vertex)
    console.log(index, "HELLO")
    if (index >= 0) {
      this.vertices.splice(index, 1) // deletes the element at the index
    }

    // while there are eges for this vertex
    while (this.edges[vertex].length) {
      const adjacentVertex = this.edges[vertex].pop()
      this.removeEdge(adjacentVertex, vertex)
    }
  }

  addEdge(vertex1, vertex2) {
    this.edges[vertex1].push(vertex2)
    this.edges[vertex2].push(vertex1)
    this.numberOfEdges++
  }

  removeEdge(vertex1, vertex2) {
    const index1 = this.edges[vertex1] ? this.edges[vertex1].indexOf(vertex2) : -1
    const index2 = this.edges[vertex2] ? this.edges[vertex2].indexOf(vertex1) : -1

    if (index1 >= 0) {
      this.edges[vertex1].splice(index1, 1)
      this.numberOfEdges--
    }

    if (index2 >= 0) {
      this.edges[vertex2].splice(index2, 1)
    }
  }

  size() {
    return this.vertices.length
  }

  relations() {
    return this.numberOfEdges
  }

  print() {
    console.log(this.edges, '/n', this.vertices)
    console.log(this.vertices.map(vertex => {
      return `${vertex} => ${this.edges[vertex].join(', ').trim()}`
    }, this).join(' | '))
  }
}

(function test() {
  const graph = new Graph()
  graph.addVertex('Node1')
  graph.addVertex('Node2')
  graph.addVertex('Node3')
  graph.addVertex('Node4')
  graph.addEdge('Node1', 'Node2')
  graph.removeVertex('Node4')
  graph.removeEdge('Node1', 'Node2')
  graph.print()
  console.log("test")
})()

