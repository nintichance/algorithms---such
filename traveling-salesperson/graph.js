class Graph {
  constructor(v) {
    this.edges = 0
    this.vertices = v
    this.matrix = []

    for (let i = 0; i < this.vertices; i++) {
      console.log('ha')
      this.matrix[i] = []
      for (let j = 0; j < this.vertices; j++) {
        console.log('ppen')
        this.matrix[i][j] = 0
      }
    }
    console.log(this.matrix)
  }

  addEdge(vertex1, vertex2, weight) {
    this.matrix[vertex1][vertex2] = weight 
    this.edges++
  }

  getGraph() {
    return this.matrix
  }

  bfs() {
    const queue = []
    const visited = {}
    queue.push()
  }
}

(function test(){
  const graph = new Graph(4)
  graph.addEdge(0,1,16)
  graph.addEdge(0,2,11)
  graph.addEdge(0,3,6)
  graph.addEdge(1,0,8)
  graph.addEdge(1,2,13)
  graph.addEdge(1,3,16)
  graph.addEdge(2,0,4)
  graph.addEdge(2,1,7)
  graph.addEdge(2,3,9)
  graph.addEdge(3,0,5)
  graph.addEdge(3,1,12)
  graph.addEdge(3,2,2)
  console.log(graph.getGraph())
})()