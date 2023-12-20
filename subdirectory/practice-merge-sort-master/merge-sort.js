// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
    if(arr.length < 2){
      return arr;
    }
  // Divide the array in half
  let middle = Math.floor(arr.length / 2);
  // Recursively sort the left half
  let left = arr.slice(0, middle);
  // Recursively sort the right half
  let right = arr.slice(middle);
  // Merge the halves together and return
  return merge(mergeSort(left), mergeSort(right));
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let array = [];
  // Point to the first value of each array
  // While there are still values in each array...
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
    while(arrA.length && arrB){
      if(arrA[0] < arrB[0]){
        array.push(arrA.shift());
      } else {
        array.push(arrB.shift());
      }
    }
  // Return the return array
  return [...array, ...arrA, ...arrB]
}

module.exports = [merge, mergeSort];
