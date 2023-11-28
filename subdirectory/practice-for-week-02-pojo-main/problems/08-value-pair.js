/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

function valuePair(obj1, obj2, key) {
  // Your code here
  const pairs = [];

  for(let keys in obj1){
    let value = obj1[keys];
    if(keys === key){
      pairs.push(value)
    }
  };

  for(let keys in obj2){
    let value = obj2[keys];
    if(keys === key){
      pairs.push(value)
    }
  };

  return pairs;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
