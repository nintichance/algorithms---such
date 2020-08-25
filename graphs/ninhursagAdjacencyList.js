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
const adjacencyList = new Map()
airports.forEach(airport => adjacencyList.set(airport, []))
routes.forEach(route => {
  adjacencyList.get(route[0]).push(route[1])
  adjacencyList.get(route[1]).push(route[0])
})
console.log(adjacencyList)
// is there a path between two 
const isRoute = (source, destination) => {
  const queue = []
  const visited = new Set()
  queue.push(source)
  visited.add(source)

  while(queue.length) {
    const curr = queue.shift()
    if (curr === destination) return true
    adjacencyList.get(curr).forEach((loc)=>{
      if(!visited.has(loc)){
        queue.push(loc)
        visited.add(loc)
      }
    })
  }

  return false
}

// console.log(isRoute('JFK', 'LAP'))
const isDfsRoute = (source, destination, visited = new Set, path) => {
  visited.add(source)
  adjacencyList.get(source).forEach(loc => {
    if (loc === destination) {
      console.log(`Airport ${destination} found`)
      return
    }
    if (!visited.has(loc)) {
      console.log("...searching")
      isDfsRoute(loc, destination, visited)
    }
  })
}
// console.log(isDfsRoute('JFK', 'LAX'))

// const shortestPath = (source, destination) => {
//   const result = []
//   // dfs
//   // determine which way is the shortest path (least number of traversals between a source city & a destination)
  
// }