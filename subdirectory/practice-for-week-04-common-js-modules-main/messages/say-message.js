// Import from helloMessage
const helloMessage = require("./hello-message");

function sayMessage(message) {
  console.log(`"${message}"`)
}

sayMessage(helloMessage);

//Export
module.exports = sayMessage;
