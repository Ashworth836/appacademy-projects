function linearSearch (arr, target) {
 
  // Can you solve this in one line?
  return arr.indexOf(target);
};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let startIndex = 0;
  let endIndex = arr.length - 1;
  // While high and low indices do not overlap...
  while(endIndex >= startIndex){
    // Find the midpoint between high and low indices
    let midpoint = Math.floor( ( endIndex + startIndex ) / 2);

    // Compare the target value to the midpoint value
    
    // If the target equals the midpoint...
    if(target === arr[midpoint]){
      // Return the midpoint index
      return midpoint;
    }

    // If the target is higher than the midpoint...
    if(target > arr[midpoint]){
      // Move the low pointer to midpoint + 1
      startIndex = midpoint + 1;
    }

    // If the target is less than the midpoint...
    if(target < arr[midpoint]){
      // Move the high pointer to midpoint - 1
      endIndex = midpoint - 1;
    }

  }
  // Return -1 if the loop exits with overlapping pointers
  return -1;

}


module.exports = [linearSearch, binarySearch]
