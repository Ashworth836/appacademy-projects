function myMap(inputArray, callback) {
  // Your code here
  const arr = [];
  inputArray.forEach(element => arr.push(callback(element)));
  return arr;
}

module.exports = myMap;
