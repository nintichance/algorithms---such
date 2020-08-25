//BEIATRIX

class Node {
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value)
    this.count = 1
  }

  size() {
    return this.count
  }

  insert(value) {
    this.count++
    let newNode = new Node(value)

    const searchTree = node => {
      //if value < node.value, go left
      if (value < node.value) {
        //if no node at left child, append newNode
        if(!node.left) {
          node.left = newNode
        //if existing node at left, search for empty left child
        } else {
          searchTree(node.left)
        }
        
      }
      //if value > node.value, go right
      else if (value > node.value) {
        //if no node at right child, append newNode
        if (!node.right) {
          node.right = newNode
          //if existing node at left, search for empty left child
        } else {
          searchTree(node.right)
        }
      }
    }
    searchTree(this.root)
  }

  min() {
    //traverse through the tree, only going left
    let currentNode = this.root
    while (currentNode.left) {
      currentNode = currentNode.left
    }
    return currentNode.value
  }

  max() {
    //traverse through the tree, only going right
    let currentNode = this.root
    while (currentNode.right) {
      currentNode = currentNode.right
    }
    return currentNode.value
  }

  //checks whether a value exists in the tree
  contains(value) {
    let currentNode = this.root
    // if (this.root === value) {
    //   return true
    // } else if (this.root.left === value) {
    //   return true
    // } else if (this.root.right === value) {
    //   return true
    // } else if(value> this.root.left) {
    //   this.contains(this.root.left)
    // } else {
    //   this.contains(this.root.right)
    // }
    while(currentNode) {
      if (value === currentNode.value){
        return true
      } 

      if(value < currentNode.value){
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
    return false
  }

  //       15
  //   3       36
  //2    12  28   39

  // depth first search
  // looks branch by branch


  // in-order
  // left, root, right
  // process the left node right, the root node, and then the right node for every subtree
  // then the print out in order
  // 2,3,12,15,28,36,39
  dfsInOrder() {
    let result = []

    // nested recursive function (like insert)

    const traverse = node => {
      //if left child exists, go left again
      if (node.left) traverse(node.left)
      // capture root node value
      result.push(node.value)
      // if right child exist, go right again
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return result
  }

  // pre-order
  // root,left,right
  // process the root node, the left node, and then the right node
  // we expect to return the values
  // 15,3,2,12,36,28,39
  dfsPreOrder() {
    let result = []

    const traverse = node => {
      //capture root node
      result.push(node.value)
      //if left exist, call again
      if (node.left) traverse(node.left)
      //if right exist, call again
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return result
  }

  // post-order
  // left, right, root
  // process the left node, the right node, then the root
  // we expect to return
  // 2, 12, 3, 28, 39, 36, 15
  dfsPostOrder() {
    let result = []

    // nested recursive function (like insert)

    const traverse = node => {
      //if left child exists, go left again
      if (node.left) traverse(node.left)
      //if right child exist, go right again
      if (node.right) traverse(node.right)
      //push to result array
      result.push(node.value)
    }
    traverse(this.root)
    return result
  }

  // breadth first search
  // looks level by level

  //returns all the values by level
  bfs() {
    let result = []
    let queue = []

    //push root node into queue
    queue.push(this.root)

    while(queue.length) {
      let currentNode = queue.shift()
      result.push(currentNode.value)

      if (currentNode.left){
        queue.push(currentNode.left)
      }

      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    return result
  }
}

const bst = new BST(15)

bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)

console.log(bst)
console.log(bst.size())
console.log(bst.min())
console.log(bst.max())
console.log(bst.contains(2))
console.log(bst.contains(9))

  // DFS
  // in-order: 2,3,12,15,28,36,39
  console.log(bst.dfsInOrder())
  // pre-order: 15,3,2,12,36,28,39
  console.log(bst.dfsPreOrder())
  // post-order: 2, 12, 3, 28, 39, 36, 15
  console.log(bst.dfsPostOrder())

  // BFS
  console.log(bst.bfs())

  