
// Your code here
const message = require('./messages');
const sayHelloTo = require('./send-messages/say-hello-to');
const giveMessageToMrsPotato = require('./send-messages/give-message-to-mrs-potato');
const msg1 = giveMessageToMrsPotato.msg1;
const msg2 = giveMessageToMrsPotato.msg2;
const msg3 = giveMessageToMrsPotato.msg3;
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);
