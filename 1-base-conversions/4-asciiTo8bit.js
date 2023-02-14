const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/
const convertToBase2 = element => {
  // Your code here
  if(typeof element !== "number") element = convertToBase10(element);
  let binary = Array(Math.floor(Math.log2(element)) + 1).fill(0);
  for(let i = 0; i < binary.length; i++){
    let value = Math.pow(2, binary.length - 1 - i);
    if(element >= value){
      element -= value;
      binary[i] = 1;
    }
  }

  return binary.join("");
};

const asciiTo8bit = str => {
  // Your code here
  let binary = "";
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const punctuation = " !\"#$%&'()*+,-./";
  for (let i = 0; i < str.length; i++) {
    if (alpha.includes(str[i].toLowerCase())) {
      const index = alpha.indexOf(str[i].toLowerCase());
      binary += addZeros(
        convertToBase2(
          str[i] === str[i].toUpperCase() ? 65 + index : 97 + index
        ),
        8
      );
    } else if (punctuation.includes(str[i])) {
      binary += addZeros(convertToBase2(32 + punctuation.indexOf(str[i])), 8);
    } else if (!isNaN(Number(str[i]))) {
      binary += addZeros(convertToBase2(48 + Number(str[i])), 8);
    }
  }
  
  return binary;
};

/******************************************************************************/

console.log(asciiTo8bit('123'));
// 001100010011001000110011

console.log(asciiTo8bit('ABC'));
// 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001
