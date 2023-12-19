// Time complexity: O(n)
// Space complexity: O(1)
const findMinimum = arr => {
 return arr.reduce((acc, n) => (acc < n ? acc : n), undefined);
};
  
// Time complexity: O(n²)
// Space complexity: O(n)
const runningSum = arr => {
    const sums = Array(arr.length).fill(0);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= i; j++) {
            sums[i] += arr[j];
        }
    }
    return sums;
};
  
// Time complexity: O(n)
// Space complexity: O(n)
const evenNumOfChars = arr => {
    return arr.filter(str => str.length % 2 === 0).length;
};

// Time complexity: O(n²)
// Space complexity: O(n)
const smallerThanCurr = arr => {
    const smaller = Array(arr.length).fill(0);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < arr[i]) smaller[i]++;
        }
    }
    return smaller;
};
  
// Time complexity: O(n²)
// Space complexity: O(1)
const twoSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) return true;
        }
    }
    return false;
};
  
// Time complexity: O(n)
// Space complexity: O(1)
const secondLargest = arr => {
    if (arr.length <= 1) return undefined;
    const max = arr.reduce((acc, n) => (acc > n ? acc : n));
    return arr.reduce((acc, n) => {
      if (acc === max) return n;
      if (n === max) return acc;
      return acc > n ? acc : n;
    });
};
  
// Time complexity: O(n²)
// Space complexity: O(n)
const shuffle = arr => {
    const oldArr = arr.slice();
    const shuffled = [];
    for (let i = 0; i < arr.length; i++) {
      shuffled.push(
        oldArr.splice(Math.floor(Math.random() * oldArr.length), 1)[0]
      );
    }
    
    return shuffled;
};
  
module.exports = [
    findMinimum,
    runningSum,
    evenNumOfChars,
    smallerThanCurr,
    twoSum,
    secondLargest,
    shuffle
];
