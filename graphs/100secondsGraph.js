//the data
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

//the matrix would be very sparse and filled with a lot of 0s
//an adjancency list works best here

//implement as a set of key, value pairs
//key is the name of the airport (node)
//value is an array of edges (other airports its connected to)
//a MAP is like a JS Object... The map tends to be a better option
//It has some additional API methods that can be useful for problems like this
//It also behaves more like a regular dictionary or hashmap

//the graph
const adjacencyList = new Map()

//Add node
//Represent a node on the graph
function addNode(airport) {
  //set the key, value pair with an empty arr as the value & airport (node) as the key
  adjacencyList.set(airport, [])
}

//Add edge, undirected
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination)
  adjacencyList.get(destination).push(origin)
}

//Create the graph 
airports.forEach(addNode)
routes.forEach(route => addEdge(...route))

console.log(adjacencyList)

//is there a route between PHX & BKK?
//use search algorithm to determine this