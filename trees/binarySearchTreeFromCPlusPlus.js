//MY CODE SCHOOL BST FROM C++
// //Binary Search Tree
// //a binary tree in which for each node, value of all the nodes in the left subtree is less or equal and value of all the nodes in right subtree is greater

// function BstNode (data, left = null, right = null) {
//   data = data
//   left = left
//   right = right
//   const printNode = () => {
//     console.log(data, left, right)
//   }
//   return {
//     data,
//     left,
//     right,
//     printNode
//   }
// }

// // const louby = new BstNode(2, null, null)
// // const louella = new BstNode(3, null, null)
// // const lou = new BstNode(1,louby,louella)
// // lou.printNode()
// // louella.printNode()
// // louby.printNode()



// //keep up with address of the root node
// function BinarySearchTree(){
//   const root = null
//   //create a new node to be inserted
//   const createNode = (value) => {
//     const newNode = new BstNode(value)
//     return newNode
//   }

//   //insert a node in tree
//   const insert = (root, data) => {
//     if (root === null){
//       root = createNode(data)
//       return root
//     } else if (data <= root.val) {
//       insert(root.leftChild, data)
//     }  else if (data >= root.val) {
//       insert(root.rightChild, data)
//     }
//     return root
//   }

//   const search = (root, data) => {
//     if (root === null) {
//       return true
//     } else if (root.data === data){
//       return true
//     } else if (data <= root.data){
//       search(root.left, data)
//     } else {
//       return search(root.right, data)
//     }
    
//   }

//   return {
//     root,
//     createNode,
//     search
//   }
// }

// const bst = BinarySearchTree()
// bst.root = bst.createNode(15)
// bst.root.printNode()
// console.log(bst.root)