const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here
  let currentNode = rootNode;
  let minVal = currentNode.val;

  while(currentNode.left !== null){
    console.log(currentNode.val);
    return findMinBST(currentNode.left);
  }

  return minVal;
}

function findMaxBST (rootNode) {
  // Your code here
  let currentNode = rootNode;
  let maxVal = currentNode.val;

  while(currentNode.right !== null){
    console.log(currentNode.val);
    return findMaxBST(currentNode.right);
  }

  return maxVal;
}

function findMinBT (rootNode) {
  // Your code here
  let smallest = 1000;
  const stack = [rootNode];

  while(stack.length > 0) {
    let current = stack.pop()

    if (current.val < smallest) smallest = current.val;

    if (current.left != null) stack.push(current.left)
    if (current.right != null) stack.push(current.right)

  }

  return smallest;

}

function findMaxBT (rootNode) {
  // Your code here
  let biggest = 0;
  let stack = [rootNode];

  while(stack.length > 0){
    let current = stack.pop();

    if(current.val > biggest) biggest = current.val;
    if(current.left !== null) stack.push(current.left);
    if(current.right !== null) stack.push(current.right);
  }

  return biggest;
}

function getHeight (rootNode) {
  // Your code here
  let current = rootNode;

  if(current === null) return -1;

  left = getHeight(current.left);
  right = getHeight(current.right);

  if(left > right){
    return left += 1;
  }else{
    return right += 1;
  }
}

function height(rootNode){
     
  // base condition when binary tree is empty
  if(rootNode == null)
      return 0

  return Math.max(height(rootNode.left), height(rootNode.right)) + 1
}

function balancedTree(rootNode){
     
  // Base condition
  if(rootNode == null)
      return true

  // For left and right subtree height
  let left = height(rootNode.left)
  let right = height(rootNode.right)

  // Allowed values for (left - right) are 1, -1, 0
  if (Math.abs(left - right) <= 1 && balancedTree(
    rootNode.left) == true && balancedTree( rootNode.right) == true)
    return true

  // If we reach here means tree is not height-balanced tree
  return false
}

function countNodes (rootNode) {
  // Your code here
  let total = 1;
  const stack = [rootNode];

  // While stack is not empty
  while(stack.length > 0) {
    let current = stack.pop()

    // Count the left side
    if (current.left != null){
      total += 1;
      stack.push(current.left)
    }
    // Count the right side
    if (current.right != null){
      total += 1;
      stack.push(current.right)
    }
  }
  // Return the total and hit the "That was Easy" button. *Sigh*
  return total;
}

function getParentNode(rootNode, target) {

  const stack = [rootNode];
  if (target === rootNode.val) {
    return null;
  }

  // While stack is not empty
  while(stack.length > 0) {
    let current = stack.pop()

    // Count the left side
    if (current.left != null){
      stack.push(current.left)
      if (current.left.val === target) {
        return current;
      }
    }
    // Count the right side
    if (current.right != null){
      if (current.right.val === target) {
        return current;
      }
      stack.push(current.right)
    }
  }
};

const findMaximum = (root) => {
  while(root.right){
    root = root.right;
  }
  
  return root.val;
}

function inOrderPredecessor (rootNode, target, parent = null) {
    // if this is our target node
    if (target === rootNode.val && rootNode.left) {
  
      return findMaxBST(rootNode.left); // reuse function from prior exercise
    }
    // if we need to look to the left of the current node
  
    if (target < rootNode.val) {
      return inOrderPredecessor(rootNode.left, target, parent);
    }
    // if we need to look to the right of the current node
    if (target > rootNode.val) {
      return inOrderPredecessor(rootNode.right, target, rootNode);
    }
    if (parent) {
      return parent.val;
    }
    return null;
  }


var deleteNodeBST = function(rootNode, target) {

  if (!rootNode) return rootNode;

    
    if (rootNode.val === target){
        if (!rootNode.left && !rootNode.right){
            return null;
        } 
        if (!rootNode.right){
            return rootNode.left;
        }
        const succ = inOrderSuccessor(rootNode.right);
        rootNode.val = succ.val;
        rootNode.right = deleteNodeBST(rootNode.right, succ.val);
        return rootNode;
      } 
    
    if (target < rootNode.val)
        rootNode.left = deleteNodeBST(rootNode.left, target);
    if (target > rootNode.val)
        rootNode.right = deleteNodeBST(rootNode.right, target);

    return rootNode;
};

const inOrderSuccessor = (node) => {
    while(node.left) {
        node = node.left;
    }
    return node;
}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
