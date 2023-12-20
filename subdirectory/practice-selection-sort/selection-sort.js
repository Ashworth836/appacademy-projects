

function selectionSort(arr) {

 // Copy the original array
 let copyArr = arr.slice();
 // Create an array to store the sorted values
 let sorted = [];
 // While the array is not empty...
 while (copyArr.length) {
   // Do not move this console.log
   console.log(sorted.join(","));
   // Find the index of the minimum value in the unsorted half
   let minEl = Math.min(...copyArr)
   index = copyArr.indexOf(minEl);
   // Save and remove the value at the min index
   let removed = copyArr.splice(index, 1);
   // Add the min value to the end of the sorted array
   sorted.push(removed[0]);
 }
 console.log(sorted)
 return sorted;
}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let pointer = 0;
  // Repeat while the unsorted half is not empty:
  while(pointer < arr.length){
    // Do not move this console.log
    console.log(arr.join(","));

    let minI;
    let min = arr[pointer];

    // Find the index of the minimum value in the unsorted half
    for(let i = pointer; i < arr.length; i++){
      let element = arr[i];
      if(element < min){
        min = element;
        minI = i;
      } 
    }
    // Shift every unsorted value to the left of the min value to the right by 1
    for(let i = minI; i > pointer; i--){
      arr[i] = arr[i - 1];
    }
    // Save the min value

    // Put the min value at the divider
    arr[pointer] = min;
    // Increment the divider and repeat

    pointer++;
  }

}


module.exports = [selectionSort, selectionSortInPlace];
