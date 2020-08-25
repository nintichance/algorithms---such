class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BST{
  constructor(val) {
    this.root = new Node(val)
    this.count = 1
  }

  size() {
    return this.count
  }

  insert(val) {
    const newNode = new Node(val)
    this.count++
    const searchTree = (root) => {
      if (val < root) {
        // go left
        if (root.left) {
          searchTree(root.left)
        } else {
          root.left = newNode
        }
      } else {
        // go right
        if (root.right) {
          searchTree(root.right)
        } else {
          root.right = newNode
        }
      }
    }
    searchTree(this.root)
  }

  min() {
    let currentNode = this.root
    while (currentNode.left) {
      currentNode = currentNode.left
    }
    return currentNode.val
  }

  max() {
    let currentNode = this.root
    while (currentNode.right) {
      currentNode = currentNode.right
    }
    return currentNode.val
  }

  contains() {

  }

  dfsInOrder() {
    // LE RO RI
    const result = []

    const traverse = (root) => {
      if (root.left) traverse(root.left)
      result.push(root.val)
      if (root.right) traverse(root.right)
    }
    traverse(this.root)
    return result
  } 

  dfsPreOrder() {
    const result = []

    const traverse = (root) => {
      result.push(root.val)
      if (root.left) traverse(root.left)
      if (root.right) traverse(root.right)
    }
    traverse(this.root)
    return result
  }

  dfsPostOrder() {
    const result = []

    const traverse = (root) => {
      if (root.left) traverse(root.left)
      if (root.right) traverse(root.right)
      result.push(root.val)
    }
    traverse(this.root)
    return result
  }

  bfs() {
    const queue = []
    const result = []
    queue.push(this.root)

    while (queue.length) {
      const curr = queue.shift()
      result.push(curr.val)
      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)
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
console.log(bst.size())
console.log(bst.dfsInOrder())
console.log(bst.dfsPreOrder())
console.log(bst.dfsPostOrder())
console.log(bst.bfs())
// console.log(bst.getHeight())