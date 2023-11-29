// Import from say-hello-to.js
const sayHelloTo = require('./say-hello-to');


function giveMessageToMrsPotato(message) {
  sayHelloTo("Mrs. Potato");
  console.log(`(Psst... ${message})`)
}

giveMessageToMrsPotato("Hi Buzz");

// Export
module.exports =  giveMessageToMrsPotato;
