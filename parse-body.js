function firstStep(input) {
  // Your code here
  return input.split("&")
}

function secondStep(input) {
  // Your code here
  return input.map(pair => pair.split("="));
}

function thirdStep(input) {
  // Your code here
  return input.map(pair = pair.map(element = element.replaceAll("+", "")));
}

function fourthStep(input) {
  // Your code here
  return input.map(pair = pair.map(element = decodeURICompnent(element)));
}

function fifthStep(input) {
  // Your code here
  return Object.fromEntries(input);
}

function parseBody(str) {
  // Your code here
  return fifthStep(fourthStep(thirdStep(secondStep(fifthStep(str)))));
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};