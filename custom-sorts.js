function ageSort(users) {
  // Your code here
  return users.sort((a, b) =>{
    return a.age - b.age;
  });
}

function oddEvenSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    if (a % 2 === 0 && b % 2 === 1) return 1; 
    if (a % 2 === 1 && b % 2 === 0) return -1; 
    return a - b;
  });
}

function validAnagrams(s, t) {
  // Your code here
  return s.split("").sort().join("") === t.split("").sort().join("");
}

function reverseBaseSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    if(a.toString().length < b.toString().length) return 1;
    if(a.toString().length > b.toString().length) return -1;
    return a - b;
  });
}

function frequencySort(arr) {
  // Your code here
  let frequencyMap = new Object();
  for (let i = 0; i < arr.length; i++) {
    frequencyMap[arr[i]] = (frequencyMap[arr[i]] || 0) + 1;
  }
  return arr.sort((a, b) => frequencyMap[a] - frequencyMap[b] || b - a);
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
