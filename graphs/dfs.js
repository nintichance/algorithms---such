// DFS Depth First Search
// instead of going through all the children or destinations for each airport
// we'll go to its first child, and then its first child, and then its first child
// and so on until we hit Bangkok
// if we don't find it, we'll back track to the top to see if wee find it

// this time we will use recursion over a queue

// takes the starting point and a set
// set keeps track of the different cities we visited
// we don't want to visit same node more than once

function dfs(start, visited = new Set()) {
  //a function that calls itself until it reaches some sort of a stopping point
  console.log(start)
  visited.add(start)

  const destinations = adjacencyList.get(start)

  for (const destination of destinations) {
    if (destination === 'BKK') {
      console.log(`DFS found Bangkok in steps`)
      return
    }

    if (!visited.has(destinations)) {
      console.log(`DFS found Bangkok in steps`)
      dfs(destination, visited)
    }
  }
}

dfs('PHX')

//What is the time complexity
//O(V + E) for both dfs & bfs
//Total number of nodes + edges
//Scale in linear time