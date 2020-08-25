// //given a list of cities
// //and weights between those cities
// //find the shortest path for a salesperson to travel

// class Graph {
//   constructor(v) {
//     this.matrix = []
//     for(let i = 0; i < v; i++) {
//       this.matrix[i] = []
//       for(let j = 0; j < v; j++) {
//         this.matrix[i][j] = 0
//       }
//     }
//   }
  
//   addEdge = (v,w, weight) => {
//     this.matrix[v][w] = weight
//   }
  
//   showGraph = () => {
//     console.log("MATRIX", this.matrix)
//   }
  
//   getGraph = () => {
//     return this.matrix
//   }
// }
  
// const graph = new Graph(4)
// graph.addEdge(0,1,16)
// graph.addEdge(0,2,11)
// graph.addEdge(0,3,6)
// graph.addEdge(1,0,8)
// graph.addEdge(1,2,13)
// graph.addEdge(1,3,16)
// graph.addEdge(2,0,4)
// graph.addEdge(2,1,7)
// graph.addEdge(2,3,9)
// graph.addEdge(3,0,5)
// graph.addEdge(3,1,12)
// graph.addEdge(3,2,2)
// graph.showGraph()

// const matrix = graph.getGraph()

// const permArr = []
// const usedChars = []

// const permute = (input) => {
//   let i, ch;
//   for (i = 0; i < input.length; i++) {
//     ch = input.splice(i, 1)[0]
//     usedChars.push(ch)
//     if (input.length == 0) {
//       permArr.push(usedChars.slice())
//     }
//     permute(input)
//     input.splice(i, 0, ch)
//     usedChars.pop()
//   }
//   return permArr
// }

// const travelingSalesperson = () => { 
//   const cities = [1,2,3]
//   const allCities = permute(cities)
//   const permutations = allCities.length
//   let minimumPath = []
//   let minimumCost = Number.MAX_VALUE
//   for(let i=0;i<permutations;i++){
//     // [1, 2, 3]
//     // [1, 3, 2]
//     // [2, 1, 3]
//     // [2, 3, 1]
//     // [3, 1, 2]
//     // [3, 2, 1]
//     let currentCost = 0
//     let source = 0
//     const destination = 0
//     for(let j=0; j<cities.length+1; j++){
//       if(j == cities.length){
//         currentCost = currentCost + matrix[allCities[i][j-1]][destination] 
//       } else {
//         currentCost = currentCost + matrix[source][allCities[i][j]] 
//       }
//       source = allCities[i][j]
//     }

//     if(currentCost < minimumCost) {
//       minimumCost = currentCost
//       minimumPath = allCities[i]
//     }
//   }
//   minimumPath.push(0)
//   minimumPath.unshift(0)
//   return minimumPath
// }

// travelingSalesperson()

const permute = (input) => {
  let i, ch;
  
  for (i = 0; i < input.length; i++) {
    console.log("WHAT INDEX?", i)
    ch = input.splice(i, 1)[0]
    console.log("WHAT CHARACTER REMOVED?", ch)
    usedChars.push(ch)
    console.log("WHAT USED CHARACTERS?")
    if (input.length == 0) {
      permArr.push(usedChars.slice())
    }
    permute(input)
    input.splice(i, 0, ch)
    usedChars.pop()
  }
  console.log(permArr)
  return permArr
}