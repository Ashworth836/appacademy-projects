// Do not change this
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


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if(currentNode === null) return;
    if(currentNode.left){
      this.postOrderTraversal(currentNode.left);
    }
    if(currentNode.right){
      this.postOrderTraversal(currentNode.right);
    }
    console.log(currentNode.val);
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
    const queue = [];
    queue.push(this.root);

    while(queue.length > 0){
      let node = queue.shift();
      console.log(node.val);

      if(node.left !== null){
        queue.push(node.left);
      }

      if(node.right !== null){
        queue.push(node.right);
      }
    }

  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    const stack = [];
    stack.push(this.root);

    while(stack.length > 0){
      let node = stack.pop();
      console.log(node.val);

      if(node.left !== null){
        stack.push(node.left);
      }

      if(node.right !== null){
        stack.push(node.right);
      }
    }
}
}

module.exports = { BinarySearchTree, TreeNode };
