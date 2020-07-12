class Node {
  constructor(value) {
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
    // we need to find the empty slot
    // we need to remember order
    const newNode = new Node(value)
    this.count++  
    const searchBST = (root) => {
      if (root.value > value) {
        if (root.left) {
          searchBST(root.left)
        } else {
          root.left = newNode
        }
      } else if (root.value < value) {
        if (root.right) {
          searchBST(root.right)
        } else {
          root.right = newNode
        }
      }
    }
    searchBST(this.root)
  }

  min(root = this.root) {
    let currentNode = root
    while(currentNode.left) {
      currentNode = currentNode.left
    }
    return currentNode.value
  }

  max(root = this.root) {
    let currentNode = root
    while(currentNode.right){
      currentNode = currentNode.right
    }
    return currentNode.value
  }

  contains(value) {
    let currentNode = this.root
    
    while(currentNode) {
      if (currentNode.value === value) {
        return true
      } else if (currentNode.value > value) {
        currentNode = currentNode.left
      } else if (currentNode.value < value) {
        currentNode = currentNode.right
      }
    }
    return false
  }

  delete(value) {
    //I want to find the value
    //then I want to delete it from the bst
    //If that node had children
    //set the left child to be the child of that node's parent
    //set the left child to be the parent of the right child

    //if that node did not have children
    //just set the parent left or right child to 0
    this.count--
    const searchBST = (root) => {
      if (root === null) return root
      if (root.value === value) {
        if(root.left === null && root.right === null) {
          root = null
        } else if (root.left === null) {
          root = root.right
        } else if (root.right === null) {
          root = root.left
        } else {
          const temp = this.max(root)
          root = temp
          searchBST(root.right)
        }
      } else if (root.value > value) {
        searchBST(root.left)
      } else if(root.value < value) {
        searchBST(root.right)
      }
    }
    searchBST(this.root)
  }

  // searches the branches
  // LE, RO, RI
  dfsInOrder() {
    const result = []

    const traverse = (root) => {
      if (root.left) traverse(root.left)
      result.push(root.value)
      if (root.right) traverse(root.right)
    }
    traverse(this.root)
    return result
  }

  // searches the branches
  // RO, LE, RI
  dfsPreOrder() {
    const result = []

    const traverse = (root) => {
      result.push(root.value)
      if (root.left) traverse(root.left)
      if (root.right) traverse(root.right)
    }
    traverse(this.root)
    return result
  }

  // searches the branches
  // LE, RI, RO
  dfsPostOrder() {
    const result = []

    const traverse = (root) => {
      if (root.left) traverse(root.left)
      if (root.right) traverse(root.right)
      result.push(root.value)
    }
    traverse(this.root)
    return result
  }

  // searches levels
  bfs() {
    const result = []
    const queue = []
    queue.push(this.root)
    while(queue.length) {
      const currentNode = queue.shift()
      result.push(currentNode.value)
      if (currentNode.left) queue.push(currentNode.left)
      if (currentNode.right) queue.push(currentNode.right)
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

// // DFS
// // in-order: 2,3,12,15,28,36,39
// console.log(bst.dfsInOrder())
// // pre-order: 15,3,2,12,36,28,39
// console.log(bst.dfsPreOrder())
// // post-order: 2, 12, 3, 28, 39, 36, 15
// console.log(bst.dfsPostOrder())

// // BFS
// console.log(bst.bfs())

bst.delete(2)
bst.delete(39)
bst.delete(15)
console.log(bst.dfsInOrder())