// Your code here
Array.prototype.isEqual = function(arr){
    return this.every((element, i) => element === arr[i]);
}
