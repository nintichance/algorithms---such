const nodes = [0,1,2,3,4,5,6,7,8,9,10,11]

const edges = [
  [1, 0],
  [1, 4],
  [1, 3],
  [4, 5],
  [4, 8],
  [4, 6],
  [3, 6],
  [3, 7],
  [3, 2],
  [6, 9],
  [10, 3],
  [11, 10],
  [11, 1],
]

const adjacencyList = new Map()

nodes.forEach(node => {
  adjacencyList.set(node, [])
})

edges.forEach(edge => {
  adjacencyList.get(edge[0]).push(edge[1])
})

console.log(adjacencyList)

const topSort = () => {
  // I need to keep up with if nodes were visited
  // I need to keep up with the ordering of nodes
  // I need to search the depths of a particular node
  // Once I reach a leaf node, I need to back track, adding each leaf to the ordering arr
  const visited = new Set()
  const ordering = []
  nodes.forEach(node => {
    if (!visited.has(node)) dfs(node, visited, ordering)
  })
  return ordering
}

const dfs = (node, visited, ordering) => {
  // will traverse depth of each node
  visited.add(node)
  const edges = adjacencyList.get(node)
  edges.length && edges.forEach(edge => {
    if (!visited.has(edge)) dfs(edge, visited, ordering)
  })
  ordering.unshift(node)
}

console.log(topSort())

