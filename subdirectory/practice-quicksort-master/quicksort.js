function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
    if(arr.length < 2){
      return arr;
    }
  // Pick the first value as the pivot
  let pivot = arr[arr.length -1];
  let newArray = [];
  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
      let leftArray = [];
      // every number larger (or equal) than the pivot is to the right
      let rightArray = [];

      for(let i = 0; i < arr.length-1; i++){
        if(arr[i] < pivot){
          leftArray.push(arr[i]);
        } else {
          rightArray.push(arr[i]);
        }
      }
  // Recursively sort the left
  // Recursively sort the right
  // Return the left, pivot and right in sorted order
  if(leftArray.length > 0 && rightArray.length > 0) {
    return [...quicksort(leftArray), pivot, ...quicksort(rightArray)]
  } else if (leftArray.length > 0) {
    return [...quicksort(leftArray), pivot] 
  } else {
    return [pivot, ...quicksort(rightArray)]
  }
  
}


module.exports = [quicksort];
