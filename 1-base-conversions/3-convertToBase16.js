// Convert the integers in the console.logs below to base 16:

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

const convertToBase16 = element => {
  // Your code here
  if(typeof element !== "number") element = convertToBase10(element);
  const hex = Array(Math.floor(Math.log10(element) / Math.log10(16)) + 1);
  const hexConversions = {10: "a", 11: "b", 12: "c", 13: "d", 14: "e", 15: "f"};
  for(let i = 0; i < hex.length; i++){
    const value = Math.floor(element / Math.pow(16, hex.length - 1 -i));
    element -= value * Math.pow(16, hex.length - 1 - i);
    hex[i] = String(value).length > 1 ? hexConversions[value] : value;
  }

  return "0x" + hex.join("");
};

/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log('––––––');

console.log(convertToBase16('0b1100')); // 0xc
console.log(convertToBase16('0b0101')); // 0x5
console.log(convertToBase16('0b1000')); // 0x8
console.log(convertToBase16('0b0111')); // 0x7

console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33
