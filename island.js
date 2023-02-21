function getNeighbors(row, col, graph) {

  let neighbors = [];


  // Check top
  if (row-1 >= 0) {
    if(graph[row-1][col] === 1) {
      neighbors.push([row-1, col])
    }
  }

  // Check bottom
  if (row+1 <= graph.length-1) {
    if (graph[row+1][col] === 1) {
    neighbors.push([row+1, col])
    }
  }

  // Check left

  if (col-1 >= 0) {
    if (graph[row][col-1] === 1) {
      neighbors.push([row,col-1])
    }
  }

  // Check right
  if (col+1 <= graph[row].length) {
    if (graph[row][col+1] === 1) {
      neighbors.push([row,col+1])
    }
  }

  // Return neighbors
  return neighbors;

  // Your code here
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  let visited = new Set()

  // Create a stack, put the starting node in the stack
  let node = [row, col]
  let stack = [node]

  // Put the stringified starting node in visited
  visited.add(node.toString())

  // Initialize size to 0
  let size = 0;

  // While the stack is not empty,
  while (stack.length) {
     // Pop the first node
    currentNode = stack.pop()
    let currentVal = graph[currentNode[0]][currentNode[1]]
    let neighbors;

    console.log(neighbors)

    if (currentVal === 1) {
      // DO THE THING (increment size by 1)
      neighbors = getNeighbors(currentNode[0], currentNode[1], graph);
      size++;

      console.log("Current Node's Neighbors are: " + neighbors)
    }

    for (let neighbor of neighbors) {
      if (!visited.has(neighbor.toString())) {
        stack.push(neighbor);
        visited.add(neighbor.toString())

        // Then push all the UNVISITED neighbors on top of the stack
        // and mark them as visited
        // HINT: This is what your helper function `getNeighbors` is for
        // HINT: Remember, you're storing your visited nodes as strings!
      }
    }
  }

  // return size
  console.log(size)
  return size;
}

module.exports = [getNeighbors, islandSize];
