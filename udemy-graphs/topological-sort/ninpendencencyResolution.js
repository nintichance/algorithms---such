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

const topSort = (nodes, edges) => {
  // if there is an edge from U to V, then U comes before V
  // any node with no incoming edges and no outgoing edges is a source
  // any node with only incoming edges is a sink
  // order goes from sources -> sinks
  const inDegree = new Map()
  adjancencyList = new Map()

  for (let i = 0; i < nodes.length; i++) {
    inDegree.set(i, 0)
    adjancencyList.set(nodes[i], [])
  }

  for (let i = 0; i < edges.length; i++) {
    const parent = edges[i][0],
          child = edges[i][1]
    adjancencyList.get(parent).push(child)
    inDegree.get(child)++
  }

  let queue = []

  inDegree.forEach(node => {
    console.log(node)
  })
}

topSort(nodes, edges)