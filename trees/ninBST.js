class Node {
  constructor(value) {
    this.value = value
    this.right = null
    this.left = null
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value)
    this.count = 1
  }

  size = () => {
    return this.count
  }

  insert = (value) => {
    this.count++
    const newNode = new Node(value)

    //insert node into tree, using recursion
    const searchTree = root => {
      if (root.value > value) {
        if (!root.left) {
          root.left = newNode
        } else {
          searchTree(root.left)
        }
      } else if (root.value < value) {
        if (!root.right) {
          root.right = newNode
        } else {
          searchTree(root.right)
        }
      }
    }

    return searchTree(this.root)
  }

  min = () => {
    let currentNode = this.root
    while(currentNode.left) {
      currentNode = currentNode.left
    }
    return currentNode.value
  }

  max = () => {
    let currentNode = this.root
    while(currentNode.right) {
      currentNode = currentNode.right
    }
    return currentNode.value
  }

  contains = (value) => {
    let currentNode = this.root

    while(currentNode) {
      if (value === currentNode.value) {
        return true
      } else if (value > currentNode.value) {
        currentNode = currentNode.right
      } else if (value < currentNode.value) {
        currentNode = currentNode.left
      }
    }
    return false
  }
  
  dfsInOrder = () => {
    const result = []

    const traverse = node => {
      if (node.left) traverse(node.left)
      result.push(node.value)
      if (node.right) traverse(node.right)
    }
    
    traverse(this.root)
    return result
  }

  dfsPreOrder = () => {
    const result = []

    const traverse = node => {
      result.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    
    traverse(this.root)
    return result
  }

  dfsPostOrder = () => {
    const result = []

    const traverse = node => {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      result.push(node.value)
    }
    
    traverse(this.root)
    return result
  }

  bfs = () => {
    let result = []
    let queue = []
    queue.push(this.root)
    while(queue.length){
      let currentNode = queue.shift()
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

// DFS
// in-order: 2,3,12,15,28,36,39
console.log(bst.dfsInOrder())
// pre-order: 15,3,2,12,36,28,39
console.log(bst.dfsPreOrder())
// post-order: 2, 12, 3, 28, 39, 36, 15
console.log(bst.dfsPostOrder())

// BFS
console.log(bst.bfs())
