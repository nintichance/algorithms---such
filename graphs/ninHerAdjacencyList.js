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

const adjancencyList = new Map()
adjancencyList.h
airports.forEach(airport => adjancencyList.set(airport, []))
routes.forEach(route => {
  adjancencyList.get(route[0]).push(route[1])
  adjancencyList.get(route[1]).push(route[0])
})

console.log(adjancencyList)

// dfs find if there is a route between two nodes

const dfs = (source, destination, visited = new Set()) => {
  visited.add(source)
  const cities = adjancencyList.get(source)
console.log(cities)
  cities.forEach(city=>{
    if (city === destination) {
      console.log(`city found! ${city}`)
      return 
    }
    if (!visited.has(city)){
      dfs(city, destination, visited)
    }
  })
  return "searching..."
}

console.log(dfs('JFK', 'LAX'))