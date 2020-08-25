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

const adjList = new Map()

airports.forEach(airport => adjList.set(airport, []))
routes.forEach(route => {
  adjList.get(route[0]).push(route[1])
  adjList.get(route[1]).push(route[0])
})

const isPath = (source, destination) => {
  const queue = []
  const visited = new Set()
  let message = 'not found'
  queue.push(source)
  while (queue.length) {
    const currentCity = queue.shift()
    const cities =  adjList.get(currentCity)
    cities.forEach(city => {
      if (city === destination) message = `city ${destination} found from city ${source}`
      if (!visited.has(city)) {
        queue.push(city)
        visited.add(city)
      } 
    })
  }
  return message
}

const isDFSPath = (source, destination, visited = new Set(), prev = []) => {
  
  visited.add(source)
  if (source === destination) console.log(`city ${destination} found`)
  const cities = adjList.get(source)
  cities.forEach(city => {
    console.log("searching...")
    if (!visited.has(city)) isDFSPath(city, destination, visited)
  })
}

isDFSPath("JFK", 'LAX')