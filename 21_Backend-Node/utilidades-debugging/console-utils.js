// %s string
// %d número
// %j JSON

console.log("Un %s y un %s", "perrito", "gatito");

console.info("Hello world");	// Es un alias de un console.log

console.warn("Hello error");	// Alias de error

console.assert(42 === '42');

// console.trace("hello");	// Nos indica la línea donde se está ejecutando el error

const util = require('util');
const debuglog = util.debuglog('foo');

debuglog('Hello from foo');

// Para hacer un debugg desde consola ejecuto  NODE_DEBUG=foo node console-utils.js
// Me arroja el PID  del proceso e información adicional