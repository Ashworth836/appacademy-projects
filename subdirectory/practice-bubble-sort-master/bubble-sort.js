
function bubbleSort(arr) {

    let swapValue = true;
    while(swapValue){
      swapValue = false;
      let len = arr.length - 1; 
      // Iterate through the array
      for(let i = 0; i < len; i++){
          // If the current value is greater than its neighbor to the right
            // Swap those values
          if(arr[i] > arr[i + 1]){
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            swapValue = true;

            // Do not move this console.log
            console.log(arr.join(","));
          }
        }
      }

    // If you get to the end of the array and no swaps have occurred, return
    // Otherwise, repeat from the beginning
    console.log(arr);
    return arr;
}

module.exports = bubbleSort;
