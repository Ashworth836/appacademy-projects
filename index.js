function logBetween(lowNum, highNum){
    let array = [];

    for(let i = lowNum; i <= highNum; i++){
        array.push(i);
    }

    return array;
}
/**
 logBetween(-1, 2);  // => [-1, 0, 1, 2]
 logBetween(14, 6);  // => []
 logBetween(4, 6);  // => [4, 5, 6]
 */

 function logBetweenStepper(min, max, step){
    let array = [];

    for(let i = min; i <= max; i += step){
        array.push(i);
    }

    return array;
 }
/*******
 * logBetweenStepper(5, 9, 1) // => [5, 6, 7, 8, 9]
 * logBetweenStepper(-10, 15, 5) // => [-10, -5, 0, 5, 10, 15]
 */

function printReverse(min, max){

    let array = [];

    for(let i = max - 1; i > min; i--){
        array.push(i);
    }

    return array;
}
/***
 * printReverse(13, 18) // => [17, 16, 15, 14]
 * printReverse(90, 94) // => [93, 92, 91]
 */


function fizzBuzz(max){
    
    let array = [];

    for(let i = 0; i < max; i++){
        if(i % 3 === 0 && i % 5 !== 0){
            array.push(i);
        }else if(i % 3 !== 0 && i % 5 === 0){
            array.push(i);
        }
    }

    return array;
}
/**
 * fizzBuzz(20); // => [3, 5, 6, 9, 10, 12, 18]
 */

function isPrime(number){

    if(number < 2) return false;

    for(let i = 2; i < number; i++){
        if(number % i === 0){
            return false;
        }
    }

    return true;
}
/**
 * isPrime(2);  // => true
 * isPrime(10);  // => false
 * isPrime(11);  // => true
 * isPrime(9);  // => false
 * isPrime(2017);  // => true
 */

function maxValue(array){

    let max = null;

    for(let i = 0; i < array.length; i++){
        let num = array[i];
        if(num === null || num > max){
            max = num;
        }
    }

    return max;
}
/** 
 * maxValue([12, 6, 43, 2]);  // => 43
 * maxValue([]);  // => null
 * maxValue([-4, -10, 0.43]);  // => 0.43
 */

function myIndexOf(array, target){

    
    for(let i = 0; i < array.length; i++){
        let number = array[i];
        if(number === target){
            return i;
        }
    }

    return i;

}
/**
 * myIndexOf([1,2,3,4],4);
 * myIndexOf([5,6,7,8],2)
 */

function factorArray(array, number){
    return array.filter(element => number % element === 0)
}

function oddRange(end){
    let array = [];

    for(let i = 0; i <= end; i++){
        
        if(i % 2 === 1){
            array.push(i);
        }
    }

    return array;
}
/**
 * oddRange(13);  // => [ 1, 3, 5, 7, 9, 11, 13 ]
 * oddRange(6);  // => [ 1, 3, 5 ]
 */

function reversesHyphenString(string){

    let word = string.split("-");
    let array = [];

    for(let i = word.length - 1; i >= 0; i--){
        array.push(word[i]);
    }

    return array.join("-");

    // return string.split("-").reverse().join("-");
}
/**
 * reverseHyphenString("Go-to-the-store") // => "store-the-to-Go
 * reverseHyphenString("Jump,-jump-for-joy") // => "joy-for-jump-Jump,
 */

function intersect(arr1, arr2){
    let array = [];

    for(let i = 0; i < arr1.length; i++){
        let element1 = arr1[i];

        for(let j = 0; j < arr2.length; j++){
            let element2 = arr2[j];

            if(element1 === element2) array.push(element2);
        }
    }

    return array;

    // const array = arr1.filter(element => arr2.includes(element));
}
/****
 * intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) // => [ 'b', 'd' ]
 * intersect(['a', 'b', 'c'], ['x', 'y', 'z']) // => []
 */

function mirrorArray(array){

    // let clone = array.slice();
    // let mirror = [];

    // for(let i = clone.length - 1; i >= 0; i--){
    //    let arr = array[i];
    //     mirror.push(arr);    
    // }

    // return array.concat(mirror);
    
    let clone = array.slice().reverse();
    return array.concat(clone);
}
/**
 * mirrorArray([1,2,3]); //[1,2,3,3,2,1]
 * mirrorArray(["a","b","c","d","d","c","b","a"]);
 */

function removeVowel(words){
    let vowels = "aeiou";
    let newWord = "";

    for(let i = 0; i < words.length; i++){
        let word = words[i];
        if(!vowels.includes(word)){
            newWord += word;
        }
    }

    return newWord;
}

function abbreviate(sentence){

    let words = sentence.split(" ");
    let newSentence = [];

    for(let i = 0; i < words.length; i++){
        let word = words[i];
        if(word.length > 4){
            newSentence.push(removeVowel(word));
        }else{
            newSentence.push(word);
        }
    }
    return newSentence.join(" ");
}

/***
 * abbreviate('the bootcamp is fun'); // => 'the btcmp is fun'
 * abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
 * abbreviate('hello world'); // => 'hll wrld'
 * abbreviate('how are you'); // => 'how are you'
 */

function adults(people){
    return people.filter(person => person.age >= 18).map(person => person.name);
}
/***
 const ppl = [
  {name: 'John', age: 20},
  {name: 'Jim', age: 13},
  {name: 'Jane', age: 18},
  {name: 'Bob', age: 7}
 ]

adults(ppl); // => [ 'John', 'Jane' ]
 */

function countScores(people){
    let object = {};

    for(let i = 0; i < people.length; i++){
        let person = people[i];
        let name = person.name;
        let score = person.score;

        if(!object[name]){
            object[name] = score;
        }else{
            object[name] += score;
        }
    }

    return object;
}
// Example 1:
const ppl = [
    { name: "Anthony", score: 10 },
    { name: "Fred", score : 10 },
    { name: "Anthony", score: -8 },
    { name: "Winnie", score: 12 }
];
console.log(countScores(ppl)); // => { Anthony: 2, Fred: 10, Winnie: 12 }
  
  // Example 2
  const peeps = [
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 }
];
console.log(countScores((peeps))); // => { Anthony: 4, Fred: 4, Winnie: 6 }

console.log();

function firstNPrimes(n){
    let array = [];
    let i = 2;
    while(array.length < n){
        if(isPrime(i)) array.push(i);
        i++;
    }

    return array;
}
firstNPrimes(0);  // => []
firstNPrimes(1);  // => [2]
firstNPrimes(4);  // => [2, 3, 5, 7]
console.log();

function peakFinder(array){
    let arr = [];

    for(let i = 0; i < array.length; i++){
        let number = array[i];
        let prev = array[i - 1];
        let next = array[i + 1];

        if(number > prev && number > next){
            arr.push(i);
        }

        if(!prev){
            if(number > next){
                arr.push(i);
            }
        }

        if(!next){
            if(number > prev){
                arr.push(i);
            }
        }
    }

    return arr;
}

peakFinder([1, 2, 3, 2, 1]); // => [2]
peakFinder([2, 1, 2, 3, 4, 5]); // => [0, 5]
peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); // => [2, 6, 8]
console.log();

function divisibleByThreePairSum(array){
    let arr = [];

    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if((array[i] + array[j]) % 3 === 0) arr.push([i, j]);
        }
    }

    return arr;
}
/**
 const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
 arr1 // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]
 
 const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
 arr2 // => [[1, 3]]
*/

function zipArray(arr1, arr2){
    let zipped = arr1.map((element, i) => [element, arr2[i]]);
    return zipped;
}
const a1 = ['a', 'b', 'c', 'd'];
const a2 = [10, 20, 30, 40];

const result = zipArray(a1, a2);
result; // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]

function twoDimensionalTotal(array){
    let sum = 0;

    for(let i = 0; i < array.length; i++){
        let arr1 = array[i];
        for(let j = 0; j < arr1.length; j++){
            let arr2 = arr1[j]
            sum += arr2
        }
    }

    return sum;
}
/**
 const arr1 = [
     [5, 2, 5, 3],
     [12, 13],
 ];
 console.log(twoDimensionalTotal(arr1));  // => 40
   
 const arr2 = [
     [2],
     [1, 9],
     [1, 1, 1]
 ]
 twoDimensionalTotal(arr2);  // => 15

*/

function countInnerElement(arr){
    let numSum = {};

    for(array of arr){
        for(item of array){
            if(numSum[item]){
                numSum[item] += 1;
            }else{
                numSum[item] = 1;
            }
        }
    }

    return numSum;
}
/**
 const arr1 = [
     [1, 2, 4, 5],
     [2, 7, 4],
     [1, 4, 5, 2, 7]
 ]
  countInnerElement(arr1)  // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}
   
 const arr2 = [
     ['a','b','c','d'],
     ['a','b'],
     ['a','c','d','a']
 ]
 countInnerElement(arr2)  // => {a: 4, b: 2, c: 2, d: 2}
**/

function twoDiff(array){
    let arr = [];
    
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] - array[j] === 2 || array[i] - array[j] === -2){
                arr.push([i, j]);
            }
        }
    }

    return arr;
}
twoDiff([2, 3, 4, 6, 1, 7])  // => [[0, 2], [1, 4], [2, 3]]
twoDiff([0, 2, 4, 3, 5])  // => [[0, 1], [1, 2], [3,4]]
twoDiff([])  // => []


function arrayDiff(arr1, arr2){
  let difference = arr1.filter(element => !arr2.includes(element))
  .concat(arr2.filter(element => !arr1.includes(element)));
//   arr1.filter(element => !arr2.includes(element));
  return difference;
}
const array1 = [1, 23, 2, 43, 3, 4]
const array2 = [3, 23]
console.log(arrayDiff(array1, array2))  // => [1, 2, 43 ,4]

const array3 = ['a', 'ab', 'c', 'd', 'c']
const array4 = ['d']
arrayDiff(array3, array4)  // => ['a', 'ab', 'c', 'c']

function valueCounter(obj, val){
    let count = Object.values(obj).filter(element => element === val).length
    return count;
}
const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' }
valueCounter(obj1, 'Anne')  // => 3

const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 }
valueCounter(obj2, 88)  // => 0

const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' }
valueCounter(pairs, 'Roman')  // => 2

function elementCount(array){
    let object = {};

    for(item of array){ // useful for iterating over objects like arrays and strings
        if(item in object){ // useful for iterating over object properties
            object[item] += 1;
        }else{
            object[item] = 1;
        }
    }

    return object;
}
elementCount(["a", "a", "b", "b"]); // => { "a" : 2, "b" : 2 }
elementCount(['c', 'a', 'c', 'a', 'b']); // => { "c": 2, "a": 2, "b": 1 }

function nextTwoPrimes(num){
    let array = [];

    for(let i = num + 1; i < num * 10; i++){
        if(array.length >= 2){
            return array
        }else{
            if(isPrime(i)){
                array.push(i)
            }
        }
    }

    return array;
}
nextTwoPrimes(2);  // => [ 3, 5 ]
nextTwoPrimes(3);  // => [ 5, 7 ]
nextTwoPrimes(7);  // => [ 11, 13 ]
nextTwoPrimes(8);  // => [ 11, 13 ]
nextTwoPrimes(20);  // => [ 23, 29 ]
nextTwoPrimes(97);  // => [ 101, 103 ]

function pairProduct(arr, num){
    let array = [];

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if((arr[i] * arr[j]) === num){
                array.push([i, j]);
            }
        }
    }

    return array;
}
pairProduct([1, 2, 3, 4, 5], 4); // => [ [ 0, 3 ] ]
pairProduct([1, 2, 3, 4, 5], 8); // => [ [ 1, 3 ] ]
pairProduct([1, 2, 3, 12, 8], 24); // => [ [ 1, 3 ], [ 2, 4 ] ]

function twoDimensionalSize(array){
    let elements = 0;

    for(arrays of array){
        for(item of arrays){
            elements++;
        }
    }

    return elements;
}
/** 
 const arr1 = [
     [1, 2, 3],
     [4, 5],
     [6, 7, 8, 9]
   ];
   twoDimensionalSize(arr1);  // => 9
   
   const arr2 = [
     ['a'],
     ['b', 'c', 'd', 'e']
   ];
   twoDimensionalSize(arr2);  // => 5
**/

function longWordCount(string){
    let words = string.split(" ");
    let count = 0;

    for(word of words){
        if(word.length >= 7){
            count++
        }
    }

    return count;
}
/**
 longWordCount("");  // => 0
 longWordCount("short words only");  // => 0
 longWordCount("one reallylong word");  // => 1
 longWordCount("two reallylong words inthisstring");  // => 2
 longWordCount("allwordword longwordword wordswordword");  // => 3
 longWordCount("seventy schfifty five");  // => 1
**/

function factorial(n){
    let result = n <= 1 ? 1 : n * factorial(n - 1);
    return result;
}
/**
factorial(1);  // => 1
factorial(4);  // => 24
factorial(5);  // => 120
factorial(10);  // => 3628800 
*/

function lcm(num1, num2){
    
    let lowest;
    for(let i = 0; i <= num1 && i < num2; i++){
        if(num1 % i === 0 && num2 % i === 0){
            lowest = i;
        }
    }

    let lcm = (num1 * num2) / lowest;
    return lcm;
}
/**
 lcm(2, 3);  // => 6
 lcm(6, 10);  // => 30
 lcm(24, 26);  // => 312
**/

function hipsterfyWord(word){
    let vowels = "aeiou";
    let newWord = "";

    for(let i = word.length - 1; i >= 0; i--){
        if(vowels.includes(word[i])){
            newWord = word.slice(0, i) + word.slice(i + 1, word.length);
        }
    }

    return newWord;
}
/**
 hipsterfyWord('proper') // => 'propr'
 hipsterfyWord('tonic') // => 'tonc'
 hipsterfyWord('PANTHER') // => 'PANTHR'
 hipsterfyWord('BACKWARDS') // => 'BACKWRDS'
**/

function hipsterfy(sentence){
    let words = sentence.split(" ");
    let newSentence = [];

    for(let i = 0; i < words.length; i++){
        let word = words[i];
        newSentence.push(hipsterfyWord(word));
    }

    return newSentence.join(" ");
}
/**
hipsterfy("proper");  // => "propr"
hipsterfy("proper tonic panther");  // => "propr tonc panthr"
hipsterfy("towel flicker banana");  // => "towl flickr banan"
hipsterfy("runner anaconda");  // => "runnr anacond"
hipsterfy("turtle cheeseburger fries");  // => "turtl cheeseburgr fris"
**/

function objectToString(count){
    let string = "";

    for(const key in count){
        let value = count[key];
        string += key.repeat(value);
    }

    return string;
}
/**
 objectToString({ a : 2, b: 4, c: 1 }) // => 'aabbbbc'
 objectToString({ b: 1, o: 2, t: 1 }) // => 'boot'
**/

function shortestWord(sentence){
    let words = sentence.split(" ");
    
    let shortest = words.reduce((shortestWord, currentWord) => {
        return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, words[0])

    return shortest;
}
/**
  shortestWord('app academy is cool') // => 'is'
  shortestWord('programming bootcamp') // => 'bootcamp'
**/

function greatestCommonFactor(num1, num2){
    if(num2 === 0){
        return num1;
    }else{
        return greatestCommonFactor(num2, num1 % num2);
    }
}
/**
 greatestCommonFactor(15, 25) // => 5
 greatestCommonFactor(16, 24) // => 8
 greatestCommonFactor(7, 11) // => 1
*/

function isPassing(assessments){
    let result = assessments.reduce((sum, element) => sum + element.score, 0);
    let average = result/assessments.length >= 70;
    return average;
}
/**
 const assessments1 = [
  { number: 1, score: 60 },
  { number: 2, score: 90 },
  { number: 3, score: 80 },
  { number: 4, score: 100 },
  { number: 5, score: 85 }
];

isPassing(assessments1) // => true
const assessments2 = [
  { number: 1, score: 60 },
  { number: 2, score: 20 },
  { number: 3, score: 45 }
];

isPassing(assessments2) // => false
**/

function valueConcat(array, obj){
    let result = array.slice();

    for(let i = 0; i < array.length; i++){
        let element = array[i];
        if(element in obj){
            result[i] += obj[element];
        }
    }

    return result;
}
/**
 const arr = ['alex', 'maurice', 'meagan', 'ali'];
 const obj = { alex: 'bronca', ali: 'harris' }
 valueConcat(arr, obj) // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]
 
 valueConcat(['a', 'b', 'c'], { b: 2, c: 3 }) // => [ 'a', 'b2', 'c3' ]
**/

function threeInRow(arr){
    for(let i = 1; i < arr.length - 2; i++){
        if(arr[i] === arr[i - 1] && arr[i] === arr[i + 1]){
            return true;
        }
    }

    return false;
}
/**
  threeInARow([4, 3, 7, 7, 7, 13, 8]);  // => true;
  threeInARow([10, 9, 20, 33, 3, 3]);  // => false;
**/

function variableNameify(words){
    words.map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase().join(""));
}
/**
 variableNameify(['is', 'prime']) // => 'isPrime'
 variableNameify(['remove', 'last', 'vowel']) // => 'removeLastVowel'
 variableNameify(['MaX', 'VALUE']) // => 'maxValue'
**/

function threeIncreasing(arr){
    for(let i = 1; i < arr.length - 2; i++){
        if(arr[i] - arr[i - 1] === 1 && arr[i + 1] - arr[i] === 1){
            return true;
        }
    }
    return false;
}
/**
 threeIncreasing([3, 2, 11, 12, 13, 2, 4]);  // => true
 threeIncreasing([7, 2, 4, 5, 2, 1, 6]);  // => false
**/

function reverse2D(array){
    let newArray = [];

    for(let i = array.length - 1; i >= 0; i--){
        for(let j = array[i].length - 1; j >= 0; j--){
            newArray.push(array[i][j]);
        }
    }

    return newArray.join("");
}
/**
 const arr1 = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f'],
  ['g', 'h', 'i']
];

reverse2D(arr1) // => 'ihgfedcba'
const arr2 = [
  ['Julian', 'Matt', 'Mike'],
  ['Oscar', 'Patrick']
];
reverse2D(arr2) // => 'PatrickOscarMikeMattJulian'
**/

function reverb(word){
    let vowels = "aeiou";
    
    for(let i = word.length - 1; i >= 0; i--){
        if(vowels.includes(word)){
           return word + word.slice(i);
        }
    }

    return word;
}
/**
 reverb('running');  // => 'runninging'
reverb('wild');  // => 'wildild'
reverb('debugged');  // => 'debuggeded'
reverb('my');  // => 'my'
**/

function countRepeats(string){
    let repeat = {}; 
    let count = 0;

    if(string){
        for(let i = 0; i < string.length; i++){
            let str = string[i]
            if(repeat[str]){
                repeat[str] += repeat[str];
            }else{
                repeat[str] = 1;
            }
            
        }
    }
    
    for(key in repeat){
        if(repeat[key] >= 2){
            count++;
        }
    }
    return count;
}
/**
 countRepeats('calvin'); // => 0
 countRepeats('caaaalvin'); // => 1
 countRepeats('pops'); // => 1
 countRepeats('mississippi'); // => 3
 countRepeats('hellobootcampprep'); // => 4
**/

function pairsToString(arr){
    let newString = "";

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length - 1; j++){
            let counter = arr[i][ j + 1];
            while(counter > 0){
                newString += arr[i][j];
                counter--;
            }
        }
    }

    return newString;
}
/**
 const array1 = [
  ['a', 3],
  ['b', 1],
  ['c', 2]
];
pairsToString(array1);  // => 'aaabcc'

const array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];
pairsToString(array2);  // => 'food!'
**/

function countAdjacentSums(arr, n){
    let count = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] + arr[i + 1] === n){
            count++;
        }
    }

    return count;
}
/**
  countAdjacentSums([1, 5, 1], 6) // => 2
  countAdjacentSums([7, 2, 4, 6], 7) // => 0
  countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) // => 3
**/

function signFlipCount(array){
    let count = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] > 0 && array[i + 1] < 0 || array[i] < 0 && array[i + 1] > 0){
            count++;
        }
    }

    return count;
}
/**
signFlipCount([5, 6, 10, 3]); // => 0
signFlipCount([-12, 0, -3, -5]); // => 0
signFlipCount([-12, 10, -3, -5]); // => 2
signFlipCount([1, -2, -3, -4]); // => 1
signFlipCount([-1, 11.3, -3, 100]); // => 3
**/

function powerSequence(base, length){
    let array = [base];

    for(let i = 0; i < length - 1; i++){
        array.push(base * array[i]);
    }

    return array;
}
/**
powerSequence(3, 4);  // => [ 3, 9, 27, 81 ]
powerSequence(2, 6);  // => [ 2, 4, 8, 16, 32, 64 ]
powerSequence(8, 3);  // => [ 8, 64, 512 ]
**/

function collapseString(str){
    let string = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i - 1]){
            continue;
        }else{
            string += str[i];
        }
    }

    return string;
}
/**
collapseString('apple'); // => 'aple'
collapseString('AAAaalviiiiin!!!'); // => 'Aalvin!'
collapseString('hello   app academy'); // => 'helo ap academy'
**/

function oddWordsOut(sentence){
    let newSentence = [];
    let words = sentence.split(" ");

    for(let i = 0; i < words.length; i++){
        let word = words[i];
        if(word.length % 2 !== 0){
            continue;
        }else{
            newSentence.push(word)
        }
    }

    return newSentence.join(" ");
}
/**
 oddWordsOut('go to the store and buy milk');  // => 'go to milk'
 oddWordsOut('what is the answer');  // => 'what is answer'
**/

function mindPsAndQs(str){
    let longest = 0;
    let current = 0;

    for(let i = 0; i <= str.length; i++){
        let char = str[i];
        if(char === "P" || char === "Q"){
            current++;
        }else if(current > longest){
            longest = current;
            current = 0;
        }
    }

    return longest;
}
/**
mindPsAndQs('BOOTCAMP');  // => 1
mindPsAndQs('APCDQQPPC');  // => 4
mindPsAndQs('PQPQ');  // => 4
mindPsAndQs('PPPXQPPPQ');  // => 5
 */

function commonFactor(num1, num2){
    let array = [];

    for(let i = 2; i <=num1; i++){
        if(num1 % 1 === 0 && num2 % i === 0){
            array.push(i);
        }
    }

    return array;
}
/**
commonFactors(12, 50);  // => [ 1, 2 ]
commonFactors(6, 24);  // => [ 1, 2, 3, 6 ]
commonFactors(11, 22);  // => [ 1, 11 ]
commonFactors(45, 60);  // => [ 1, 3, 5, 15 ]
**/

function commonPrimeFactors(num1, num2){
    let array = [];

    for(let i = 2; i <= num1; i++){
        if(isPrime(i) === true & num1 % i === 0 && num2 % i === 0){
            array.push(i);
        }
    };

    return array;
}
/**
commonPrimeFactors(12, 50);  // => [ 2 ]
commonPrimeFactors(6, 24);  // => [ 2, 3 ]
commonPrimeFactors(11,22);  // => [ 11 ]
commonPrimeFactors(45, 60);  // => [ 3, 5 ]
**/

function splitHalfArray(array){
    let arr = [];

    if(array.length % 2 !== 0){
        const halfArrayIndex = Math.ceil(array.length / 2);
        const first = array.slice(0, halfArrayIndex);
        const second = array.slice(halfArrayIndex);

        arr.push(first, second);
    }

    console.log(arr);
    return arr;
}
/**
 splitHalfArray([1, 2, 3, 4, 5]);
  // => [ [ 1, 2 ], [ 4, 5 ] ]

 splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);
  // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
**/

function threeUniqueVowels(string){
    let vowels = ["a", "e", "i", "o", "u"];
    let count = {};

    for(let i = 0; i < string.length; i++){
        if(vowels.includes(string[i] && count[string[i]])){
            count[string[i]] += 1;
        }else if(vowels.includes(string[i]) && !count[string[i]]){
            count[string[i]] = 1;
        }
        if(Object.keys(count).length >= 3){
            return true;
        }
    }

    return false;
}
/**
threeUniqueVowels('delicious');  // => true
threeUniqueVowels('the bootcamp');  // => true
threeUniqueVowels('bootcamp');  // => false
threeUniqueVowels('dog');  // => false
threeUniqueVowels('go home');  // => false
**/

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

const isVowel = char => VOWELS.includes(char);

const nextVowel = char => {
	const currentIndex = VOWELS.indexOf(char);
	const nextIndex = currentIndex < 4 ? currentIndex + 1 : 0;
	return VOWELS[nextIndex];
}

const vowelShift = sentence  => {
	const shifted = sentence.split('').map(letter => isVowel(letter) ? nextVowel(letter): letter).join('')
	console.log(shifted);
	return shifted;
}
/**
vowelShift('bootcamp');  // => 'buutcemp'
vowelShift('hello world');  // => 'hillu wurld'
vowelShift('on the hunt');  // => 'un thi hant' 
**/

function hasSymmetry(array){
    let i = 0;
    let j = array.length - 1;

    while(i < 3){
        if(array[i] === array[j]){
            i++;
            j--;
        }else{
            return false;
        }
    }

    return true;
}
/**
hasSymmetry([1, 2, 3, 3, 2, 1]) // => true
hasSymmetry([1, 2, 3, 3, 4, 1]) // => false
hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']) // => true
hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']) // => false
**/

let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function numsToWords(num) {
    newString = '';

    for (let i = 0; i < num.length; i++) {
        newString += ones[num[i]];

    }
    console.log(newString)
    return newString;

};
/**
 numsToWords('42') // => 'FourTwo'
 numsToWords('123') // => 'OneTwoThree'
 numsToWords('159598') // => 'OneFiveNineFiveNineEight'
**/

function moreDotLessDash(str) {
    let dots = 0;
    let dashes = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.') {
            dots++;
        } else if (str[i] === '-') {
            dashes++;
        }
    }
    if (dots > dashes) {
        console.log(true)
        return true;
    }
    console.log(false)
    return false;
};
moreDotLessDash('2-D arrays are fun. I think.');  // => true
moreDotLessDash('.-.-.');  // => true
moreDotLessDash('.-');  // => false
moreDotLessDash('..--');  // => false
