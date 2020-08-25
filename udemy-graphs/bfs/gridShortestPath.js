// DUNGEON!!!
// grids are a form of implicit graph
// which means we can determine a nodee's neighbors based on location in graph
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