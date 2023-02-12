function isFive(num) {
  // Your code here
  if(num === 5){
    return true;
  }
  
  return false;
}

function isOdd(number) {
  // Your code here
  if(typeof number !== 'number'){
    throw new Error("This is not a number");
  }

  if(number % 2 !== 0){
    return true;
  }else{
    return false;
  }
}

function myRange(min, max, step = 1) {
  // Your code here

  let array = [];

  for(let i = min; i <= max; i+=step){
    array.push(i);
  }

  return array;

}


module.exports = { isFive, isOdd, myRange };
