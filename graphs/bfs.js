//BFS Breadth First Search

//need a starting node first (PHX)
//then visit all the children of that node to see if any of the nodes are BKK
//if not, check each child node to see if they are connected to BKK
//we can represent this process as a queue
//a queue in JS is an arr where the first item in is the first item out
//the first item would be the starting node (PHX)

function bfs(start) {
  const visited = new Set()
  const queue = [start]
  //while the queue has items in it, we will grab the first item in the array

  while (queue.length > 0) {
    const airport = queue.shift() // grabs first item & mutates the original arr by removing the first item

    //grab all the edges for this node
    //we are given all it's children so we can loop over them and add them to the queue
    const destination = adjacencyList.get(airport)

    //airports have many interconnected routes
    //our algorithm will be visiting the same nodees over & oveer
    //this creaetes an infinite loop
    //we can avoid this by using a set in order to keep up with the airports we've visited in the past
    //bc sets are only unique values, we can use them to to keep up with visited airports
    //only add an airport to the queue if it's not been visited
    
    if (destination === 'BKK') {
      console.log("found Bangkok")
    }

    //not visited? add to queue
    if(!visited.has(destination)){
      visited.add(destination)
      queue.push(destination)
    }

    //BFS is great for finding all the possible routes to find which route is most efficient
    //But our only concern is if there IS a route that exist
    //We don't care if there are multiple routes, we don't care which is most efficient, we just want to find A route
    //How can you traverse it in a more efficient way to meet this need
  }
}