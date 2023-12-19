// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
  
    constructor() {
      // Your code here
      this.root = null;
    }
  
    insert(val, currentNode=this.root) {
      // Your code here
      if (this.root === null ) { //Empty tree, need to set tree root;
        this.root = new TreeNode(val);
        return;
      }   
  
      if (val < currentNode.val) { // Left recursive searching null
        if (currentNode.left === null) { // No node left, setting
          currentNode.left = new TreeNode(val)              
        } else {     
          this.insert(val, currentNode.left) // If left node, recurse;
        } return // Need return after recursive!
           
      } else if (val > currentNode.val) { // Right
        if (currentNode.right === null) { // No node right, setting
          currentNode.right = new TreeNode(val)              
        } else {     
          this.insert(val, currentNode.right) // If right node, recurse;
        } return // Need return after recursive!    
      }   
      
    }
  
    search(val, currentNode=this.root) {
      // Your code here
      if (currentNode === null) return false;
      if (currentNode.val === val) return true;
      if (val < currentNode.val) {
        return this.search(val, currentNode.left)
      } else if(val > currentNode.val) {
        return this.search(val, currentNode.right)
      }
    }
  
    // preOrderTraversal() prints the node value first, then recursively visits 
    // the left and right nodes. The example tree would print out 4, 3, 5.
  
    preOrderTraversal(currentNode = this.root) {
      // Your code here
      console.log(currentNode.val);
      if (currentNode.left) {
        this.preOrderTraversal(currentNode.left)
      }
      if (currentNode.right) {
        this.preOrderTraversal(currentNode.right)
      }
      return;
    }
  
  
    // inOrderTraversal() recursively visits the left node, then prints the current
    // node value, then recursively visits the right node. The example tree would print out 3, 4, 5.
  
    inOrderTraversal(currentNode = this.root) {
      // Your code here
      if (currentNode === null) return;
  
      if (currentNode.left) {
        this.inOrderTraversal(currentNode.left)
      }
  
      console.log(currentNode.val)
  
      if (currentNode.right) {
        this.inOrderTraversal(currentNode.right)
      }
      return;
    }
  
    // postOrderTraversal() recursively visits the left and right nodes, then prints the current node value. 
    // The example tree would print out 3, 5, 4.
    postOrderTraversal(currentNode = this.root) {
      // Your code here
      if (currentNode === null) return;
  
      if (currentNode.left) {
        this.postOrderTraversal(currentNode.left)
      }
      if (currentNode.right) {
        this.postOrderTraversal(currentNode.right)
      }
      console.log(currentNode.val)
      return;
    }
  
      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      // your code here
      // initialize a stack with the root node
      const queue = [];
      queue.push(this.root)
      
  
      // while the stack is not empty
      while (queue.length > 0) {
        // print and remove first node in stack
        let node = queue.shift()
        console.log(node.val)
  
         // if the node has a left node
      // push the left node on the back of the stack
      if (node.right != null) {
        queue.push(node.left)
      }
      // if the node has a right node
      // push the right node on the back of the stack
      if (node.right != null) {
        queue.push(node.right)
      }
    }
    }
  
    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      // your code here
  
      const stack = [];
      stack.push(this.root)
  
  
      // while the queue is not empty
      while (stack.length > 0) {
        // print and remove first node in queue
        let currentNode = stack.pop()
        console.log(currentNode.val)
        
  
      // if the node has a left node
      // push the left node on the back of the queue
      if (currentNode.left != null) {
        stack.push(currentNode.left)
      }
      // if the node has a right node
      // push the right node on the back of the queue
      if (currentNode.right != null) {
        stack.push(currentNode.right)
      }
    }
  }
  }
  
  module.exports = { BinarySearchTree, TreeNode };
