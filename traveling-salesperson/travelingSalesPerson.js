//given a list of cities
//and weights between those cities
//find the shortest path for a salesperson to travel

// what I need to do is determine what is the minimum path from starting point 0
// there are many paths that I can take
// I can take 0 -> 1 -> 2 -> 3 -> 0 or 0 -> 3 -> 2 -> 1 -> 0
// 1 -> 2 -> 3 -> 4 -> 5
// 1 -> 2
// this.matrix[1][2]
// min(w(i,j) + g(j, {s-j})
// g(0, {1,2,3})
// min(w(0,1) + g(1, {2,3})),
// w(0,2) + g(2, {1,3})),
// w(0,3) + g(3, {1,2}))
// g(1, {2,3}))
// min(w(1,2) + g(2, {3})),
// w(1,3) + g(3, {2})
// g(2, {3})
// min(w(2,3) + g(3, 0))
// RECURSION
class Graph {
  constructor(v) {
    this.matrix = []
    for(let i = 0; i < v; i++) {
      this.matrix[i] = []
      for(let j = 0; j < v; j++) {
        this.matrix[i][j] = 0
      }
    }
  }
  
  addEdge = (v,w, weight) => {
    this.matrix[v][w] = weight
  }
  
  showGraph = () => {
    console.log("MATRIX", this.matrix)
  }
  
  getGraph = () => {
    return this.matrix
  }
}
  
const graph = new Graph(4)
graph.addEdge(0,1,16)
graph.addEdge(0,2,11)
graph.addEdge(0,3,6)
graph.addEdge(1,0,8)
graph.addEdge(1,2,13)
graph.addEdge(1,3,16)
graph.addEdge(2,0,4)
graph.addEdge(2,1,7)
graph.addEdge(2,3,9)
graph.addEdge(3,0,5)
graph.addEdge(3,1,12)
graph.addEdge(3,2,2)
graph.showGraph()

const matrix = graph.getGraph()

const permArr = []
const usedChars = []

const permute = (input) => {
  let i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0]
    usedChars.push(ch)
    if (input.length == 0) {
      permArr.push(usedChars.slice())
    }
    permute(input)
    input.splice(i, 0, ch)
    usedChars.pop()
  }
  return permArr
}

const travelingSalesperson = () => { 
  //if num of cities is n
  //determine permutations for n-1 cities
  const cities = [1,2,3]
  const allCities = permute(cities)
  const permutations = allCities.length
  //stores minimum path
  let minimumPath = []
  //minimum permutation stored
  let minimumCost = Number.MAX_VALUE
  //see how much each permutation costs us
//  [0, 16, 11, 6]
//  [8, 0, 13, 16]
//  [4, 7, 0, 9]
//  [5, 12, 2, 0]
  for(let i=0;i<permutations;i++){
    //determine if our current cost is lesser than the minimum cost
    //sourceCity = 0
    //excluding 0, how many paths are there to come back to 0
    //matrix with all weights
    // [1, 2, 3]
    // [1, 3, 2]
    // [2, 1, 3]
    // [2, 3, 1]
    // [3, 1, 2]
    // [3, 2, 1]
    let currentCost = 0//16+13+9+4
    let source = 0//3
    const destination = 0
    //the source has to change
    for(let j=0; j<cities.length+1; j++){
      if(j == cities.length){
        currentCost = currentCost + matrix[allCities[i][j-1]][destination] 
      } else {
        currentCost = currentCost + matrix[source][allCities[i][j]] 
      }
      source = allCities[i][j]
    }

    if(currentCost < minimumCost) {
      minimumCost = currentCost
      minimumPath = allCities[i]
    }
  }
  console.log("MINS", minimumCost, minimumPath)
  minimumPath.push(0)
  minimumPath.unshift(0)
  return minimumPath
}

travelingSalesperson()

  //MINIMUM OF DISTANCE FROM MY STARTING POINT TO ONE OF THE 3 OTHER POINT + EVERY POSSIBLE COMBINATION OF THE 2 LEFTOVER POINTS
  //0 1 2 3
  //0 -> 1 -> 2 -> 3 -> 0
  //0 -> 2 -> 1 -> 3 -> 0
  //0 -> 3 -> 2 -> 1 -> 0
  //.....
  // bestPath(0, {1, 2, 3})
  // min(
  //   distance(0,1) + bestPath(1, {2,3}),
  //   distance(0,2) + bestPath(2, {1,3}),
  //   distance(0,3) + bestPath(3, {1,2})
  // )
  // bestPath(1, {2,3})
  // min(
  //   distance(1,2) + bestPath(2, {3})
  //   distance(1,3) + bestPath(3, {2})
  // )
  // bestPath(2, {3})
  // min(
  //   distance(2,3) + distance(3, 0)
  // )
  // bestPath(3, {2})
  // min(
  //   distance(3, 2) + distance(2, 0)
  // )

  // bestPath(2, {1,3})
  // min(
  //   distance(2,1) + bestPath(1, {3}),
  //   distance(2,3) + bestPath(3, {1})
  // )
  // bestPath(1, {3})
