const os = require('os');

// console.log('CPU info: ', os.cpus()); // Este método me muestra los recursos de mi CPU
// console.log('IP address: ', os.networkInterfaces());
// console.log('IP address: ', os.networkInterfaces().eno1.map(i => i.address));
// console.log("Free memory: ", os.freemem());
// console.log('Type: ', os.type());		// Sistema opeativo
//console.log('SO version: ', os.release())
console.log('User info: ', os.userInfo());