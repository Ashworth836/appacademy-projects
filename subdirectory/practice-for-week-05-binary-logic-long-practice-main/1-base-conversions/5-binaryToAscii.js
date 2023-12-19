// Translate the binary sequences in the
// console.logs below to 8-bit ASCII strings:

/******************************************************************************/

// Helper function to convert a binary string into an array of 8-bit strings
const binaryStringToArray = str => {
  let binary8bitStr = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    binary8bitStr += str[i];
    count++;

    if (count % 8 === 0) {
      if (!str[i + 1]) break;
      binary8bitStr += ',';
    }
  }

  return binary8bitStr.split(',');
};

const convertToBase10 = str => {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += Math.pow(2, str.length - i - 1) * Number(str[i]);
  }
  
  return sum;
};

const binaryToAscii = str => {
  // Your code here
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const punctuation = " !\"#$%&'()*+,-./";
  const binary = binaryStringToArray(str).map(n => convertToBase10(n));
  let ascii = "";
  binary.forEach(n => {
    if (n >= 65 && n <= 90) {
      ascii += alpha[n - 65].toUpperCase();
    } else if (n >= 97 && n <= 122) {
      ascii += alpha[n - 97];
    } else {
      ascii += punctuation[n - 32];
    }
  });
  return ascii;
};

/******************************************************************************/

console.log(binaryToAscii('011000010110001001100011'));
// 'abc'

console.log(binaryToAscii('010000010100001001000011'));
// 'ABC'

console.log(binaryToAscii('010010000110010101101100011011000110111100101100001000000111011101101111011100100110110001100100'));
// 'Hello, world'
