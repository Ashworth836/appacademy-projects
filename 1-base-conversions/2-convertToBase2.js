// Convert the integers in the console.logs below to base 2

/******************************************************************************/
const convertToBase10 = str => {
  // Your code here
  let sum = 0;
  const hex = {a: 10, b: 11, c: 12, d: 13, e: 14, f: 15}
  for(let i = str.length - 1; i >= 2; i--){
    const number = hex[str[i]] || Number(str[i]);
    sum += Math.pow(str.startsWith("0b") ? 2 : 16, str.length - 1 - i) * number;
  }
  
  return sum;
  
};

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

  return "0b" + binary.join("");
};

/******************************************************************************/

console.log(convertToBase2(4)); // 0b100
console.log(convertToBase2(65)); // 0b1000001
console.log(convertToBase2(256)); // 0b100000000
console.log(convertToBase2(123)); // 0b1111011
console.log(convertToBase2(1000)); // 0b1111101000

console.log('––––––');

console.log(convertToBase2('0xf')); // 0b1111
console.log(convertToBase2('0xfa')); // 0b11111010
console.log(convertToBase2('0x1234')); // 0b1001000110100
console.log(convertToBase2('0xc9a1')); // 0b1100100110100001
console.log(convertToBase2('0xbf12')); // 0b1011111100010010
