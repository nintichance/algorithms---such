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


const findCenter = (numOfNodes) => {
  // all the leaf nodes and their degrees
  const degree = new Array(numOfNodes).fill(0)
  const leaves = []

  // determine the leaves
  // determine the degree of each
  for (let i = 0; i < numOfNodes; i++) {
    degree[i] = adjancencyList.get(i).length
    if (adjancencyList.get(i).length === 0 || adjancencyList.get(i).length === 0) {
      leaves.push(i)
    }
  }
  let count = leaves.length

    //prune all the leaves
  while(count < numOfNodes){
    const newLeaves = []
    leaves.forEach(leaf => {
      adjancencyList.get().forEach(neighbor => {
        degree[neighbor] = degree[neighbor] - 1
        if (degree[neighbor] === 1) {
          newLeaves.push(neighbor)
        }
      })
      count+=newLeaves
      leaves = newLeaves
      console.log(leaves)
    })
    return leaves
  }
}

console.log(findCenter(nodes.length))