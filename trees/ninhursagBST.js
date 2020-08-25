class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BST {
  constructor(root) {
    this.root = new Node(root)
    this.count = 0
  }

  insert(val) {
    const newNode = new Node(val)

    const searchTree = (root) => {
      if (root.val >= val) {
        // add node to left side
        if (root.left) {
          searchTree(root.left)
        } else {
          root.left = newNode
        }
      } else if (root.val < val) {
        // add node to right
        if (root.right) {
          searchTree(root.right)
        } else {
          root.right = newNode
        }
      }
    }
    searchTree(this.root)
  }

  min(){
    let currentNode = this.root
    while(currentNode.left) {
      currentNode = currentNode.left
    }
    return currentNode.val
  }

  max(){
    let currentNode = this.root
    while(currentNode.right) {
      currentNode = currentNode.right
    }
    return currentNode.val
  }
  
  contains() {

  }

  dfsInOrder() {
    const result = []

    const traverseTree = (root) => {
      if (root.left) traverseTree(root.left)
      result.push(root.val)
      if(root.right) traverseTree(root.right)
    }

    traverseTree(this.root)
    return result
  }

  dfsPreOrder() {
    const result = []

    const traverseTree = (root) => {
      result.push(root.val)
      if (root.left) traverseTree(root.left)
      if(root.right) traverseTree(root.right)
    }

    traverseTree(this.root)
    return result
  }

  dfsPostOrder() {
    const result = []

    const traverseTree = (root) => {
      if (root.left) traverseTree(root.left)
      if(root.right) traverseTree(root.right)
      result.push(root.val)
    }

    traverseTree(this.root)
    return result
  }

  bfs() {
    const queue = []
    const result = []
    queue.push(this.root)

    while (queue.length) {
      const currentNode = queue.shift()
      result.push(currentNode.val)
      if (currentNode.left) queue.push(currentNode.left)
      if (currentNode.left) queue.push(currentNode.right)
    }
    return result
  }
  getHeight() {
    const height = (root) => {
      if (root === null) return -1
      return Math.max(height(root.left), height(root.right)) + 1
    }
    return height(this.root)
  }
}

const bst = new BST(15)

bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)
console.log(bst.min())

console.log(bst)
console.log(bst.dfsInOrder())
console.log(bst.dfsPreOrder())
console.log(bst.dfsPostOrder())
console.log(bst.bfs())
console.log(bst.getHeight())