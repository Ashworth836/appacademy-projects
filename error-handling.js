// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

try{
  let res = sum(null);
  console.log(res);
}catch (error){
  console.error(error.message);
}

// 2.

// Your code here
function sayName(name){
  if(typeof name !== 'string'){
    throw new TypeError ("Name must be a string!");
  }else{
    console.log(name);
  }
}

// tests
try {
  sayName("Alex");
  sayName(1);
} catch (error) {
 console.error(error.message);
}

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet()
} catch (error) {
  console.log("Helle World");
}
