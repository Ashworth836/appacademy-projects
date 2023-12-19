const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  let sum = [];
  
  // Then, add timing code
  for(let i = increment; i <= 10 * increment; i += increment){
    console.time("addNums");
    sum.push(addNums(i));
    console.timeLog("addNums");
    console.timeEnd("addNums");
  }
  

  // Your code here
  return sum;
}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code
  let sum = [];

  for(let i = increment; i <= 10 * increment; i += increment){
    // console.time("addManyNums");
    const startTime = Date.now();
    sum.push(addManyNums(i));
    const endTime = Date.now();
    console.log(endTime - startTime);
    // console.timeLog("addMnayNums");
    // console.timeEnd("addMnayNums");
    
  }

  return sum;


  // Your code here

}


// function addNums100Timing(increment) {
//   const sums = [];
//   for (let i = increment; i <= increment * 100; i += increment) {
//     // console.time("addNums");
//     const startTime = Date.now();
//     sums.push(addNums(i));
//     console.log(Date.now() - startTime);
//     // console.timeLog("addNums");
//     // console.timeEnd("addNums");
//   }
//   return sums;
// }

// function addManyNums100Timing(increment) {
//   const sums = [];
//   for (let i = increment; i <= increment * 100; i += increment) {
//     // console.time("addManyNums");
//     const startTime = Date.now();
//     sums.push(addManyNums(i));
//     console.log(Date.now() - startTime);
//     // console.timeLog("addManyNums");
//     // console.timeEnd("addManyNums");
//   }
//   return sums;
// }

// n = 1000000;
// console.log(`addNums(${n}): `);
// addNums100Timing(1000000);

// console.log("\n***********\n");

// n = 1000;
// console.log(`addManyNums(${n}): `);
// addManyNums100Timing(5000);
