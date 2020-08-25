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

const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ')

const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK'],
]
// Time complexity of dfs & bfs is O(v+e) Nodes + Edges
// Linear Time!

const graph = new Graph
airports.forEach(airport => graph.addVertex(airport))
routes.forEach(route => graph.addEdge(route[0], route[1]))
const airportGraph = graph.getGraph()

const findLocationBfs = (source, destination) => {
  // is there a route from source to destination?
  const queue = []
  const visited = new Set()
  queue.push(source)

  while(queue.length) {
    const current = queue.shift()
    if (current === destination) return true
    const cities = airportGraph.get(current)
    console.log(cities)
    cities.forEach(city => {
      if (!visited.has(city)) queue.push(city)
    })
    visited.add(current)
  }
  return false
}

const findRouteDfs = (source, destination, visited = new Set) => {
  // is there a route from source to destination
  const cities = airportGraph.get(source)
  visited.add(source)

  for (const city of cities) {
    if (city === destination) {
      console.log('DFS found city', city)
      return
    }

    if (!visited.has(city)) {
      console.log('searching...')
      findRouteDfs(city, destination, visited)
    }
  }
}


const listAllPossibleRoutes = () => {
  // bfs is good for listing routes

}

// const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ')

(function test(){
  console.log(findRouteDfs('JFK', 'LAX'))
})()