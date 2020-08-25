const nodes = [0,1,2,3,4,5,6,7,8,9]

const edges = [
  [1, 0],
  [1, 4],
  [1, 3],
  [4, 5],
  [4, 8],
  [3, 6],
  [3, 7],
  [3, 2],
  [6, 9],
]

const adjancencyList = new Map()

nodes.forEach(node => adjancencyList.set(node, []))
edges.forEach(edge => {
  adjancencyList.get(edge[0]).push(edge[1])
  adjancencyList.get(edge[1]).push(edge[0])
})


const topSort = () => {
  // I want to randomly choose a node in the graph
  // Then I want to do a dfs on all its nodes
  // I want to continue doing this until all the nodes have been visited
  // in the dfs, I want to pass in the order and the ordering to list out these nodes
  const numOfNodes = nodes.length
  const visited = new Array(numOfNodes).fill(false)
  const ordering = []
  let order = numOfNodes - 1
  for (let i = 0; i < numOfNodes; i++) {
    if (visited[i] === false) {
      order = dfs(order, i, ordering, visited)
    }
  }
  return ordering
}

const dfs = (order, node, ordering, visited) => {
  visited[node] = true
  const edges = adjancencyList.get(node)
  edges.forEach(edge => {
    if (visited[edge] === false) {
      order = dfs(order, node, ordering, visited)
    }
  })
  ordering[order] = node
  return order - 1
}
console.log(topSort())