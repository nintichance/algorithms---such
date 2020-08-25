/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

    // adjacency list --- list of edges in an arr
    // numCourses - numOfVerteces
    // [[0, 1]] means you must take course 1 before taking course 0
        // there is a directed edge from 1 to 0
    // [[1, 0]] means you must take course 0 before taking course 1
        // there is a directed edge from 0 to 1
    
    // [[1,0],[0,1]] means you must take course 0 before taking course 1 and you must take course 1 before taking course 0
        // there is an undirected edge from 0 to 1
    
    // is it possible to finish all courses
        // if there are no undirected edges, then yes
    
    // turn my list of edges into an adjacency matrix
    // my verteces will always be from 0 to numCourses - 1
    // if the i look at all the connections and they have a connection to the current node, then return false
    // otherwise return true

    var canFinish = function(numCourses, prerequisites) {
      const adjacencyList = new Map()
      const visited = new Set()
  
      for (let i = 0; i < numCourses; i++) {
          const connections = new Set()
          adjacencyList.set(i, connections)
      }
      
      for (let i = 0; i < prerequisites.length; i++) {
          adjacencyList.get(prerequisites[i][1]).add(prerequisites[i][0])
      }
      
      return dfs(prerequisites[0][1], adjacencyList, visited) === false ? false : true
  };
  
  
  const dfs = (node, adjacencyList, visited) => {
      const edges = adjacencyList.get(node)
      if (visited.has(node)) return false
      visited.add(node)
      
      edges.forEach(edge => {
         return dfs(edge, adjacencyList, visited)
      })
  }
  
  