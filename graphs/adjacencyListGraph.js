//My initial idea of an adjacency graph
//a graph is essentially a collection of vertices
//at a particular vertex, we will connect it to another vertex, forming edges
//TODO: figure out how to initialize an object in JS
class Graph{
  constructor(numberOfVertices){
    this.numberOfVertices = numberOfVertices
    this.graph = []
    this.numberOfEdges = 0
  }
  adjacenyListGraph(numberOfVertices){
    for(let i=0; i < numberOfVertices; i++){
      const setForVertex = new Set()
      this.graph[i] = setForVertex
    }
  }

  addEdge(v,w){
    if (v > this.numberOfVertices || w > this.numberOfVertices){
      console.log(`${v} or ${w} are greater than ${this.numberOfVertices} and are out of bounds. Please create an edge within bounds`)
      break
    }
    if(this.adjacenyListGraph[v] == undefined) {
      const setForV = new Set()
      this.adjacenyListGraph[v] = setForV
    }
    if (this.adjacenyListGraph[w] == undefined) {
      const setForW = new Set()
      this.adjacenyListGraph[w] = setForW
    }
    this.numberOfEdges+=1
    this.adjacenyListGraph[v].push(w)
    this.adjacenyListGraph[w].push(v)
  }

  degree(v){
    if(this.adjacenyListGraph[v] == undefined) { return 0 }
    this.adjacenyListGraph[v].size
  }

  maximumDegree(){
    const maximumDegree = {
      vertex: 0,
      degree: 0
    }
    for(let i=0; i<this.adjacenyListGraph.length; i++){
      if(this.degree(i) > maximumDegree.degree) {
        maximumDegree.degree = this.degree(i)
        maximumDegree.vertex = i
      }
    }
  }
  
  averageDegree(){
    this.graph.reduce((previousValue, currentValue)=>{
      return previousValue.size + currentValue.size
    })
  }
}
